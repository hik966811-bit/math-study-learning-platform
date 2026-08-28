import React from 'react';
import { X, Palette, Volume2, VolumeX, Trash2, Check } from 'lucide-react';
import { useTheme, ThemeType } from '../../context/ThemeContext';
import { sound } from '../../utils/audio';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme();
  const [isMuted, setIsMuted] = React.useState(sound.getMuted());

  if (!isOpen) return null;

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const handleResetData = () => {
    sound.playClick();
    if (confirm('Reset your local high scores, favorites, and notes?')) {
      localStorage.removeItem('horus_favorites');
      localStorage.removeItem('horus_highscores');
      localStorage.removeItem('horus_custom_games');
      localStorage.removeItem('horus_notes');
      window.location.reload();
    }
  };

  const themes: Array<{ id: ThemeType; title: string; desc: string; previewClass: string }> = [
    {
      id: 'blue',
      title: 'Blue (Default)',
      desc: 'Deep royal blue background with crisp white typography',
      previewClass: 'bg-[#0a192f] border-blue-400',
    },
    {
      id: 'dark',
      title: 'Dark OLED',
      desc: 'Minimalist deep obsidian dark background',
      previewClass: 'bg-[#090a0f] border-slate-700',
    },
    {
      id: 'light',
      title: 'Clean White',
      desc: 'High contrast modern light minimalist style',
      previewClass: 'bg-[#f4f7fc] border-slate-300',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-lg bg-slate-900/90 border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl text-white flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300">
              <Palette className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-white">Settings</h2>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 overflow-y-auto pr-1">
          {/* Theme Selection */}
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2.5">
              Color Theme
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {themes.map((t) => {
                const active = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      sound.playClick();
                      setTheme(t.id);
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                      active
                        ? 'border-blue-400 bg-blue-600/20 shadow-md'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-5 h-5 rounded-full border ${t.previewClass}`} />
                      {active && <Check className="w-4 h-4 text-blue-400" />}
                    </div>
                    <div className="text-xs font-bold text-white mb-0.5">{t.title}</div>
                    <div className="text-[10px] text-slate-400 line-clamp-2">{t.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sound Toggle */}
          <div className="p-3.5 bg-white/[0.04] border border-white/10 rounded-2xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-white">Sound Effects (SFX)</div>
              <div className="text-[11px] text-slate-400">Interface audio feedback and game sound effects</div>
            </div>
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-xl border transition-all ${
                !isMuted
                  ? 'bg-blue-600/30 border-blue-500/40 text-blue-300'
                  : 'bg-white/5 border-white/10 text-slate-500'
              }`}
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          {/* Reset Data */}
          <div className="p-3.5 bg-white/[0.04] border border-white/10 rounded-2xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-white">Clear Local Storage</div>
              <div className="text-[11px] text-slate-400">Reset your local high scores, notes, and favorites</div>
            </div>
            <button
              onClick={handleResetData}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-xs font-semibold rounded-xl transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
