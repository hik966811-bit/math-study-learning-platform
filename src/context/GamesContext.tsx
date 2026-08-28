import React, { createContext, useContext, useState, useEffect } from 'react';
import { Game } from '../types/game';
import { INITIAL_GAMES } from '../data/gamesConfig';
import { sound } from '../utils/audio';

interface CustomGameEntry {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  category: string;
  addedAt: string;
}

interface GamesContextType {
  favorites: string[];
  toggleFavorite: (gameId: string) => void;
  highScores: Record<string, number>;
  recordScore: (gameId: string, score: number) => boolean;
  customGames: CustomGameEntry[];
  addCustomGame: (game: { title: string; description: string; embedUrl: string; category: string }) => void;
  allGames: Game[];
  toast: string | null;
  showToast: (msg: string) => void;
}

const GamesContext = createContext<GamesContextType | undefined>(undefined);

export const GamesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('horus_favorites');
      return saved ? JSON.parse(saved) : ['cyber-runner', 'space-invaders'];
    } catch {
      return ['cyber-runner', 'space-invaders'];
    }
  });

  const [highScores, setHighScores] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('horus_highscores');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [customGames, setCustomGames] = useState<CustomGameEntry[]>(() => {
    try {
      const saved = localStorage.getItem('horus_custom_games');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast((curr) => (curr === msg ? null : curr));
    }, 3000);
  };

  useEffect(() => {
    localStorage.setItem('horus_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('horus_highscores', JSON.stringify(highScores));
  }, [highScores]);

  useEffect(() => {
    localStorage.setItem('horus_custom_games', JSON.stringify(customGames));
  }, [customGames]);

  const toggleFavorite = (gameId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(gameId);
      const updated = exists ? prev.filter((id) => id !== gameId) : [...prev, gameId];
      sound.playClick();
      showToast(exists ? 'Removed from favorites' : 'Added to favorites');
      return updated;
    });
  };

  const recordScore = (gameId: string, score: number): boolean => {
    const currentBest = highScores[gameId] || 0;
    if (score > currentBest) {
      setHighScores((prev) => ({ ...prev, [gameId]: score }));
      sound.playLevelUp();
      showToast(`New Best Score: ${score}!`);
      return true;
    }
    return false;
  };

  const addCustomGame = (data: { title: string; description: string; embedUrl: string; category: string }) => {
    const entry: CustomGameEntry = {
      id: 'custom_' + Date.now().toString(36),
      title: data.title,
      description: data.description || 'Custom web game.',
      embedUrl: data.embedUrl,
      category: data.category,
      addedAt: new Date().toISOString(),
    };
    setCustomGames((prev) => [entry, ...prev]);
    sound.playCoin();
    showToast(`Game "${data.title}" added to library`);
  };

  const allGames: Game[] = React.useMemo(() => {
    const customFormatted: Game[] = customGames.map((cg) => ({
      id: cg.id,
      title: cg.title,
      description: cg.description,
      category: (cg.category as any) || 'custom',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
      type: 'custom',
      embedUrl: cg.embedUrl,
      rating: 5.0,
      playsCount: 1,
      badge: 'NEW',
      controls: [{ key: 'Keyboard / Mouse', action: 'Standard Game Controls' }],
      tags: ['Custom'],
    }));

    return [...INITIAL_GAMES, ...customFormatted];
  }, [customGames]);

  return (
    <GamesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        highScores,
        recordScore,
        customGames,
        addCustomGame,
        allGames,
        toast,
        showToast,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error('useGames must be used within a GamesProvider');
  }
  return context;
};
