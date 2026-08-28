import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  MessageSquare,
  Plus,
  Users,
  Copy,
  Check,
  Hash,
  ArrowLeft,
  Sparkles,
  Crown,
  Zap,
  Moon,
  Sun,
  Palette,
} from 'lucide-react';
import { useWebSocket } from '../../context/WebSocketContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { sound } from '../../utils/audio';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const {
    onlineCount,
    globalMessages,
    roomCode,
    activeRoom,
    sendGlobalMessage,
    createRoom,
    joinRoom,
    sendRoomMessage,
    leaveRoom,
  } = useWebSocket();
  const { user, isGuest } = useAuth();

  const [activeTab, setActiveTab] = useState<'global' | 'private'>('global');
  const [inputText, setInputText] = useState('');
  const [roomNameInput, setRoomNameInput] = useState('');
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [globalMessages, activeRoom?.messages]);

  useEffect(() => {
    setCharCount(inputText.length);
  }, [inputText]);

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-[#090a0f]',
          bgSecondary: 'bg-[#10121a]/50',
          border: 'border-white/10',
          text: 'text-white',
          textSecondary: 'text-slate-400',
          accent: 'from-indigo-600 to-purple-600',
          accentHover: 'from-indigo-700 to-purple-700',
          glow: 'shadow-indigo-500/20',
          cardBg: 'bg-white/[0.03]',
          inputBg: 'bg-black/30',
          inputBorder: 'border-white/10',
        };
      case 'light':
        return {
          bg: 'bg-[#f4f7fc]',
          bgSecondary: 'bg-white/50',
          border: 'border-slate-200',
          text: 'text-slate-900',
          textSecondary: 'text-slate-600',
          accent: 'from-blue-500 to-indigo-500',
          accentHover: 'from-blue-600 to-indigo-600',
          glow: 'shadow-blue-500/20',
          cardBg: 'bg-slate-100/50',
          inputBg: 'bg-white',
          inputBorder: 'border-slate-200',
        };
      default:
        return {
          bg: 'bg-[#0f1729]',
          bgSecondary: 'bg-slate-900/50',
          border: 'border-indigo-500/30',
          text: 'text-white',
          textSecondary: 'text-slate-400',
          accent: 'from-indigo-500 to-purple-600',
          accentHover: 'from-indigo-600 to-purple-700',
          glow: 'shadow-indigo-500/20',
          cardBg: 'bg-white/5',
          inputBg: 'bg-white/5',
          inputBorder: 'border-white/10',
        };
    }
  };

  const t = getThemeClasses();

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    sound.playClick();
    if (roomCode) {
      sendRoomMessage(inputText.trim());
    } else {
      sendGlobalMessage(inputText.trim());
    }
    setInputText('');
    setCharCount(0);
  };

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomNameInput.trim()) return;
    sound.playClick();
    setIsCreating(true);
    createRoom(roomNameInput.trim());
    setTimeout(() => setIsCreating(false), 1000);
    setRoomNameInput('');
  };

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinCodeInput.trim()) return;
    sound.playClick();
    joinRoom(joinCodeInput.trim());
    setJoinCodeInput('');
  };

  const handleCopyCode = () => {
    if (roomCode) {
      navigator.clipboard.writeText(roomCode);
      setCopied(true);
      sound.playCoin();
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeMessages = roomCode ? activeRoom?.messages || [] : globalMessages;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-2xl animate-fade-in transition-colors duration-300`}>
      <div 
        className={`relative w-full h-[90vh] max-w-5xl ${t.bg} border ${t.border} rounded-3xl shadow-2xl ${t.glow} ${t.text} flex flex-col overflow-hidden transition-all duration-300`}
        style={{
          background: theme === 'blue' 
            ? 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), linear-gradient(180deg, #0f1729 0%, #1e1b4b/30 50%, #0f1729 100%)'
            : theme === 'dark'
            ? 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), #090a0f'
            : 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), #f4f7fc'
        }}
      >
        <div className={`absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse transition-colors duration-300 ${theme === 'light' ? 'bg-blue-500/10' : theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-500/10'}`} />
        <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse transition-colors duration-300 ${theme === 'light' ? 'bg-indigo-500/10' : theme === 'dark' ? 'bg-purple-600/10' : 'bg-purple-500/10'}`} style={{ animationDelay: '1s' }} />

        <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 backdrop-blur-xl bg-white/5 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${t.accent} shadow-lg ${t.glow} transition-all duration-300`}>
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
            </div>
            <div>
              <h2 className={`text-2xl font-black tracking-tight bg-gradient-to-r ${theme === 'light' ? 'from-slate-900 via-blue-800 to-indigo-800' : 'from-white via-indigo-200 to-purple-200'} bg-clip-text text-transparent transition-colors duration-300`}>
                Chat Hub
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className={`text-sm ${t.textSecondary} transition-colors duration-300`}>
                  {onlineCount} {onlineCount === 1 ? 'user' : 'users'} online
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-xl ${t.cardBg} border ${t.border} transition-colors duration-300`} title={`Theme: ${theme}`}>
              {theme === 'light' ? <Sun className="w-4 h-4 text-amber-500" /> : theme === 'dark' ? <Moon className="w-4 h-4 text-indigo-400" /> : <Palette className="w-4 h-4 text-indigo-400" />}
            </div>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className={`p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 ${t.textSecondary} hover:text-white transition-all`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative z-10 flex-1 flex overflow-hidden transition-colors duration-300">
          {!roomCode && (
            <div className={`w-full sm:w-72 shrink-0 border-r ${t.border} ${t.bgSecondary} backdrop-blur-xl flex flex-col transition-colors duration-300`}>
              <div className="p-4 space-y-2">
                <button
                  onClick={() => { sound.playClick(); setActiveTab('global'); }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all ${
                    activeTab === 'global'
                      ? `bg-gradient-to-r ${t.accent} text-white shadow-lg ${t.glow}`
                      : `${t.cardBg} hover:bg-white/10 ${t.textSecondary} hover:text-white`
                  }`}
                >
                  <Hash className="w-5 h-5" />
                  Global Chat
                  <Sparkles className="w-4 h-4 ml-auto opacity-60" />
                </button>
                <button
                  onClick={() => { sound.playClick(); setActiveTab('private'); }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all ${
                    activeTab === 'private'
                      ? `bg-gradient-to-r ${t.accent} text-white shadow-lg ${t.glow}`
                      : `${t.cardBg} hover:bg-white/10 ${t.textSecondary} hover:text-white`
                  }`}
                >
                  <Crown className="w-5 h-5" />
                  Private Room
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 pb-4">
                {activeTab === 'private' ? (
                  <div className="space-y-4 animate-fade-in-up">
                    <div className={`p-4 rounded-2xl ${t.cardBg} border ${t.border} transition-colors duration-300`}>
                      <label className={`text-xs font-bold ${theme === 'light' ? 'text-blue-600' : 'text-indigo-400'} uppercase tracking-wider mb-2 block transition-colors duration-300`}>
                        Create New Room
                      </label>
                      <form onSubmit={handleCreateRoom} className="space-y-2">
                        <input
                          type="text"
                          value={roomNameInput}
                          onChange={(e) => setRoomNameInput(e.target.value)}
                          placeholder="Room name..."
                          className={`w-full px-4 py-2.5 ${t.inputBg} border ${t.inputBorder} rounded-xl text-sm ${t.text} placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors`}
                        />
                        <button
                          type="submit"
                          disabled={isCreating}
                          className={`w-full py-2.5 bg-gradient-to-r ${t.accent} hover:${t.accentHover} rounded-xl text-sm font-bold shadow-lg ${t.glow} transition-all flex items-center justify-center gap-2 disabled:opacity-50`}
                        >
                          <Plus className="w-4 h-4" />
                          {isCreating ? 'Creating...' : 'Create Room'}
                        </button>
                      </form>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-px bg-white/10" />
                      <span className="text-xs text-slate-500">or</span>
                      <div className="flex-1 h-px bg-white/10" />
                    </div>

                    <div className={`p-4 rounded-2xl ${t.cardBg} border ${t.border} transition-colors duration-300`}>
                      <label className={`text-xs font-bold ${theme === 'light' ? 'text-indigo-600' : 'text-purple-400'} uppercase tracking-wider mb-2 block transition-colors duration-300`}>
                        Join by Code
                      </label>
                      <form onSubmit={handleJoinRoom} className="space-y-2">
                        <input
                          type="text"
                          value={joinCodeInput}
                          onChange={(e) => setJoinCodeInput(e.target.value)}
                          placeholder="Enter 6-digit code..."
                          maxLength={6}
                          className={`w-full px-4 py-2.5 ${t.inputBg} border ${t.inputBorder} rounded-xl text-sm ${t.text} placeholder-slate-500 text-center font-mono tracking-widest focus:outline-none focus:border-purple-500 transition-colors`}
                        />
                        <button
                          type="submit"
                          className={`w-full py-2.5 bg-gradient-to-r ${theme === 'light' ? 'from-indigo-500 to-blue-600' : 'from-purple-500 to-pink-600'} hover:opacity-90 rounded-xl text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2`}
                        >
                          <Zap className="w-4 h-4" />
                          Join Room
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center mb-4 transition-colors duration-300`} style={{ opacity: 0.2 }}>
                      <Users className="w-10 h-10 text-current" />
                    </div>
                    <h3 className={`text-lg font-bold ${t.text} mb-2 transition-colors duration-300`}>Global Chat</h3>
                    <p className={`text-sm ${t.textSecondary} leading-relaxed transition-colors duration-300`}>
                      Chat with all users on the platform in real-time. No registration needed!
                    </p>
                    <div className={`mt-6 px-4 py-2 rounded-full bg-gradient-to-r ${t.accent} bg-opacity-20 border ${t.border} ${t.textSecondary} transition-colors duration-300`}>
                      <span className={`text-sm font-medium ${t.textSecondary} transition-colors duration-300`}>{onlineCount} online now</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex-1 flex flex-col bg-transparent overflow-hidden">
            {roomCode && (
              <div className={`px-6 py-4 ${t.bgSecondary} border-b ${t.border} flex items-center justify-between transition-colors duration-300`}>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => { sound.playClick(); leaveRoom(); }}
                    className={`p-2 rounded-xl ${t.cardBg} hover:bg-white/10 ${t.textSecondary} hover:${t.text} transition-all`}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2">
                    <Hash className={`w-5 h-5 ${theme === 'light' ? 'text-blue-500' : 'text-indigo-400'} transition-colors duration-300`} />
                    <span className={`font-bold ${t.text} transition-colors duration-300`}>{activeRoom?.name}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full bg-gradient-to-r ${theme === 'light' ? 'from-blue-500/20 to-indigo-500/20 border-blue-300' : 'from-purple-500/20 to-pink-500/20 border-purple-500/30'} text-xs font-medium transition-colors duration-300`} style={{ color: theme === 'light' ? '#4f46e5' : '#c084fc' }}>
                    Private
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`px-3 py-1.5 rounded-xl ${t.inputBg} border ${t.inputBorder}`}>
                    <span className={`text-sm font-mono ${theme === 'light' ? 'text-blue-600' : 'text-indigo-300'} transition-colors duration-300`}>Code: {roomCode}</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className={`p-2 rounded-xl ${t.cardBg} hover:bg-white/10 border ${t.border} hover:${t.border} ${t.textSecondary} hover:${t.text} transition-all`}
                  >
                    {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}

            {isGuest && (
              <div className={`px-6 py-3 bg-amber-500/10 border-b border-amber-500/20 flex items-center gap-2 transition-colors duration-300`}>
                <span className="text-sm text-amber-300">You are a guest. </span>
                <span className="text-sm text-amber-400/70">Register to save your chat history!</span>
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {activeMessages.length > 0 ? (
                activeMessages.map((msg, index) => {
                  const isMe = msg.username === user.username;
                  const showAvatar = index === 0 || activeMessages[index - 1]?.username !== msg.username;
                  
                  return (
                    <div
                      key={msg.id}
                      className={`flex items-end gap-3 ${isMe ? 'flex-row-reverse' : ''} animate-fade-in-up`}
                      style={{ animationDelay: `${Math.min(index * 20, 200)}ms` }}
                    >
                      {showAvatar ? (
                        <div className={`w-10 h-10 rounded-xl overflow-hidden ${t.cardBg} border ${t.border} shrink-0 transition-colors duration-300`}>
                          <img
                            src={msg.avatarUrl}
                            alt={msg.username}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 shrink-0" />
                      )}
                      
                      <div className={`max-w-[70%] ${isMe ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                        {showAvatar && (
                          <div className={`flex items-center gap-2 px-1 ${isMe ? 'flex-row-reverse' : ''}`}>
                            <span className={`text-xs font-bold ${isMe ? (theme === 'light' ? 'text-blue-600' : 'text-indigo-400') : (theme === 'light' ? 'text-indigo-600' : 'text-purple-400')} transition-colors duration-300`}>
                              {msg.username}
                              {isMe && ' (you)'}
                            </span>
                            <span className="text-[10px] text-slate-500">
                              {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        )}
                        <div
                          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed transition-all duration-200 hover:scale-[1.02] ${
                            isMe
                              ? `bg-gradient-to-r ${t.accent} text-white rounded-br-md shadow-lg ${t.glow}`
                              : `${t.cardBg} backdrop-blur-xl border ${t.border} ${t.text} rounded-bl-md`
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center mb-4 transition-colors duration-300`} style={{ opacity: 0.1 }}>
                    <MessageSquare className="w-12 h-12 text-current" />
                  </div>
                  <h3 className={`text-lg font-bold ${t.text} opacity-50 mb-2 transition-colors duration-300`}>No messages yet</h3>
                  <p className={`text-sm ${t.textSecondary} transition-colors duration-300`}>Be the first to say something!</p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className={`p-4 ${t.bgSecondary} border-t ${t.border} transition-colors duration-300`}>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={roomCode ? "Message in private room..." : "Message in global chat..."}
                  className={`flex-1 px-5 py-4 ${t.inputBg} border ${t.inputBorder} rounded-2xl text-sm ${t.text} placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:${t.inputBg} transition-all`}
                />
                <div className="flex items-center gap-2">
                  {charCount > 0 && (
                    <span className={`text-xs ${t.textSecondary} transition-all duration-200 ${charCount > 200 ? 'text-rose-400' : ''}`}>
                      {charCount}
                    </span>
                  )}
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className={`p-4 bg-gradient-to-r ${t.accent} hover:${t.accentHover} rounded-2xl shadow-lg ${t.glow} transition-all disabled:opacity-50 disabled:shadow-none active:scale-95`}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
