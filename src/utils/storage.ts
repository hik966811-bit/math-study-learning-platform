import { UserProfile } from '../types/user';
import { AVATAR_PRESETS } from '../data/avatars';

const STORAGE_KEYS = {
  USERS_DB: 'nexus_users_db_v1',
  ACTIVE_USER_ID: 'nexus_active_user_id',
  GUEST_USER: 'nexus_guest_user_data',
  GLOBAL_HIGH_SCORES: 'nexus_global_highscores_v1',
};

// Calculate XP required for a given level: Level 1 = 100 XP, Level 2 = 250 XP, etc.
export const getXpForNextLevel = (level: number): number => {
  return Math.floor(100 * Math.pow(1.35, level - 1));
};

export const createDefaultUser = (username: string = 'Гость', isGuest: boolean = true): UserProfile => {
  const randomAvatar = AVATAR_PRESETS[Math.floor(Math.random() * AVATAR_PRESETS.length)].url;
  return {
    id: isGuest ? 'guest_' + Math.random().toString(36).substring(2, 9) : 'user_' + Date.now().toString(36),
    username,
    avatarUrl: randomAvatar,
    bannerTheme: 'cyber-blue',
    title: isGuest ? 'Школьный Гость' : 'Новичок Портала',
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    totalTimePlayedSeconds: 0,
    totalGamesPlayed: 0,
    favorites: ['cyber-runner', 'neon-snake'],
    achievements: ['first_game'],
    highScores: {},
    customGames: [],
    createdAt: new Date().toISOString(),
  };
};

export const storage = {
  // Get all registered users from localStorage
  getUsers(): Record<string, UserProfile> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USERS_DB);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  saveUser(user: UserProfile) {
    const users = this.getUsers();
    users[user.id] = user;
    localStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(users));
  },

  getActiveUserId(): string | null {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_USER_ID);
  },

  setActiveUserId(id: string | null) {
    if (id) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_USER_ID, id);
    } else {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_USER_ID);
    }
  },

  getGuestUser(): UserProfile {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GUEST_USER);
      if (data) {
        return JSON.parse(data);
      }
    } catch {}
    const newGuest = createDefaultUser('Школьный Игрок', true);
    this.saveGuestUser(newGuest);
    return newGuest;
  },

  saveGuestUser(guest: UserProfile) {
    localStorage.setItem(STORAGE_KEYS.GUEST_USER, JSON.stringify(guest));
  },

  // Export user data to a downloadable JSON file
  exportUserData(user: UserProfile) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(user, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Nexus_Save_${user.username}_Lv${user.level}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  // Import user data from JSON string
  importUserData(jsonString: string): UserProfile | null {
    try {
      const parsed = JSON.parse(jsonString) as UserProfile;
      if (parsed && parsed.username && parsed.level !== undefined) {
        this.saveUser(parsed);
        this.setActiveUserId(parsed.id);
        return parsed;
      }
    } catch (err) {
      console.error("Failed to import user JSON", err);
    }
    return null;
  },

  // High scores across the current browser instance
  getGlobalLeaderboards(): Record<string, Array<{ user: string; avatar: string; score: number; date: string }>> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GLOBAL_HIGH_SCORES);
      if (data) return JSON.parse(data);
    } catch {}
    
    // Default initial mock scores
    return {
      'cyber-runner': [
        { user: 'CyberMaster', avatar: AVATAR_PRESETS[0].url, score: 2480, date: 'Сегодня' },
        { user: 'NeonNinja', avatar: AVATAR_PRESETS[1].url, score: 1890, date: 'Вчера' },
        { user: 'SchoolPro', avatar: AVATAR_PRESETS[2].url, score: 1450, date: '2 дн. назад' }
      ],
      'space-invaders': [
        { user: 'CosmoAce', avatar: AVATAR_PRESETS[5].url, score: 6200, date: 'Сегодня' },
        { user: 'StarLord', avatar: AVATAR_PRESETS[8].url, score: 4800, date: 'Вчера' }
      ],
      'neon-snake': [
        { user: 'SnakeKing', avatar: AVATAR_PRESETS[3].url, score: 420, date: 'Сегодня' },
        { user: 'ViperX', avatar: AVATAR_PRESETS[4].url, score: 310, date: 'Вчера' }
      ],
      'cyber-2048': [
        { user: 'LogicPro', avatar: AVATAR_PRESETS[7].url, score: 16384, date: 'Сегодня' },
        { user: 'BrainPower', avatar: AVATAR_PRESETS[9].url, score: 8192, date: '3 дн. назад' }
      ],
      'flappy-drone': [
        { user: 'SkyWalker', avatar: AVATAR_PRESETS[0].url, score: 74, date: 'Сегодня' },
        { user: 'AeroBot', avatar: AVATAR_PRESETS[6].url, score: 58, date: 'Вчера' }
      ],
      'tower-stack': [
        { user: 'StackGod', avatar: AVATAR_PRESETS[2].url, score: 38, date: 'Сегодня' },
        { user: 'Precision99', avatar: AVATAR_PRESETS[1].url, score: 29, date: 'Вчера' }
      ]
    };
  },

  recordHighScore(gameId: string, user: UserProfile, score: number) {
    const leaderboards = this.getGlobalLeaderboards();
    if (!leaderboards[gameId]) {
      leaderboards[gameId] = [];
    }
    
    // Add new score
    leaderboards[gameId].push({
      user: user.username,
      avatar: user.avatarUrl,
      score,
      date: 'Сегодня'
    });

    // Sort descending and keep top 10
    leaderboards[gameId].sort((a, b) => b.score - a.score);
    leaderboards[gameId] = leaderboards[gameId].slice(0, 10);

    localStorage.setItem(STORAGE_KEYS.GLOBAL_HIGH_SCORES, JSON.stringify(leaderboards));
  }
};
