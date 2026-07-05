import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isReady: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isReady, setIsReady] = useState(false);
  const isTransitioning = useRef(false);
  const mountedRef = useRef(false);

  // ── Initial mount: apply data-theme + icon class, then enable transitions ──
  useEffect(() => {
    if (mountedRef.current) return; // only run once on mount
    mountedRef.current = true;

    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.add(theme === 'dark' ? 'icon-theme-dark' : 'icon-theme-light');
    root.classList.remove(theme === 'dark' ? 'icon-theme-light' : 'icon-theme-dark');

    // Small delay so the initial paint is committed before transitions are enabled
    const t = setTimeout(() => {
      root.classList.add('theme-ready');
      setIsReady(true);
    }, 80);

    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — runs once

  const toggleTheme = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;

    // 1. Immediately swap the toggle icon
    root.classList.add(nextTheme === 'dark' ? 'icon-theme-dark' : 'icon-theme-light');
    root.classList.remove(nextTheme === 'dark' ? 'icon-theme-light' : 'icon-theme-dark');

    // 2. Signal CSS that a theme switch is in progress
    //    (used to temporarily disable backdrop-filter)
    root.classList.add('theme-transitioning');

    // 3. Swap the data-theme attribute — CSS variables update instantly,
    //    elements that have transitions will animate smoothly to the new values
    root.setAttribute('data-theme', nextTheme);

    // 4. Persist and sync React state
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);

    // 5. Clean up after the transition (220 ms — matches CSS duration)
    setTimeout(() => {
      root.classList.remove('theme-transitioning');
      isTransitioning.current = false;
    }, 240);
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
