import React, { useState, useEffect } from 'react';
import { Play, Flame, Star, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { Game } from '../../types/game';
import { sound } from '../../utils/audio';

interface HeroBannerProps {
  games: Game[];
  onPlay: (game: Game) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ games, onPlay }) => {
  const featuredGames = games.filter((g) => g.featured || g.badge === 'HOT' || g.badge === 'POPULAR').slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (featuredGames.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredGames.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredGames.length]);

  if (featuredGames.length === 0) return null;

  const current = featuredGames[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    setCurrentIndex((prev) => (prev === 0 ? featuredGames.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    setCurrentIndex((prev) => (prev + 1) % featuredGames.length);
  };

  return (
    <div
      onClick={() => onPlay(current)}
      className="group relative w-full rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 p-6 sm:p-10 mb-8 cursor-pointer shadow-2xl transition-all duration-300 hover:border-cyan-400"
      style={{
        background: `radial-gradient(circle at 80% 30%, rgba(0, 210, 255, 0.18), transparent 60%), radial-gradient(circle at 10% 80%, rgba(157, 0, 255, 0.15), transparent 50%), var(--bg-card)`
      }}
    >
      {/* Background Ambience Image */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-2/3 opacity-30 sm:opacity-40 pointer-events-none overflow-hidden mix-blend-screen">
        <img
          src={current.thumbnail}
          alt={current.title}
          className="w-full h-full object-cover filter blur-sm transform scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-card)] via-[var(--bg-card)]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-xl">
        {/* Top Badges */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-black tracking-wider uppercase shadow-md flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-current" />
            ВЫБОР ШКОЛЫ
          </span>
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold uppercase">
            {current.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold font-gaming text-white tracking-wide mb-3 group-hover:text-cyan-300 transition-colors drop-shadow-md">
          {current.title}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed line-clamp-2 sm:line-clamp-3">
          {current.description}
        </p>

        {/* Action Button and Stats */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlay(current);
            }}
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-extrabold text-sm sm:text-base rounded-2xl shadow-neon-blue transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" />
            ИГРАТЬ СЕЙЧАС
          </button>

          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-white">{current.rating}</span>
            </div>
            <div className="w-px h-4 bg-slate-700" />
            <div className="text-slate-300">
              <span className="font-bold text-cyan-400">{current.playsCount}</span> запусков
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      {featuredGames.length > 1 && (
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl bg-black/50 hover:bg-cyan-500 hover:text-black border border-white/10 text-white backdrop-blur-md transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5 px-2">
            {featuredGames.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-600'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl bg-black/50 hover:bg-cyan-500 hover:text-black border border-white/10 text-white backdrop-blur-md transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
