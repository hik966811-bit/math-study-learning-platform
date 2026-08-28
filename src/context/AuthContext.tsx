import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { UserProfile } from '../types/user';
import { storage, getXpForNextLevel, createDefaultUser } from '../utils/storage';
import { sound } from '../utils/audio';
import { ACHIEVEMENTS_LIST } from '../data/avatars';

interface AuthContextType {
  user: UserProfile;
  isAuthenticated: boolean;
  isGuest: boolean;
  register: (username: string, avatarUrl: string) => Promise<boolean>;
  login: (username: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updated: Partial<UserProfile>) => void;
  addXp: (amount: number, reason?: string) => void;
  toggleFavorite: (gameId: string) => void;
  recordScore: (gameId: string, score: number) => boolean; // returns true if new personal best
  unlockAchievement: (achievementId: string) => void;
  addCustomGame: (game: { title: string; description: string; embedUrl: string; category: string }) => void;
  exportData: () => void;
  importData: (jsonStr: string) => boolean;
  toastMessage: { text: string; type?: 'info' | 'success' | 'xp' | 'achievement' } | null;
  clearToast: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(() => {
    const activeId = storage.getActiveUserId();
    if (activeId) {
      const users = storage.getUsers();
      if (users[activeId]) {
        return users[activeId];
      }
    }
    // Fallback to guest user
    return storage.getGuestUser();
  });

  const [toastMessage, setToastMessage] = useState<{ text: string; type?: 'info' | 'success' | 'xp' | 'achievement' } | null>(null);

  const showToast = useCallback((text: string, type: 'info' | 'success' | 'xp' | 'achievement' = 'info') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage((current) => (current?.text === text ? null : current));
    }, 4000);
  }, []);

  const clearToast = () => setToastMessage(null);

  // Sync user changes to storage and server
  const saveUserToStorage = useCallback((updatedUser: UserProfile) => {
    setUser(updatedUser);
    if (updatedUser.id.startsWith('guest_')) {
      storage.saveGuestUser(updatedUser);
    } else {
      storage.saveUser(updatedUser);
      storage.setActiveUserId(updatedUser.id);
      
      // Background server update
      fetch('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: updatedUser.id, profileData: updatedUser }),
      }).catch(() => {});
    }
  }, []);

  const isGuest = user.id.startsWith('guest_');
  const isAuthenticated = !isGuest;

  // Add XP and handle Level Ups
  const addXp = useCallback((amount: number, reason?: string) => {
    setUser((prev) => {
      let newXp = prev.xp + amount;
      let newLevel = prev.level;
      let reqXp = prev.xpToNextLevel || getXpForNextLevel(newLevel);
      let leveledUp = false;

      while (newXp >= reqXp) {
        newXp -= reqXp;
        newLevel += 1;
        reqXp = getXpForNextLevel(newLevel);
        leveledUp = true;
      }

      const updated: UserProfile = {
        ...prev,
        xp: newXp,
        level: newLevel,
        xpToNextLevel: reqXp,
      };

      if (leveledUp) {
        sound.playLevelUp();
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#00d2ff', '#0070f3', '#ff007f', '#ffd700']
          });
        } catch {}
        showToast(`🎉 УРОВЕНЬ ПОВЫШЕН! Вы достигли ${newLevel} уровня!`, 'achievement');
      } else if (reason) {
        showToast(`+${amount} XP: ${reason}`, 'xp');
      }

      if (updated.id.startsWith('guest_')) {
        storage.saveGuestUser(updated);
      } else {
        storage.saveUser(updated);
      }

      return updated;
    });
  }, [showToast]);

  const unlockAchievement = useCallback((achievementId: string) => {
    if (user.achievements.includes(achievementId)) return;
    
    const ach = ACHIEVEMENTS_LIST.find((a) => a.id === achievementId);
    if (!ach) return;

    setUser((prev) => {
      const updated: UserProfile = {
        ...prev,
        achievements: [...prev.achievements, achievementId],
      };
      if (updated.id.startsWith('guest_')) {
        storage.saveGuestUser(updated);
      } else {
        storage.saveUser(updated);
      }
      return updated;
    });

    sound.playLevelUp();
    showToast(`🏆 Достижение разблокировано: "${ach.title}"! (+${ach.xpReward} XP)`, 'achievement');
    addXp(ach.xpReward);
  }, [user.achievements, addXp, showToast]);

  const register = async (username: string, avatarUrl: string): Promise<boolean> => {
    const trimmed = username.trim();
    if (!trimmed) return false;

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: trimmed, avatarUrl }),
      });

      if (!res.ok) {
        const err = await res.json();
        showToast(err.error || 'Ошибка регистрации', 'info');
        return false;
      }

      const data = await res.json();
      const newUser: UserProfile = {
        ...data.user,
        favorites: [...user.favorites],
        achievements: [...user.achievements],
        highScores: { ...user.highScores },
        customGames: [...user.customGames],
        level: user.level,
        xp: user.xp,
        xpToNextLevel: user.xpToNextLevel,
      };

      // Sync local copy to server database
      await fetch('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: newUser.id, profileData: newUser }),
      });

      saveUserToStorage(newUser);
      sound.playCoin();
      showToast(`Добро пожаловать в Nexus Arcade, ${trimmed}!`, 'success');
      return true;
    } catch {
      showToast('Ошибка подключения к серверу регистрации.', 'info');
      return false;
    }
  };

  const login = async (username: string): Promise<boolean> => {
    const trimmed = username.trim();
    if (!trimmed) return false;

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: trimmed }),
      });

      if (!res.ok) {
        showToast('Аккаунт с таким ником не найден на сервере.', 'info');
        return false;
      }

      const data = await res.json();
      saveUserToStorage(data.user);
      sound.playCoin();
      showToast(`С возвращением, ${data.user.username}!`, 'success');
      return true;
    } catch {
      showToast('Ошибка подключения к серверу авторизации.', 'info');
      return false;
    }
  };

  const logout = () => {
    storage.setActiveUserId(null);
    const guest = storage.getGuestUser();
    setUser(guest);
    sound.playClick();
    showToast('Вы вышли из профиля (включен гостевой режим).', 'info');
  };

  const updateProfile = async (updated: Partial<UserProfile>) => {
    const newUser = { ...user, ...updated };
    saveUserToStorage(newUser);

    if (!newUser.id.startsWith('guest_')) {
      try {
        await fetch('/api/update-profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: newUser.id, profileData: updated }),
        });
      } catch {}
    }
    sound.playClick();
    showToast('Профиль успешно обновлен!', 'success');
  };

  const toggleFavorite = (gameId: string) => {
    const isFav = user.favorites.includes(gameId);
    const newFavs = isFav
      ? user.favorites.filter((id) => id !== gameId)
      : [...user.favorites, gameId];

    const updated = { ...user, favorites: newFavs };
    saveUserToStorage(updated);
    
    if (!user.id.startsWith('guest_')) {
      fetch('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, profileData: { favorites: newFavs } }),
      }).catch(() => {});
    }

    sound.playClick();
    showToast(isFav ? 'Удалено из избранного' : '⭐ Добавлено в избранное!', 'info');
  };

  const recordScore = (gameId: string, score: number): boolean => {
    storage.recordHighScore(gameId, user, score);
    const currentHigh = user.highScores[gameId] || 0;
    const isNewBest = score > currentHigh;

    if (isNewBest) {
      const updated = {
        ...user,
        highScores: {
          ...user.highScores,
          [gameId]: score,
        },
        totalGamesPlayed: user.totalGamesPlayed + 1,
      };
      saveUserToStorage(updated);
      addXp(Math.max(25, Math.floor(score / 10)), 'Новый рекорд!');
    } else {
      const updated = {
        ...user,
        totalGamesPlayed: user.totalGamesPlayed + 1,
      };
      saveUserToStorage(updated);
      addXp(15, 'Завершение игры');
    }

    return isNewBest;
  };

  const addCustomGame = (customGame: { title: string; description: string; embedUrl: string; category: string }) => {
    const newEntry = {
      id: 'custom_' + Date.now().toString(36),
      title: customGame.title,
      description: customGame.description,
      embedUrl: customGame.embedUrl,
      category: customGame.category,
      addedAt: new Date().toISOString(),
    };

    const updated = {
      ...user,
      customGames: [newEntry, ...user.customGames],
    };
    saveUserToStorage(updated);
    unlockAchievement('custom_game_add');
    showToast(`Игра "${customGame.title}" успешно добавлена в вашу библиотеку!`, 'success');
  };

  const exportData = () => {
    storage.exportUserData(user);
    showToast('Сохранения профиля скачаны в JSON файл!', 'success');
  };

  const importData = (jsonStr: string): boolean => {
    const imported = storage.importUserData(jsonStr);
    if (imported) {
      setUser(imported);
      sound.playLevelUp();
      showToast(`Профиль "${imported.username}" успешно восстановлен!`, 'success');
      return true;
    }
    showToast('Ошибка при чтении файла сохранений.', 'info');
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isGuest,
        register,
        login,
        logout,
        updateProfile,
        addXp,
        toggleFavorite,
        recordScore,
        unlockAchievement,
        addCustomGame,
        exportData,
        importData,
        toastMessage,
        clearToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
