import fs from 'fs';
import path from 'path';

const DB_PATH = path.join('/tmp', 'db.json');

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

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
}
