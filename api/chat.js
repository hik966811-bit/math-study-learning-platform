import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, username, avatarUrl, text, roomCode, roomName } = req.body;

    if (type === 'getGlobalChat') {
      const result = await pool.query(
        'SELECT * FROM global_chat ORDER BY timestamp DESC LIMIT 50'
      );
      const messages = result.rows.map(row => ({
        id: row.id,
        username: row.username,
        avatarUrl: row.avatar_url,
        text: row.text,
        timestamp: row.timestamp
      }));
      return res.json({ success: true, messages: messages.reverse() });
    }

    if (type === 'globalMessage') {
      const msgId = Math.random().toString(36).substring(2, 9);
      const result = await pool.query(
        `INSERT INTO global_chat (id, username, avatar_url, text)
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [msgId, username, avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky', text]
      );

      const msg = {
        id: result.rows[0].id,
        username: result.rows[0].username,
        avatarUrl: result.rows[0].avatar_url,
        text: result.rows[0].text,
        timestamp: result.rows[0].timestamp
      };
      return res.json({ success: true, message: msg });
    }

    if (type === 'createRoom') {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      await pool.query(
        'INSERT INTO rooms (code, name) VALUES ($1, $2)',
        [code, roomName || `Комната ${code}`]
      );
      const room = { name: roomName || `Комната ${code}`, messages: [] };
      return res.json({ success: true, roomCode: code, room });
    }

    if (type === 'joinRoom') {
      const roomResult = await pool.query('SELECT * FROM rooms WHERE code = $1', [roomCode]);
      if (roomResult.rows.length === 0) {
        return res.status(404).json({ error: 'Комната не найдена!' });
      }

      const messagesResult = await pool.query(
        'SELECT * FROM room_messages WHERE room_code = $1 ORDER BY timestamp ASC',
        [roomCode]
      );

      const room = {
        name: roomResult.rows[0].name,
        messages: messagesResult.rows.map(row => ({
          id: row.id,
          username: row.username,
          avatarUrl: row.avatar_url,
          text: row.text,
          timestamp: row.timestamp
        }))
      };
      return res.json({ success: true, roomCode, room });
    }

    if (type === 'roomMessage') {
      const msgId = Math.random().toString(36).substring(2, 9);
      const result = await pool.query(
        `INSERT INTO room_messages (id, room_code, username, avatar_url, text)
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [msgId, roomCode, username, avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky', text]
      );

      const msg = {
        id: result.rows[0].id,
        username: result.rows[0].username,
        avatarUrl: result.rows[0].avatar_url,
        text: result.rows[0].text,
        timestamp: result.rows[0].timestamp
      };
      return res.json({ success: true, roomCode, message: msg });
    }

    return res.status(400).json({ error: 'Invalid request type' });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
