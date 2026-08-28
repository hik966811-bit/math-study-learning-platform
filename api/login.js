import fs from 'fs';
import path from 'path';

const DB_PATH = path.join('/tmp', 'db.json');

const loadDb = () => {
  if (!fs.existsSync(DB_PATH)) {
    return { users: {}, globalChat: [], rooms: {} };
  }
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  } catch (e) {
    return { users: {}, globalChat: [], rooms: {} };
  }
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  const currentDb = loadDb();
  const lowerName = username.trim().toLowerCase();

  const foundUser = Object.values(currentDb.users).find((u) => u.username.toLowerCase() === lowerName);
  if (!foundUser) {
    return res.status(404).json({ error: 'Пользователь не найден!' });
  }

  res.json({ success: true, user: foundUser });
}
