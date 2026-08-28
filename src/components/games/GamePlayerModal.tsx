import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Maximize2,
  Minimize2,
  RotateCcw,
  Heart,
  HelpCircle,
  Trophy,
  Tv,
  ExternalLink,
  Expand,
} from 'lucide-react';
import { Game } from '../../types/game';
import { useGames } from '../../context/GamesContext';
import { sound } from '../../utils/audio';

interface GamePlayerModalProps {
  game: Game | null;
  onClose: () => void;
}

export const GamePlayerModal: React.FC<GamePlayerModalProps> = ({
  game,
  onClose,
}) => {
  const { favorites, toggleFavorite, highScores } = useGames();
  const [isTheater, setIsTheater] = useState(false);
  const [gameSessionKey, setGameSessionKey] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (game) {
      setGameSessionKey((k) => k + 1);
      setIsFullscreen(false);
    }
  }, [game]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!game) return null;

  const isFavorite = favorites.includes(game.id);
  const personalBest = highScores[game.id] || 0;
  const currentEmbedUrl = game.embedUrl;

  const handleToggleFullscreen = () => {
    sound.playClick();
    if (!document.fullscreenElement) {
      // Prioritize putting the iframe directly into fullscreen if available, otherwise the container
      const targetElement = iframeRef.current || playerContainerRef.current;
      if (targetElement) {
        targetElement.requestFullscreen().catch(() => {
          playerContainerRef.current?.requestFullscreen().catch(() => {});
        });
      }
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleOpenDirect = () => {
    if (currentEmbedUrl) {
      sound.playClick();
      window.open(currentEmbedUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto select-none">
      <div
        ref={playerContainerRef}
        className={`relative w-full ${
          isTheater ? 'max-w-7xl' : 'max-w-5xl'
        } bg-slate-900/95 border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl text-white flex flex-col transition-all duration-300`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl overflow-hidden border border-white/20 shrink-0 bg-slate-950">
              <img 
                src={game.thumbnail} 
                alt={game.title} 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                  (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#000000';
                }}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-white truncate">
                {game.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="capitalize text-blue-400">{game.category}</span>
                {personalBest > 0 && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-300">
                      <Trophy className="w-3 h-3" /> Best Score: {personalBest}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Fullscreen Button */}
            <button
              onClick={handleToggleFullscreen}
              title="Fullscreen Mode"
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-lg transition-all"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              <span className="hidden sm:inline">Fullscreen</span>
            </button>

            {/* Open in new tab */}
            {currentEmbedUrl && (
              <button
                onClick={handleOpenDirect}
                title="Open Direct Link"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hidden sm:flex"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            )}

            {/* Favorite */}
            <button
              onClick={() => toggleFavorite(game.id)}
              className={`p-2 rounded-xl border transition-all ${
                isFavorite
                  ? 'bg-rose-500/30 border-rose-500 text-rose-300'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Theater Mode Toggle */}
            <button
              onClick={() => setIsTheater(!isTheater)}
              title="Theater Mode"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hidden md:flex"
            >
              <Tv className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 hover:text-rose-300 border border-white/10 text-slate-300 transition-all ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Game Viewport Container */}
        <div className="w-full flex items-center justify-center min-h-[460px] sm:min-h-[560px] mb-3 relative group">
          {currentEmbedUrl ? (
            <div className="w-full h-full min-h-[460px] sm:min-h-[560px] flex items-center justify-center bg-black rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
              <iframe
                ref={iframeRef}
                key={`${gameSessionKey}-${currentEmbedUrl}`}
                src={currentEmbedUrl}
                title={game.title}
                className="w-full h-[460px] sm:h-[560px] border-0 bg-black"
                allow="autoplay; fullscreen; gamepad; pointer-lock; keyboard-map; clipboard-read; clipboard-write; xr-spatial-tracking; encrypted-media; camera; microphone"
              />

              {/* Quick Floating Fullscreen Icon in corner on hover */}
              <button
                onClick={handleToggleFullscreen}
                title="Expand to Fullscreen"
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-blue-600 text-white rounded-xl backdrop-blur-md border border-white/20 opacity-70 hover:opacity-100 transition-all z-20 shadow-lg"
              >
                <Expand className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="p-16 text-center text-slate-400">
              Loading game engine...
            </div>
          )}
        </div>

        {/* Bottom Controls Bar */}
        <div className="bg-white/[0.03] p-3.5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-blue-300 font-semibold shrink-0">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>Controls:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {game.controls.map((ctrl, idx) => (
              <span
                key={idx}
                className="bg-black/40 border border-white/10 px-2.5 py-1 rounded-lg text-slate-300 font-mono text-[11px]"
              >
                <strong className="text-white font-semibold">{ctrl.key}</strong>: {ctrl.action}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <button
              onClick={() => {
                sound.playClick();
                setGameSessionKey((k) => k + 1);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reload
            </button>

            <button
              onClick={handleToggleFullscreen}
              className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-semibold"
            >
              <Maximize2 className="w-3.5 h-3.5" /> Fullscreen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
