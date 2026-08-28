import http from 'http';
import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import * as wisp from '@mercuryworkshop/wisp-js';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';

const app = express();
const server = http.createServer(app);

app.use(express.json());

// -------------------------------------------------------------
// 1. SIMPLE PORTABLE DATABASE (db.json)
// -------------------------------------------------------------
const DB_PATH = './db.json';

const loadDb = () => {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({
      users: {},
      globalChat: [],
      rooms: {}
    }, null, 2));
  }
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  } catch (e) {
    return { users: {}, globalChat: [], rooms: {} };
  }
};

const saveDb = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

// Seed initial rooms
const db = loadDb();
if (!db.rooms) db.rooms = {};
if (!db.globalChat) db.globalChat = [];
saveDb(db);

// -------------------------------------------------------------
// 2. AUTH REST API
// -------------------------------------------------------------
app.post('/api/register', (req, res) => {
  const { username, avatarUrl } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });
  
  const currentDb = loadDb();
  const lowerName = username.trim().toLowerCase();
  
  const exists = Object.values(currentDb.users).some((u) => u.username.toLowerCase() === lowerName);
  if (exists) {
    return res.status(400).json({ error: 'Игрок с таким никнеймом уже зарегистрирован!' });
  }

  const userId = 'user_' + Math.random().toString(36).substring(2, 11);
  const newUser = {
    id: userId,
    username: username.trim(),
    avatarUrl: avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky',
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    favorites: [],
    customGames: [],
    achievements: [],
    highScores: {},
    createdAt: new Date().toISOString()
  };

  currentDb.users[userId] = newUser;
  saveDb(currentDb);
  res.json({ success: true, user: newUser });
});

app.post('/api/login', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  const currentDb = loadDb();
  const lowerName = username.trim().toLowerCase();
  
  const foundUser = Object.values(currentDb.users).find((u) => u.username.toLowerCase() === lowerName);
  if (!foundUser) {
    return res.status(404).json({ error: 'Пользователь не найден!' });
  }

  res.json({ success: true, user: foundUser });
});

app.post('/api/update-profile', (req, res) => {
  const { userId, profileData } = req.body;
  if (!userId) return res.status(400).json({ error: 'UserId required' });

  const currentDb = loadDb();
  if (!currentDb.users[userId]) {
    return res.status(404).json({ error: 'User not found' });
  }

  currentDb.users[userId] = {
    ...currentDb.users[userId],
    ...profileData
  };
  saveDb(currentDb);
  res.json({ success: true, user: currentDb.users[userId] });
});

// -------------------------------------------------------------
// 3. HTTP PROXY UNBLOCKER (/proxy)
// -------------------------------------------------------------
app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl || typeof targetUrl !== 'string') {
    return res.status(400).send('Missing url parameter');
  }

  let formattedUrl = targetUrl.trim();
  if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
    formattedUrl = 'https://' + formattedUrl;
  }

  try {
    const urlObj = new URL(formattedUrl);
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Accept': req.headers['accept'] || 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': req.headers['accept-language'] || 'en-US,en;q=0.9',
      'Referer': urlObj.origin,
      'Origin': urlObj.origin,
    };

    const response = await fetch(formattedUrl, {
      method: 'GET',
      headers,
      redirect: 'follow',
    });

    const contentType = response.headers.get('content-type') || 'text/html';
    res.setHeader('Content-Type', contentType);

    // Strip frame restrictions
    res.removeHeader('X-Frame-Options');
    res.removeHeader('Content-Security-Policy');
    res.removeHeader('Cross-Origin-Opener-Policy');
    res.removeHeader('Cross-Origin-Embedder-Policy');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (contentType.includes('text/html')) {
      let html = await response.text();

      // Inject base href & unblocker hooks
      const injectScript = `
        <base href="${formattedUrl}">
        <script>
          // Automatic link and form proxy interceptor
          document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('a').forEach(a => {
              const orig = a.getAttribute('href');
              if (orig && !orig.startsWith('#') && !orig.startsWith('javascript:')) {
                a.addEventListener('click', (e) => {
                  try {
                    const abs = new URL(orig, "${formattedUrl}").href;
                    if (abs.startsWith('http')) {
                      e.preventDefault();
                      window.location.href = '/proxy?url=' + encodeURIComponent(abs);
                    }
                  } catch(err) {}
                });
              }
            });

            document.querySelectorAll('form').forEach(f => {
              f.addEventListener('submit', (e) => {
                const action = f.getAttribute('action') || '';
                try {
                  const abs = new URL(action, "${formattedUrl}").href;
                  const inputs = new URLSearchParams(new FormData(f)).toString();
                  const target = abs.includes('?') ? (abs + '&' + inputs) : (abs + '?' + inputs);
                  e.preventDefault();
                  window.location.href = '/proxy?url=' + encodeURIComponent(target);
                } catch(err) {}
              });
            });
          });
        </script>
      `;

      if (html.includes('<head>')) {
        html = html.replace('<head>', '<head>' + injectScript);
      } else if (html.includes('<html>')) {
        html = html.replace('<html>', '<html><head>' + injectScript + '</head>');
      } else {
        html = injectScript + html;
      }

      return res.send(html);
    } else {
      const buffer = Buffer.from(await response.arrayBuffer());
      return res.send(buffer);
    }
  } catch (err) {
    console.error('Proxy fetch error for', formattedUrl, ':', err.message);
    res.status(502).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Unable to load page</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            padding: 20px;
          }
          .error-box {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            text-align: center;
            backdrop-filter: blur(10px);
          }
          .error-icon {
            font-size: 64px;
            margin-bottom: 20px;
            opacity: 0.8;
          }
          h2 {
            font-size: 24px;
            margin-bottom: 15px;
            color: #ff6b6b;
          }
          p {
            color: rgba(255,255,255,0.7);
            margin-bottom: 10px;
            line-height: 1.6;
          }
          .url {
            font-family: monospace;
            background: rgba(0,0,0,0.3);
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 12px;
            word-break: break-all;
            margin: 15px 0;
          }
          .btn {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 600;
            transition: transform 0.2s, opacity 0.2s;
          }
          .btn:hover {
            transform: scale(1.05);
            opacity: 0.9;
          }
          .info {
            margin-top: 25px;
            font-size: 11px;
            color: rgba(255,255,255,0.4);
          }
        </style>
      </head>
      <body>
        <div class="error-box">
          <div class="error-icon">😿</div>
          <h2>Page Cannot Be Loaded</h2>
          <p>This website may be blocking embedding or has security restrictions.</p>
          <div class="url">${formattedUrl}</div>
          <p style="font-size: 12px;">Error: ${err.message}</p>
          <a href="/proxy?url=${encodeURIComponent(formattedUrl)}" class="btn">Try Again</a>
          <p class="info">Some websites don't allow being opened in iframes for security reasons.</p>
        </div>
      </body>
      </html>
    `);
  }
});

// -------------------------------------------------------------
// 4. WEBSOCKET CHAT & ONLINE COUNTER SERVER
// -------------------------------------------------------------
const wss = new WebSocketServer({ noServer: true });
const wsClients = new Set();

server.on('upgrade', (req, socket, head) => {
  if (req.url?.startsWith('/wisp')) {
    wisp.server.routeRequest(req, socket, head);
  } else if (req.url?.startsWith('/ws')) {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws, req);
    });
  } else {
    socket.destroy();
  }
});

const broadcastOnlineCount = () => {
  const message = JSON.stringify({ type: 'onlineCount', count: wsClients.size });
  wsClients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

wss.on('connection', (ws) => {
  wsClients.add(ws);
  broadcastOnlineCount();

  // Send historical global chat messages on connect
  const currentDb = loadDb();
  ws.send(JSON.stringify({
    type: 'initGlobalChat',
    messages: currentDb.globalChat.slice(-50)
  }));

  ws.on('message', (msgStr) => {
    try {
      const data = JSON.parse(msgStr.toString());
      const state = loadDb();

      if (data.type === 'globalMessage') {
        const msg = {
          id: Math.random().toString(36).substring(2, 9),
          username: data.username,
          avatarUrl: data.avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky',
          text: data.text,
          timestamp: new Date().toISOString()
        };
        state.globalChat.push(msg);
        saveDb(state);

        // Broadcast to everyone
        const out = JSON.stringify({ type: 'globalMessage', message: msg });
        wsClients.forEach((c) => {
          if (c.readyState === WebSocket.OPEN) c.send(out);
        });
      }

      else if (data.type === 'createRoom') {
        const roomCode = Math.floor(100000 + Math.random() * 900000).toString();
        state.rooms[roomCode] = {
          name: data.roomName || `Комната ${roomCode}`,
          messages: []
        };
        saveDb(state);

        ws.send(JSON.stringify({
          type: 'roomCreated',
          roomCode,
          room: state.rooms[roomCode]
        }));
      }

      else if (data.type === 'joinRoom') {
        const room = state.rooms[data.roomCode];
        if (!room) {
          ws.send(JSON.stringify({ type: 'error', message: 'Комната не найдена!' }));
        } else {
          ws.roomCode = data.roomCode;
          ws.send(JSON.stringify({
            type: 'roomJoined',
            roomCode: data.roomCode,
            room
          }));
        }
      }

      else if (data.type === 'roomMessage') {
        const room = state.rooms[data.roomCode];
        if (room) {
          const msg = {
            id: Math.random().toString(36).substring(2, 9),
            username: data.username,
            avatarUrl: data.avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky',
            text: data.text,
            timestamp: new Date().toISOString()
          };
          room.messages.push(msg);
          saveDb(state);

          // Broadcast to everyone in the room
          const out = JSON.stringify({ type: 'roomMessage', roomCode: data.roomCode, message: msg });
          wsClients.forEach((c) => {
            if (c.readyState === WebSocket.OPEN && c.roomCode === data.roomCode) {
              c.send(out);
            }
          });
        }
      }
    } catch (e) {
      console.error('WS parsing error:', e);
    }
  });

  ws.on('close', () => {
    wsClients.delete(ws);
    broadcastOnlineCount();
  });
});

// -------------------------------------------------------------
// 5. VITE SPA MIDDLEWARE
// -------------------------------------------------------------
const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'spa',
});
app.use(vite.middlewares);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Wisp server active at ws://localhost:${PORT}/wisp/`);
  console.log(`HTTP proxy unblocker active at http://localhost:${PORT}/proxy?url=...`);
});
