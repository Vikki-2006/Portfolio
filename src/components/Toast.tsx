import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export type ToastType = 'success' | 'error';

export interface ToastData {
  type: ToastType;
  title: string;
  description?: string;
}

interface ToastProps {
  toast: ToastData | null;
  onClose: () => void;
}

export default function Toast({ toast, onClose }: ToastProps) {
  const { theme } = useTheme();
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!toast) return;

    setProgress(100);
    const duration = 4000; // 4 seconds auto dismiss
    const step = 20; // run every 20ms
    const decrement = (step / duration) * 100;

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (isPaused) return prev;
        const next = prev - decrement;
        if (next <= 0) {
          window.clearInterval(interval);
          onClose();
          return 0;
        }
        return next;
      });
    }, step);

    return () => window.clearInterval(interval);
  }, [toast, isPaused, onClose]);

  if (!toast) return null;

  const isDark = theme === 'dark';
  const isSuccess = toast.type === 'success';

  // Theme-specific color parameters to ensure identical dimensions and no layout shift
  const themeParams = {
    innerBg: isDark ? 'rgba(18, 18, 22, 0.72)' : 'rgba(255, 255, 255, 0.72)',
    shadow: isDark 
      ? '0 10px 30px rgba(0, 0, 0, 0.28)' 
      : '0 10px 30px rgba(15, 23, 42, 0.05), 0 1px 3px rgba(15, 23, 42, 0.02)',
    titleColor: isDark ? '#FFFFFF' : '#111827',
    descColor: isDark ? '#A1A1AA' : '#52525B',
  };

  return (
    <AnimatePresence>
      <motion.div
        key="toast-wrapper"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, filter: 'blur(4px)', scale: 0.96 }}
        whileHover={{ y: -2 }}
        transition={{ 
          duration: 0.35, 
          type: 'spring', 
          stiffness: 220, 
          damping: 20, 
          mass: 0.9 
        }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] select-none pointer-events-auto cursor-default"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 1px Gradient Border Wrapper */}
        <div
          style={{
            padding: '1px',
            borderRadius: '22px',
            background: 'linear-gradient(135deg, var(--purple), var(--pink))',
            width: '400px',
            maxWidth: '92vw',
            height: '86px',
            boxShadow: themeParams.shadow,
            transition: 'box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Frosted Glass Body */}
          <div
            style={{
              borderRadius: '21px',
              backgroundColor: themeParams.innerBg,
              transition: 'background-color 280ms ease',
            }}
            className="relative flex items-center gap-4 p-[14px_18px] h-full overflow-hidden backdrop-blur-[20px] WebkitBackdropFilter:blur(20px)"
          >
            {/* Ambient Purple Light Blob (Dark Mode Only) */}
            {isDark && (
              <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-violet-600/15 blur-2xl pointer-events-none" />
            )}

            {/* Left Animated Success Badge */}
            <div className="relative shrink-0 flex items-center justify-center w-11 h-11">
              {/* Rotating Accent Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                className="absolute w-11 h-11 border border-dashed border-emerald-500/40 rounded-full pointer-events-none"
              />

              {/* Expanding Ripple Circle */}
              <motion.div
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute w-9 h-9 rounded-full bg-emerald-500/30 pointer-events-none"
              />

              {/* Glass Badge Circle */}
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [0.8, 1.15, 1], opacity: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.38, type: 'spring', stiffness: 200, damping: 15 }}
                  className="relative z-10 w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(16,185,129,0.3)]"
                >
                  <Check className="w-5 h-5 text-white stroke-[3.5px]" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [0.8, 1.15, 1], opacity: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.38, type: 'spring', stiffness: 200, damping: 15 }}
                  className="relative z-10 w-9 h-9 rounded-full bg-gradient-to-br from-red-400 to-rose-600 flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(239,68,68,0.3)]"
                >
                  <X className="w-5 h-5 text-white stroke-[3.5px]" />
                </motion.div>
              )}
            </div>

            {/* Center Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-center pb-2">
              <h4 
                style={{ color: themeParams.titleColor }}
                className="text-[16px] font-semibold leading-snug tracking-wide truncate"
              >
                {toast.title}
              </h4>
              {toast.description && (
                <p 
                  style={{ color: themeParams.descColor }}
                  className="text-[13px] font-medium leading-relaxed truncate mt-0.5"
                >
                  {toast.description}
                </p>
              )}
            </div>

            {/* Right Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ 
                rotate: 90, 
                scale: 1.1, 
                backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                boxShadow: '0 0 12px rgba(139,92,246,0.25)'
              }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-transparent text-zinc-400 dark:text-zinc-500 hover:text-[var(--purple)] dark:hover:text-[var(--pink)] transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </motion.button>

            {/* Integrated Rounded Capsule Progress Bar */}
            <div className="absolute bottom-2.5 left-[18px] right-[18px] h-[3px] rounded-full overflow-hidden bg-zinc-200/20 dark:bg-zinc-800/25">
              <div
                style={{ 
                  width: `${progress}%`,
                  transition: 'width 20ms linear',
                  background: 'linear-gradient(to right, var(--purple), var(--pink))' 
                }}
                className="relative h-full rounded-full overflow-hidden"
              >
                {/* Sweep Light Animation */}
                <motion.div
                  animate={{ x: ['-100%', '300%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
