import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://mathstudy:mathstudy123@cluster0.mongodb.net/mathstudydb?retryWrites=true&w=majority';

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, username, avatarUrl, text, roomCode, roomName } = req.body;

    const client = await connectToDatabase();
    const db = client.db('mathstudydb');

    if (type === 'getGlobalChat') {
      const messages = await db.collection('globalChat')
        .find({})
        .sort({ timestamp: -1 })
        .limit(50)
        .toArray();

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

      await db.collection('globalChat').insertOne(msg);
      return res.json({ success: true, message: msg });
    }

    if (type === 'createRoom') {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const room = {
        code,
        name: roomName || `Комната ${code}`,
        messages: []
      };

      await db.collection('rooms').insertOne(room);
      return res.json({ success: true, roomCode: code, room });
    }

    if (type === 'joinRoom') {
      const room = await db.collection('rooms').findOne({ code: roomCode });

      if (!room) {
        return res.status(404).json({ error: 'Комната не найдена!' });
      }

      return res.json({ success: true, roomCode, room });
    }

    if (type === 'roomMessage') {
      const msg = {
        id: Math.random().toString(36).substring(2, 9),
        username,
        avatarUrl: avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky',
        text,
        timestamp: new Date().toISOString()
      };

      await db.collection('rooms').updateOne(
        { code: roomCode },
        { $push: { messages: msg } }
      );

      return res.json({ success: true, roomCode, message: msg });
    }

    return res.status(400).json({ error: 'Invalid request type' });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
