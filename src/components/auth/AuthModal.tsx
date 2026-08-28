import React, { useState } from 'react';
import { X, UserPlus, LogIn, Sparkles, UserCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { AVATAR_PRESETS } from '../../data/avatars';
import { sound } from '../../utils/audio';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'register' }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [username, setUsername] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_PRESETS[0].url);
  const { register, login } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    if (mode === 'register') {
      const ok = await register(username, selectedAvatar);
      if (ok) onClose();
    } else {
      const ok = await login(username);
      if (ok) onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-slate-900/95 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 text-white">
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
            {mode === 'register' ? <UserPlus className="w-6 h-6" /> : <LogIn className="w-6 h-6" />}
          </div>
          <h2 className="text-2xl font-bold font-gaming text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            {mode === 'register' ? 'СОЗДАНИЕ АККАУНТА' : 'ВХОД В ПРОФИЛЬ'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {mode === 'register'
              ? 'Сохраняйте свои рекорды, качайте уровень и получайте награды!'
              : 'Введите ваш никнейм для загрузки сохранений'}
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex bg-slate-950 p-1 rounded-2xl border border-slate-800 mb-6">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setMode('register');
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
              mode === 'register' ? 'bg-cyan-500 text-black shadow-neon-blue font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Регистрация
          </button>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setMode('login');
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
              mode === 'login' ? 'bg-cyan-500 text-black shadow-neon-blue font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Вход
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Avatar Selector for Registration */}
          {mode === 'register' && (
            <div>
              <label className="text-xs font-semibold text-cyan-300 block mb-2">Выберите Аватар</label>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={selectedAvatar}
                  alt="Selected Avatar"
                  className="w-14 h-14 rounded-2xl border-2 border-cyan-400 bg-slate-950 p-1 shadow-neon-blue"
                />
                <div className="text-xs text-slate-400">
                  <span className="text-white font-medium block">Ваш игровой стиль</span>
                  Выберите героя из списка ниже:
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 max-h-36 overflow-y-auto p-2 bg-slate-950 rounded-2xl border border-slate-800">
                {AVATAR_PRESETS.map((avatar) => (
                  <button
                    key={avatar.id}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setSelectedAvatar(avatar.url);
                    }}
                    className={`p-1 rounded-xl transition-all border ${
                      selectedAvatar === avatar.url
                        ? 'border-cyan-400 bg-cyan-500/20 scale-105 shadow-neon-blue'
                        : 'border-transparent hover:border-slate-700 bg-slate-900/50'
                    }`}
                  >
                    <img src={avatar.url} alt={avatar.name} className="w-full aspect-square rounded-lg" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Nickname Input */}
          <div>
            <label className="text-xs font-semibold text-cyan-300 block mb-2">Игровой Никнейм</label>
            <input
              type="text"
              required
              maxLength={20}
              placeholder="Например: CyberDemon, ProPlayer..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded-2xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-medium"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-extrabold rounded-2xl shadow-neon-blue transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            {mode === 'register' ? 'Создать Профиль' : 'Войти в Профиль'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="text-xs text-slate-400 hover:text-cyan-300 transition-colors"
          >
            Продолжить в гостевом режиме
          </button>
        </div>
      </div>
    </div>
  );
};
