export interface UserAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  xpReward: number;
}

export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  avatarUrl: string;
  bannerTheme: string;
  title: string; // e.g. 'Кибер-Хакер', 'Легенда Аркад', 'Мастер Школы'
  level: number;
  xp: number;
  xpToNextLevel: number;
  totalTimePlayedSeconds: number;
  totalGamesPlayed: number;
  favorites: string[]; // game IDs
  achievements: string[]; // achievement IDs
  highScores: Record<string, number>; // gameId -> score
  customGames: Array<{
    id: string;
    title: string;
    description: string;
    embedUrl: string;
    category: string;
    addedAt: string;
  }>;
  createdAt: string;
}

export interface AuthState {
  currentUser: UserProfile | null;
  isAuthenticated: boolean;
  isGuest: boolean;
}
