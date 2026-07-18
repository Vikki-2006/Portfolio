import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

// Generate a deterministic static list of 100 stars to avoid hydration mismatch in server-side builds
const starSettings = Array.from({ length: 100 }, (_, i) => {
  const colors = ['#FFFFFF', '#A855F7', '#EC4899'];
  return {
    id: i,
    left: `${(i * 17) % 100}%`,
    top: `${(i * 29) % 100}%`,
    size: ((i * 3) % 2) + 1, // 1px to 2px
    color: colors[i % colors.length],
    duration: ((i * 7) % 5) + 3, // 3s to 7s duration
    delay: (i * 0.1) % 4 // 0s to 4s delay
  };
});

export default function Background() {
  const { theme } = useTheme();

  const stars = useMemo(() => {
    if (theme === 'light') {
      return starSettings.map(star => ({
        ...star,
        color: '#D4D4D8' // Soft light gray particles in light theme
      }));
    }
    return starSettings;
  }, [theme]);

  return (
    <div className="fixed inset-0 w-full h-full z-[-1] select-none pointer-events-none overflow-hidden bg-[var(--background)]">
      
      {/* 1. Large soft purple ambient glow from the top-left */}
      <div 
        className="absolute rounded-full blur-[140px] pointer-events-none transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.04) 0%, transparent 70%)',
          width: '1000px',
          height: '1000px',
          left: '-20%',
          top: '-20%',
        }}
      />

      {/* 2. Large soft pink ambient glow from the top-right */}
      <div 
        className="absolute rounded-full blur-[140px] pointer-events-none transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.10) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.03) 0%, transparent 70%)',
          width: '1000px',
          height: '1000px',
          right: '-20%',
          top: '-15%',
        }}
      />

      {/* 3. Very subtle blue glow behind the profile image */}
      <div 
        className="absolute rounded-full blur-[120px] pointer-events-none transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
          width: '700px',
          height: '700px',
          right: '8%',
          top: '15%',
        }}
      />

      {/* 4. Extremely faint square grid overlay across the entire Hero (opacity around 2-3%) */}
      <div 
        className="absolute inset-0 transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          opacity: theme === 'dark' ? 0.025 : 0.04,
          backgroundImage: theme === 'dark'
            ? `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`
            : `linear-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px),
               linear-gradient(90deg, rgba(15, 23, 42, 0.08) 1px, transparent 1px)`,
          backgroundSize: '72px 72px'
        }}
      />

      {/* 5. 80-120 tiny white, purple and pink particles randomly distributed (slow twinkling stars) */}
      <div style={{ opacity: 'var(--stars-opacity)' }} className="absolute inset-0 transition-opacity duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full pointer-events-none transition-[left,top,background-color] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] star-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: `0 0 3px ${star.color}`,
              '--star-duration': `${star.duration}s`,
              '--star-delay': `${star.delay}s`
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* 6. 2 Floating Blurred Planets */}
      {/* Large planet near the top-right */}
      <div
        className="absolute rounded-full pointer-events-none planet-float-lg"
        style={{
          width: '110px',
          height: '110px',
          background: 'var(--planet-bg-1)',
          boxShadow: '0 0 50px var(--planet-glow)',
          right: '12%',
          top: '22%',
          opacity: 0.85,
          willChange: 'transform'
        }}
      />

      {/* Small planet near the bottom-right */}
      <div
        className="absolute rounded-full pointer-events-none planet-float-sm"
        style={{
          width: '60px',
          height: '60px',
          background: 'var(--planet-bg-2)',
          boxShadow: '0 0 35px var(--planet-glow)',
          right: '22%',
          bottom: '18%',
          opacity: 0.85,
          willChange: 'transform'
        }}
      />

      {/* 7. Animated SVG Wave Lines at the bottom with purple and pink gradients */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[220px] pointer-events-none select-none"
        viewBox="0 0 1440 220" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-purple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0)" />
            <stop offset="50%" stopColor="rgba(124, 58, 237, 0.22)" />
            <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
          </linearGradient>
          <linearGradient id="wave-pink" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0)" />
            <stop offset="50%" stopColor="rgba(236, 72, 153, 0.16)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
          </linearGradient>
        </defs>
        <path
          className="wave-path-purple"
          fill="none"
          stroke="url(#wave-purple)"
          strokeWidth="1.2"
        />
        <path
          className="wave-path-pink"
          fill="none"
          stroke="url(#wave-pink)"
          strokeWidth="1.2"
        />
      </svg>

      {/* 8. Soft vignette around screen edges */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: 'radial-gradient(circle, transparent 40%, var(--vignette-color) 100%)'
        }}
      />

      {/* 9. Subtle bottom glow fading upward */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(to top, rgba(124, 58, 237, 0.08), transparent 100%)'
            : 'linear-gradient(to top, rgba(124, 58, 237, 0.024), transparent 100%)'
        }}
      />

    </div>
  );
}
