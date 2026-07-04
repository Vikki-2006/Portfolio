import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isReady: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Detect stored preference or system preference before loading
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  const [isReady, setIsReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle setting attributes and flags on mounting/updating
  useEffect(() => {
    // Apply theme attribute
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.backgroundColor = theme === 'dark' ? '#09090B' : '';
    
    // Set initial icon classes so the rotation state matches on page load
    if (theme === 'dark') {
      document.documentElement.classList.add('icon-theme-dark');
      document.documentElement.classList.remove('icon-theme-light');
    } else {
      document.documentElement.classList.add('icon-theme-light');
      document.documentElement.classList.remove('icon-theme-dark');
    }

    // Add theme-ready class after initial mount to prevent transition animation on first load
    const timer = setTimeout(() => {
      setIsReady(true);
      document.documentElement.classList.add('theme-ready');
    }, 100);

    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // 1. Immediately rotate the toggle icon and add transition classes
    document.documentElement.classList.add('theme-transitioning');
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('icon-theme-dark');
      document.documentElement.classList.remove('icon-theme-light');
    } else {
      document.documentElement.classList.add('icon-theme-light');
      document.documentElement.classList.remove('icon-theme-dark');
    }

    // 2. Set the theme state instantly
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);

    // 3. Clear transition classes after 450ms morph completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
      setIsTransitioning(false);
    }, 450);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isReady }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
