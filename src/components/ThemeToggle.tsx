import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark'}
    >
      <span className="theme-toggle-icon theme-toggle-icon-sun" aria-hidden="true">
        <Sun size={20} strokeWidth={2.2} />
      </span>
      <span className="theme-toggle-icon theme-toggle-icon-moon" aria-hidden="true">
        <Moon size={20} strokeWidth={2.2} />
      </span>
    </button>
  );
}
