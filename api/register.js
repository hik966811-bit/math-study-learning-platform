import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL || '',
  token: process.env.KV_REST_API_TOKEN || '',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, avatarUrl } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    const lowerName = username.trim().toLowerCase();

    // Check if username exists
    const existingUsers = await redis.hgetall('users') || {};
    const exists = Object.values(existingUsers).some((u) =>
      typeof u === 'object' && u.username && u.username.toLowerCase() === lowerName
    );

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

    await redis.hset('users', { [userId]: JSON.stringify(newUser) });
    res.json({ success: true, user: newUser });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
