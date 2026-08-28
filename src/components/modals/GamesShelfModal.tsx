import React, { useState, useMemo } from 'react';
import { X, Search, Heart, Play, Gamepad2, Zap, Crosshair, Brain, Tv, FolderPlus, Flame } from 'lucide-react';
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
    { id: 'all', label: 'All', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'favorites', label: 'Favorites', icon: <Heart className="w-4 h-4" /> },
    { id: 'runner', label: 'Runners', icon: <Zap className="w-4 h-4" /> },
    { id: 'action', label: 'Action', icon: <Crosshair className="w-4 h-4" /> },
    { id: 'arcade', label: 'Arcade', icon: <Flame className="w-4 h-4" /> },
    { id: 'puzzle', label: 'Puzzles', icon: <Brain className="w-4 h-4" /> },
    { id: 'retro', label: 'Retro', icon: <Tv className="w-4 h-4" /> },
    { id: 'custom', label: 'Custom', icon: <FolderPlus className="w-4 h-4" /> },
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
        return g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q);
      }
      return true;
    });
  }, [allGames, selectedCat, favorites, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black animate-fade-in">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-black/90 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 animate-gradient">
              games
            </h1>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 flex items-center justify-center transition-all hover:scale-110 hover:rotate-90 duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-zinc-400 text-sm mb-6">
            <span className="text-orange-400 font-bold">{filteredGames.length}</span> games
          </p>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search games..."
              className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedCat(cat.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  selectedCat === cat.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredGames.map((game, idx) => (
            <div
              key={game.id}
              onClick={() => {
                sound.playClick();
                onSelectGame(game);
              }}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 animate-scale-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={game.thumbnailUrl}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                    onSelectGame(game);
                  }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </button>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm text-white truncate group-hover:text-orange-400 transition-colors">
                  {game.title}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                    toggleFavorite(game.id);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    className={`w-4 h-4 transition-all duration-300 ${
                      favorites.includes(game.id) ? 'text-rose-500 fill-rose-500' : 'text-white'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
