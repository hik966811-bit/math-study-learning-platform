import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL || '',
  token: process.env.KV_REST_API_TOKEN || '',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    const lowerName = username.trim().toLowerCase();
    const users = await redis.hgetall('users') || {};

    let foundUser = null;
    for (const [userId, userData] of Object.entries(users)) {
      const user = typeof userData === 'string' ? JSON.parse(userData) : userData;
      if (user.username && user.username.toLowerCase() === lowerName) {
        foundUser = user;
        break;
      }
    }

    if (!foundUser) {
      return res.status(404).json({ error: 'Пользователь не найден!' });
    }

    res.json({ success: true, user: foundUser });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
