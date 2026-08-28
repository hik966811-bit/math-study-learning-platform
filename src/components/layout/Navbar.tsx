import React from 'react';
import {
  Gamepad2,
  Moon,
  Sun,
  Palette,
  Volume2,
  VolumeX,
  Shield,
  Plus,
  User,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useTheme, ThemeType } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { sound } from '../../utils/audio';

interface NavbarProps {
  onOpenProfile: () => void;
  onOpenAuth: () => void;
  onOpenAddGame: () => void;
  onTriggerStealth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProfile,
  onOpenAuth,
  onOpenAddGame,
  onTriggerStealth,
}) => {
  const { theme, setTheme } = useTheme();
  const { user, isGuest } = useAuth();
  const [isMuted, setIsMuted] = React.useState(sound.getMuted());

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const themesList: Array<{ id: ThemeType; label: string; icon: string; bgClass: string }> = [
    { id: 'blue', label: 'Синяя (Основная)', icon: '🔵', bgClass: 'bg-cyan-500' },
    { id: 'dark', label: 'Чёрная OLED', icon: '⚫', bgClass: 'bg-slate-900' },
    { id: 'light', label: 'Белая Чистая', icon: '⚪', bgClass: 'bg-white' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-nav px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 transition-all">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-neon-blue group-hover:scale-105 transition-transform flex items-center justify-center">
          <Gamepad2 className="w-6 h-6 text-slate-950 fill-current" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-black font-gaming tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 group-hover:from-cyan-300 group-hover:to-blue-300 transition-all">
              NEXUS
            </span>
            <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              ARCADE
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium hidden sm:block">
            Школьный Игровой Портал
          </span>
        </div>
      </div>

      {/* Center / Right Control Panel */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* 3 Themes Switcher Bar */}
        <div className="flex items-center bg-slate-950/80 p-1 rounded-2xl border border-cyan-500/30">
          {themesList.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                sound.playClick();
                setTheme(t.id);
              }}
              title={`Тема: ${t.label}`}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                theme === t.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-neon-blue scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>{t.icon}</span>
              <span className="hidden md:inline font-mono uppercase text-[10px]">{t.id}</span>
            </button>
          ))}
        </div>

        {/* SFX Mute Toggle */}
        <button
          onClick={handleToggleSound}
          title={isMuted ? 'Включить звуковые эффекты' : 'Выключить звук'}
          className={`p-2.5 rounded-2xl border transition-all ${
            !isMuted
              ? 'bg-slate-900/80 border-cyan-500/40 text-cyan-300 shadow-sm'
              : 'bg-slate-900/50 border-slate-800 text-slate-500'
          }`}
        >
          {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* School Stealth Panic Button */}
        <button
          onClick={() => {
            sound.playClick();
            onTriggerStealth();
          }}
          title="Школьная маскировка (Stealth Mode / Быстро спрятать игры на уроке)"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 border border-emerald-500/50 text-emerald-300 rounded-2xl text-xs font-extrabold shadow-sm transition-all"
        >
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">Маскировка (ESC)</span>
        </button>

        {/* Add Game Button */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenAddGame();
          }}
          title="Добавить свою игру"
          className="p-2.5 sm:px-3.5 sm:py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/40 text-cyan-300 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Добавить Игру</span>
        </button>

        {/* Account Profile Badge Button */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenProfile();
          }}
          className="flex items-center gap-2 p-1 sm:pr-3 bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 rounded-2xl transition-all group"
        >
          <div className="relative">
            <img
              src={user.avatarUrl}
              alt={user.username}
              className="w-8 h-8 rounded-xl object-cover border border-cyan-400 bg-slate-900"
            />
            <div className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-black shadow">
              {user.level}
            </div>
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
              {user.username}
            </div>
            <div className="text-[10px] text-cyan-400 font-mono font-medium leading-none flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 text-cyan-400" /> {user.xp} XP
            </div>
          </div>
        </button>
      </div>
    </header>
  );
};
