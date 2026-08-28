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

const saveDb = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
}
