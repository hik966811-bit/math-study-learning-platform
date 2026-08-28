import React from 'react';
import {
  Gamepad2,
  Zap,
  Crosshair,
  Flame,
  Brain,
  Tv,
  FolderPlus,
  Heart,
  Shuffle,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import { GameCategory } from '../../types/game';
import { sound } from '../../utils/audio';

interface GameFilterProps {
  selectedCategory: GameCategory | 'favorites';
  onSelectCategory: (cat: GameCategory | 'favorites') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: 'popular' | 'rating' | 'newest' | 'az';
  onSortChange: (sort: 'popular' | 'rating' | 'newest' | 'az') => void;
  onRandomGame: () => void;
}

export const GameFilter: React.FC<GameFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onRandomGame,
}) => {
  const categories: Array<{ id: GameCategory | 'favorites'; label: string; icon: React.ReactNode }> = [
    { id: 'all', label: 'Все игры', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'favorites', label: 'Избранное', icon: <Heart className="w-4 h-4 text-rose-400" /> },
    { id: 'runner', label: 'Раннеры', icon: <Zap className="w-4 h-4 text-cyan-400" /> },
    { id: 'action', label: 'Экшен', icon: <Crosshair className="w-4 h-4 text-red-400" /> },
    { id: 'arcade', label: 'Аркады', icon: <Flame className="w-4 h-4 text-amber-400" /> },
    { id: 'puzzle', label: 'Головоломки', icon: <Brain className="w-4 h-4 text-purple-400" /> },
    { id: 'retro', label: 'Ретро', icon: <Tv className="w-4 h-4 text-emerald-400" /> },
    { id: 'custom', label: 'Свои игры', icon: <FolderPlus className="w-4 h-4 text-blue-400" /> },
  ];

  return (
    <div className="space-y-4 mb-8">
      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                sound.playClick();
                onSelectCategory(cat.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-neon-blue font-extrabold scale-105'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/80'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Search and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Поиск игры по названию или тегам..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-800 focus:border-cyan-400 rounded-2xl text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all font-medium"
          />
        </div>

        {/* Sort & Random actions */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-2xl text-xs text-slate-300">
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
            <select
              value={sortBy}
              onChange={(e) => {
                sound.playClick();
                onSortChange(e.target.value as 'popular' | 'rating' | 'newest' | 'az');
              }}
              className="bg-transparent text-xs text-white font-medium focus:outline-none cursor-pointer"
            >
              <option value="popular" className="bg-slate-900 text-white">По популярности</option>
              <option value="rating" className="bg-slate-900 text-white">По рейтингу</option>
              <option value="newest" className="bg-slate-900 text-white">Сначала новинки</option>
              <option value="az" className="bg-slate-900 text-white">По алфавиту (А-Я)</option>
            </select>
          </div>

          <button
            onClick={() => {
              sound.playCoin();
              onRandomGame();
            }}
            title="Запустить случайную игру"
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-gradient-to-r from-purple-600/30 to-pink-600/30 hover:from-purple-600/50 hover:to-pink-600/50 border border-purple-500/40 text-purple-300 rounded-2xl text-xs font-bold transition-all"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Рандом</span>
          </button>
        </div>
      </div>
    </div>
  );
};
