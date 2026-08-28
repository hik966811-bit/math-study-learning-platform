import React, { useState, useRef } from 'react';
import {
  X,
  Award,
  Zap,
  Download,
  Upload,
  LogOut,
  Sparkles,
  Gamepad2,
  Trophy,
  UserCheck,
  CheckCircle,
  Clock,
  Flame,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { AVATAR_PRESETS, PROFILE_TITLES, ACHIEVEMENTS_LIST } from '../../data/avatars';
import { INITIAL_GAMES } from '../../data/gamesConfig';
import { sound } from '../../utils/audio';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuth: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, onOpenAuth }) => {
  const { user, isGuest, updateProfile, logout, exportData, importData } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements' | 'scores' | 'settings'>('overview');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const xpProgress = Math.min(100, Math.floor((user.xp / (user.xpToNextLevel || 100)) * 100));

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        importData(content);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900/95 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 text-white max-h-[90vh] flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* User Hero Banner */}
        <div className="relative bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-purple-900/60 p-6 rounded-2xl border border-cyan-500/20 mb-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="relative">
            <img
              src={user.avatarUrl}
              alt={user.username}
              className="w-20 h-20 rounded-2xl border-2 border-cyan-400 bg-slate-950 p-1 shadow-neon-blue"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 text-[11px] font-black px-2 py-0.5 rounded-full border border-black shadow">
              LVL {user.level}
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h2 className="text-2xl font-bold font-gaming text-white">{user.username}</h2>
              {isGuest && (
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Гостевой
                </span>
              )}
            </div>
            <p className="text-xs text-cyan-400 font-medium mb-3 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {user.title || 'Школьный Игрок'}
            </p>

            {/* XP Bar */}
            <div className="w-full bg-slate-950/80 rounded-full h-3 p-0.5 border border-cyan-500/30 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500 shadow-neon-blue"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
              <span>{user.xp} XP</span>
              <span className="text-cyan-300">{xpProgress}% до {user.level + 1} уровня</span>
              <span>{user.xpToNextLevel} XP</span>
            </div>
          </div>

          {isGuest && (
            <button
              onClick={() => {
                sound.playClick();
                onClose();
                onOpenAuth();
              }}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold rounded-xl shadow-neon-blue transition-all shrink-0"
            >
              Зарегистрироваться
            </button>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 border-b border-slate-800 pb-3 mb-4 overflow-x-auto">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('overview');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-4 h-4" /> Обзор
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('achievements');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'achievements'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Trophy className="w-4 h-4" /> Достижения ({user.achievements.length}/{ACHIEVEMENTS_LIST.length})
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('scores');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'scores'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-4 h-4" /> Рекорды
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('settings');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'settings'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Download className="w-4 h-4" /> Сохранения & Настройки
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto pr-1">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Сыграно матчей</span>
                  <span className="text-xl font-bold font-gaming text-cyan-400">{user.totalGamesPlayed}</span>
                </div>
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Избранных игр</span>
                  <span className="text-xl font-bold font-gaming text-purple-400">{user.favorites.length}</span>
                </div>
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-xs text-slate-400 block mb-1">Достижений</span>
                  <span className="text-xl font-bold font-gaming text-amber-400">{user.achievements.length}</span>
                </div>
              </div>

              {/* Avatar Switcher */}
              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Сменить Аватар
                </h3>
                <div className="grid grid-cols-5 gap-2.5">
                  {AVATAR_PRESETS.map((av) => (
                    <button
                      key={av.id}
                      onClick={() => updateProfile({ avatarUrl: av.url })}
                      className={`p-1 rounded-xl border transition-all ${
                        user.avatarUrl === av.url
                          ? 'border-cyan-400 bg-cyan-500/20 scale-105 shadow-neon-blue'
                          : 'border-slate-800 hover:border-slate-700 bg-slate-900/50'
                      }`}
                    >
                      <img src={av.url} alt={av.name} className="w-full aspect-square rounded-lg" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title / Rank Selector */}
              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Выбрать Звание / Ранг
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PROFILE_TITLES.map((title) => (
                    <button
                      key={title}
                      onClick={() => updateProfile({ title })}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        user.title === title
                          ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300 font-bold shadow-neon-blue'
                          : 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ACHIEVEMENTS_LIST.map((ach) => {
                const isUnlocked = user.achievements.includes(ach.id);
                return (
                  <div
                    key={ach.id}
                    className={`p-3.5 rounded-2xl border flex items-center gap-3.5 transition-all ${
                      isUnlocked
                        ? 'bg-slate-950 border-amber-500/40 shadow-sm'
                        : 'bg-slate-950/40 border-slate-800 opacity-50 grayscale'
                    }`}
                  >
                    <div className="text-3xl shrink-0">{ach.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-white truncate">{ach.title}</h4>
                        {isUnlocked && <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                      </div>
                      <p className="text-xs text-slate-400 leading-tight mt-0.5">{ach.description}</p>
                      <span className="text-[10px] font-mono text-cyan-400 mt-1 inline-block">
                        +{ach.xpReward} XP
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'scores' && (
            <div className="space-y-3">
              {INITIAL_GAMES.map((game) => {
                const score = user.highScores[game.id] || 0;
                return (
                  <div
                    key={game.id}
                    className="flex items-center justify-between p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={game.thumbnail}
                        alt={game.title}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white">{game.title}</h4>
                        <span className="text-xs text-slate-400 capitalize">{game.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Ваш рекорд</span>
                      <span className="text-lg font-bold font-gaming text-cyan-400">
                        {score > 0 ? score : '—'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-4">
              {/* Export / Import Save Data */}
              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Перенос Сохранений (Школа ⇄ Дом)
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Вы можете скачать файл сохранений со своим уровнем, очками и достижениями и загрузить его на любом другом школьном компьютере или дома!
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      sound.playClick();
                      exportData();
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-cyan-500/40 text-cyan-300 text-xs font-bold rounded-xl transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4" /> Скачать Сохранения (.JSON)
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      fileInputRef.current?.click();
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-purple-500/40 text-purple-300 text-xs font-bold rounded-xl transition-all shadow-sm"
                  >
                    <Upload className="w-4 h-4" /> Загрузить Файл Сохранений
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Account Management */}
              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Выход из Профиля</h4>
                  <p className="text-xs text-slate-400">Переключиться на другой аккаунт или гостевой режим</p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-400 text-xs font-bold rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Выйти
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
