import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
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

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<any>(null);

  const connect = () => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('Connected to Horus Real-time Gateway');
      // If we were inside a room, rejoin on reconnect
      if (roomCode) {
        ws.send(JSON.stringify({ type: 'joinRoom', roomCode }));
      }
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'onlineCount') {
          setOnlineCount(data.count);
        } else if (data.type === 'initGlobalChat') {
          setGlobalMessages(data.messages);
        } else if (data.type === 'globalMessage') {
          setGlobalMessages((prev) => [...prev.slice(-49), data.message]);
        } else if (data.type === 'roomCreated') {
          setRoomCode(data.roomCode);
          setActiveRoom(data.room);
        } else if (data.type === 'roomJoined') {
          setRoomCode(data.roomCode);
          setActiveRoom(data.room);
        } else if (data.type === 'roomMessage') {
          if (data.roomCode === roomCode) {
            setActiveRoom((prev) => {
              if (!prev) return null;
              return {
                ...prev,
                messages: [...prev.messages, data.message]
              };
            });
          }
        } else if (data.type === 'error') {
          alert(data.message);
        }
      } catch (err) {
        console.error('WS parsing error:', err);
      }
    };

    ws.onclose = () => {
      console.log('Disconnected from Horus Gateway. Reconnecting...');
      reconnectTimeoutRef.current = setTimeout(connect, 3000);
    };

    ws.onerror = () => {
      ws.close();
    };

    wsRef.current = ws;
  };

  useEffect(() => {
    connect();
    return () => {
      if (wsRef.current) wsRef.current.close();
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
    };
  }, [roomCode]);

  const sendGlobalMessage = (text: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'globalMessage',
        username: user.username,
        avatarUrl: user.avatarUrl,
        text
      }));
    }
  };

  const createRoom = (roomName: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'createRoom',
        roomName
      }));
    }
  };

  const joinRoom = (code: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'joinRoom',
        roomCode: code
      }));
    }
  };

  const sendRoomMessage = (text: string) => {
    if (roomCode && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'roomMessage',
        roomCode,
        username: user.username,
        avatarUrl: user.avatarUrl,
        text
      }));
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
        leaveRoom
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) throw new Error('useWebSocket must be used within a WebSocketProvider');
  return context;
};
