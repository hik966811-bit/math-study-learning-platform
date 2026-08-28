import React from 'react';
import { Gamepad2, Shield, Keyboard, Zap, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-cyan-500/20 bg-slate-950/60 backdrop-blur-md py-10 px-4 sm:px-8 mt-16 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
            <Gamepad2 className="w-5 h-5 fill-current" />
          </div>
          <div>
            <div className="text-sm font-bold font-gaming text-white">NEXUS ARCADE</div>
            <span className="text-[11px] text-slate-500">
              Лучшие игры без блокировок прямо в твоем браузере
            </span>
          </div>
        </div>

        {/* Hotkeys helper badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-slate-300">
            <Keyboard className="w-3.5 h-3.5 text-cyan-400" />
            <span>Горячие клавиши:</span>
          </div>
          <span className="bg-slate-900 border border-slate-700 px-2 py-1 rounded text-slate-300 font-mono">
            <strong className="text-emerald-400">ESC</strong> = Маскировка
          </span>
          <span className="bg-slate-900 border border-slate-700 px-2 py-1 rounded text-slate-300 font-mono">
            <strong className="text-cyan-400">ПРОБЕЛ</strong> = Действие
          </span>
          <span className="bg-slate-900 border border-slate-700 px-2 py-1 rounded text-slate-300 font-mono">
            <strong className="text-purple-400">WASD / Стрелки</strong> = Движение
          </span>
        </div>

        {/* Built with love */}
        <div className="flex items-center gap-2 text-slate-400">
          <span>Разработано для школьных перемен</span>
          <span className="text-rose-500">❤️</span>
        </div>
      </div>
    </footer>
  );
};
