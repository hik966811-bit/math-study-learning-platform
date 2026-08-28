import React, { useState, useEffect } from 'react';
import { X, Search, ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Game {
  id: number;
  cover: string;
}

interface GamesPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GAMES_PER_PAGE = 20;

export const GamesPortalModal: React.FC<GamesPortalModalProps> = ({ isOpen, onClose }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      const gameList: Game[] = [];
      for (let i = 1; i <= 80; i++) {
        gameList.push({ id: i, cover: `/gamesss/cover(${i}).webp` });
      }
      setGames(gameList);
    }
  }, [isOpen]);

  const filteredGames = games;
  const totalPages = Math.ceil(filteredGames.length / GAMES_PER_PAGE);
  const startIndex = (currentPage - 1) * GAMES_PER_PAGE;
  const visibleGames = filteredGames.slice(startIndex, startIndex + GAMES_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      sound.playClick();
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      sound.playClick();
      setCurrentPage(currentPage + 1);
    }
  };

  const handleGameClick = (gameId: number) => {
    sound.playClick();
    setSelectedGame(gameId);
    window.location.href = `/gamesss.html?game=${gameId}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-fade-in">
      <div className="relative w-full h-[90vh] max-w-6xl bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 border border-indigo-500/30 rounded-3xl shadow-2xl shadow-indigo-500/20 text-white flex flex-col overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 backdrop-blur-xl bg-white/5">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/50">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Games Collection
              </h2>
              <p className="text-sm text-slate-400 mt-0.5">{games.length} games available</p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="relative z-10 px-6 py-4 border-b border-white/10">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games..."
              className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Games Grid */}
        <div className="relative z-10 flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {visibleGames.map((game) => (
              <button
                key={game.id}
                onClick={() => handleGameClick(game.id)}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800 border border-white/10 hover:border-indigo-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <img
                  src={game.cover}
                  alt={`Game ${game.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23111" width="100" height="100"/><text x="50" y="55" text-anchor="middle" fill="%23333" font-size="40">?</text></svg>';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-xs font-bold text-white text-center">Game {game.id}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/80 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-l-white border-y-4 border-y-transparent ml-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="relative z-10 flex items-center justify-center gap-4 px-6 py-4 border-t border-white/10">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-slate-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
