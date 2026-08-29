import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { UserProfile } from '../types/user';
import { sound } from '../utils/audio';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  register: (username: string, avatarUrl: string) => Promise<boolean>;
  login: (username: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updated: Partial<UserProfile>) => void;
  toastMessage: { text: string; type?: 'info' | 'success' | 'xp' | 'achievement' } | null;
  clearToast: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<{ text: string; type?: 'info' | 'success' | 'xp' | 'achievement' } | null>(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const savedUserId = localStorage.getItem('userId');
    const savedUsername = localStorage.getItem('username');

    if (savedUserId && savedUsername) {
      // Try to restore session from server (non-blocking)
      fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: savedUsername }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setUser(data.user);
          }
        })
        .catch(() => {})
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const showToast = (text: string, type: 'info' | 'success' | 'xp' | 'achievement' = 'info') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const clearToast = () => setToastMessage(null);

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
      setUser(data.user);

      // Save to localStorage for session persistence
      localStorage.setItem('userId', data.user.id);
      localStorage.setItem('username', data.user.username);

      sound.playCoin();
      showToast(`Добро пожаловать, ${trimmed}!`, 'success');
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
      setUser(data.user);

      // Save to localStorage
      localStorage.setItem('userId', data.user.id);
      localStorage.setItem('username', data.user.username);

      sound.playCoin();
      showToast(`С возвращением, ${data.user.username}!`, 'success');
      return true;
    } catch {
      showToast('Ошибка подключения к серверу авторизации.', 'info');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    setUser(null);
    sound.playClick();
    showToast('Вы вышли из профиля.', 'info');
  };

  const updateProfile = async (updated: Partial<UserProfile>) => {
    if (!user) return;

    const newUser = { ...user, ...updated };
    setUser(newUser);

    try {
      await fetch('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, profileData: updated }),
      });
      sound.playClick();
      showToast('Профиль успешно обновлен!', 'success');
    } catch {
      showToast('Ошибка обновления профиля', 'info');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        register,
        login,
        logout,
        updateProfile,
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
