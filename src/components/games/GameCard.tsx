import React from 'react';
import { Play, Star, Heart, Flame, Zap, Sparkles } from 'lucide-react';
import { Game } from '../../types/game';
import { useAuth } from '../../context/AuthContext';
import { sound } from '../../utils/audio';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  const { user, toggleFavorite } = useAuth();
  const isFavorite = user.favorites.includes(game.id);

  const getBadgeStyle = () => {
    switch (game.badge) {
      case 'HOT':
        return 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-rose-500/50';
      case 'NEW':
        return 'bg-gradient-to-r from-emerald-400 to-cyan-500 text-black shadow-emerald-500/50';
      case 'POPULAR':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/50';
      case 'RETRO':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-amber-500/50';
      default:
        return 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40';
    }
  };

  return (
    <div
      onMouseEnter={() => sound.playHover()}
      className="group relative rounded-3xl glass-panel overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col cursor-pointer border border-cyan-500/20 hover:border-cyan-400"
      onClick={() => onPlay(game)}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Badge Pill */}
        {game.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase shadow-md ${getBadgeStyle()}`}
            >
              {game.badge}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(game.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-2xl backdrop-blur-md transition-all ${
            isFavorite
              ? 'bg-rose-500/80 text-white shadow-lg shadow-rose-500/40'
              : 'bg-black/50 text-slate-300 hover:text-white hover:bg-black/80'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Play Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-neon-blue font-bold">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
              {game.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{game.rating.toFixed(1)}</span>
            </div>
          </div>

          <h3 className="text-base font-bold font-gaming text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
            {game.title}
          </h3>

          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {game.description}
          </p>
        </div>

        {/* Tags and Plays */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
          <div className="flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span>{game.playsCount} игр</span>
          </div>
          <span className="text-cyan-400 font-medium group-hover:underline">Играть сейчас →</span>
        </div>
      </div>
    </div>
  );
};
