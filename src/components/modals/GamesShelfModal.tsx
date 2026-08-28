import React, { useState, useMemo } from 'react';
import {
  X,
  Search,
  Plus,
  Heart,
  Play,
  Star,
  Gamepad2,
  Zap,
  Crosshair,
  Brain,
  Tv,
  FolderPlus,
  Flame,
} from 'lucide-react';
import { Game, GameCategory } from '../../types/game';
import { useGames } from '../../context/GamesContext';
import { sound } from '../../utils/audio';

interface GamesShelfModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGame: (game: Game) => void;
  onOpenAddGame: () => void;
}

export const GamesShelfModal: React.FC<GamesShelfModalProps> = ({
  isOpen,
  onClose,
  onSelectGame,
  onOpenAddGame,
}) => {
  const { allGames, favorites, toggleFavorite } = useGames();
  const [selectedCat, setSelectedCat] = useState<GameCategory | 'favorites'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Array<{ id: GameCategory | 'favorites'; label: string; icon: React.ReactNode }> = [
    { id: 'all', label: 'All Games', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'favorites', label: 'Favorites', icon: <Heart className="w-4 h-4 text-rose-400" /> },
    { id: 'runner', label: 'Runners', icon: <Zap className="w-4 h-4 text-blue-400" /> },
    { id: 'action', label: 'Action', icon: <Crosshair className="w-4 h-4 text-red-400" /> },
    { id: 'arcade', label: 'Arcade', icon: <Flame className="w-4 h-4 text-amber-400" /> },
    { id: 'puzzle', label: 'Puzzles', icon: <Brain className="w-4 h-4 text-purple-400" /> },
    { id: 'retro', label: 'Retro', icon: <Tv className="w-4 h-4 text-emerald-400" /> },
    { id: 'custom', label: 'Custom', icon: <FolderPlus className="w-4 h-4 text-cyan-400" /> },
  ];

  const filteredGames = useMemo(() => {
    return allGames.filter((g) => {
      if (selectedCat === 'favorites') {
        if (!favorites.includes(g.id)) return false;
      } else if (selectedCat !== 'all') {
        if (g.category !== selectedCat) return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [allGames, selectedCat, favorites, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-5xl bg-slate-900/90 border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl text-white max-h-[88vh] flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide">Games Library</h2>
              <span className="text-xs text-slate-400">Select any unblocked game to play instantly</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                onOpenAddGame();
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold rounded-xl transition-all"
            >
              <Plus className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">Add Game</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
            {categories.map((c) => {
              const active = selectedCat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedCat(c.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {c.icon}
                  <span>{c.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white/5 border border-white/10 focus:border-blue-400 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Games Grid */}
        <div className="flex-1 overflow-y-auto pr-1">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {filteredGames.map((game) => {
                const isFav = favorites.includes(game.id);
                return (
                  <div
                    key={game.id}
                    onClick={() => {
                      sound.playClick();
                      onSelectGame(game);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-blue-400/60 rounded-2xl p-3 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-950 mb-3">
                        <img
                          src={game.thumbnail}
                          alt={game.title}
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.opacity = '0';
                            (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#000000';
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Favorite button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(game.id);
                          }}
                          className={`absolute top-2 right-2 p-1.5 rounded-lg backdrop-blur-md transition-colors ${
                            isFav ? 'bg-rose-500 text-white' : 'bg-black/40 text-slate-300 hover:text-white'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
                        </button>

                        {/* Rating */}
                        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] text-amber-300 font-bold">
                          <Star className="w-3 h-3 fill-current" />
                          <span>{game.rating.toFixed(1)}</span>
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                        {game.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {game.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10 text-[11px] text-slate-400">
                      <span className="capitalize">{game.category}</span>
                      <span className="text-blue-400 font-medium group-hover:underline flex items-center gap-1">
                        <Play className="w-3 h-3 fill-current" /> Play
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center text-slate-400 text-sm">
              No games found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
