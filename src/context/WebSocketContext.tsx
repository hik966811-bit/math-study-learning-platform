import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface Message {
  id: string;
  username: string;
  avatarUrl: string;
  text: string;
  timestamp: string;
}

interface Room {
  name: string;
  messages: Message[];
}

interface WebSocketContextType {
  onlineCount: number;
  globalMessages: Message[];
  roomCode: string | null;
  activeRoom: Room | null;
  sendGlobalMessage: (text: string) => void;
  createRoom: (roomName: string) => void;
  joinRoom: (code: string) => void;
  sendRoomMessage: (text: string) => void;
  leaveRoom: () => void;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [onlineCount, setOnlineCount] = useState(1);
  const [globalMessages, setGlobalMessages] = useState<Message[]>([]);
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [activeRoom, setActiveRoom] = useState<Room | null>(null);

  // Load global chat on mount
  useEffect(() => {
    loadGlobalChat();
    const interval = setInterval(loadGlobalChat, 3000); // Refresh every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const loadGlobalChat = async () => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'getGlobalChat' }),
      });
      const data = await res.json();
      if (data.success) {
        setGlobalMessages(data.messages);
      }
    } catch (error) {
      console.error('Failed to load chat:', error);
    }
  };

  const sendGlobalMessage = async (text: string) => {
    if (!user || !text.trim()) return;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'globalMessage',
          username: user.username,
          avatarUrl: user.avatarUrl,
          text: text.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setGlobalMessages((prev) => [...prev, data.message]);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const createRoom = async (roomName: string) => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'createRoom', roomName }),
      });
      const data = await res.json();
      if (data.success) {
        setRoomCode(data.roomCode);
        setActiveRoom(data.room);
      }
    } catch (error) {
      console.error('Failed to create room:', error);
    }
  };

  const joinRoom = async (code: string) => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'joinRoom', roomCode: code }),
      });
      const data = await res.json();
      if (data.success) {
        setRoomCode(data.roomCode);
        setActiveRoom(data.room);
      } else {
        alert(data.error || 'Room not found');
      }
    } catch (error) {
      console.error('Failed to join room:', error);
    }
  };

  const sendRoomMessage = async (text: string) => {
    if (!user || !text.trim() || !roomCode) return;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'roomMessage',
          roomCode,
          username: user.username,
          avatarUrl: user.avatarUrl,
          text: text.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setActiveRoom((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            messages: [...prev.messages, data.message],
          };
        });
      }
    } catch (error) {
      console.error('Failed to send room message:', error);
    }
  };

  const leaveRoom = () => {
    setRoomCode(null);
    setActiveRoom(null);
  };

  return (
    <WebSocketContext.Provider
      value={{
        onlineCount,
        globalMessages,
        roomCode,
        activeRoom,
        sendGlobalMessage,
        createRoom,
        joinRoom,
        sendRoomMessage,
        leaveRoom,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within WebSocketProvider');
  }
  return context;
};
