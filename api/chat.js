import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL || '',
  token: process.env.KV_REST_API_TOKEN || '',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, username, avatarUrl, text, roomCode, roomName } = req.body;

    if (type === 'getGlobalChat') {
      const messages = await redis.lrange('globalChat', 0, 49) || [];
      return res.json({ success: true, messages: messages.reverse() });
    }

    if (type === 'globalMessage') {
      const msg = {
        id: Math.random().toString(36).substring(2, 9),
        username,
        avatarUrl: avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky',
        text,
        timestamp: new Date().toISOString()
      };
      await redis.lpush('globalChat', JSON.stringify(msg));
      await redis.ltrim('globalChat', 0, 99); // Keep last 100 messages
      return res.json({ success: true, message: msg });
    }

    if (type === 'createRoom') {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const room = {
        name: roomName || `Комната ${code}`,
        messages: []
      };
      await redis.hset('rooms', { [code]: JSON.stringify(room) });
      return res.json({ success: true, roomCode: code, room });
    }

    if (type === 'joinRoom') {
      const roomData = await redis.hget('rooms', roomCode);
      if (!roomData) {
        return res.status(404).json({ error: 'Комната не найдена!' });
      }
      const room = typeof roomData === 'string' ? JSON.parse(roomData) : roomData;
      return res.json({ success: true, roomCode, room });
    }

    if (type === 'roomMessage') {
      const roomData = await redis.hget('rooms', roomCode);
      if (!roomData) {
        return res.status(404).json({ error: 'Комната не найдена!' });
      }

      const room = typeof roomData === 'string' ? JSON.parse(roomData) : roomData;
      const msg = {
        id: Math.random().toString(36).substring(2, 9),
        username,
        avatarUrl: avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky',
        text,
        timestamp: new Date().toISOString()
      };

      room.messages.push(msg);
      await redis.hset('rooms', { [roomCode]: JSON.stringify(room) });
      return res.json({ success: true, roomCode, message: msg });
    }

    return res.status(400).json({ error: 'Invalid request type' });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
