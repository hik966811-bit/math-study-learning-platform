import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'blue' | 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleNextTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Primary default theme is 'blue' as requested by the user
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('nexus_theme') as ThemeType;
    if (saved === 'dark' || saved === 'light' || saved === 'blue') {
      return saved;
    }
    return 'blue';
  });

  useEffect(() => {
    localStorage.setItem('nexus_theme', theme);
    const body = document.body;
    body.classList.remove('theme-blue', 'theme-dark', 'theme-light');
    body.classList.add(`theme-${theme}`);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const toggleNextTheme = () => {
    if (theme === 'blue') setThemeState('dark');
    else if (theme === 'dark') setThemeState('light');
    else setThemeState('blue');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleNextTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
