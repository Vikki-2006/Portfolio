import { memo } from 'react';
import { useTheme } from '../context/ThemeContext';

// Generate a static deterministic list of 100 stars
const starSettings = Array.from({ length: 100 }, (_, i) => {
  return {
    id: i,
    left: `${(i * 17) % 100}%`,
    top: `${(i * 29) % 100}%`,
    size: ((i * 3) % 2) + 1, // 1px to 2px
    colorIndex: i % 3,
    duration: ((i * 7) % 5) + 3, // 3s to 7s duration
    delay: (i * 0.1) % 4 // 0s to 4s delay
  };
});

const Background = memo(function Background() {
  const { theme } = useTheme();

  return (
    <div className="portfolio-bg fixed inset-0 w-full h-full z-0 select-none pointer-events-none overflow-hidden bg-[var(--background)]">
      
      {/* --- DARK THEME LAYERS --- */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-280 md:duration-500 ease-in-out"
        style={{ opacity: theme === 'dark' ? 1 : 0 }}
      >
        {/* 1. Large soft purple ambient glow from the top-left */}
        <div 
          className="absolute rounded-full blur-[60px] md:blur-[140px] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
            left: '-20%',
            top: '-20%',
          }}
        />

        {/* 2. Large soft pink ambient glow from the top-right */}
        <div 
          className="absolute rounded-full blur-[60px] md:blur-[140px] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.10) 0%, transparent 70%)',
            right: '-20%',
            top: '-15%',
          }}
        />

        {/* 3. Very subtle blue glow behind the profile image */}
        <div 
          className="absolute rounded-full blur-[50px] md:blur-[120px] w-[350px] h-[350px] md:w-[700px] md:h-[700px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, transparent 70%)',
            right: '8%',
            top: '15%',
          }}
        />

        {/* 4. Faint square grid overlay */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.025,
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: '72px 72px'
          }}
        />

        {/* 8. Soft vignette around screen edges */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 40%, rgba(9, 9, 11, 0.85) 100%)'
          }}
        />

        {/* 9. Subtle bottom glow fading upward */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[180px] md:h-[300px] pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(124, 58, 237, 0.08), transparent 100%)'
          }}
        />
      </div>

      {/* --- LIGHT THEME LAYERS --- */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-280 md:duration-500 ease-in-out"
        style={{ opacity: theme === 'light' ? 1 : 0 }}
      >
        {/* 1. Large soft purple ambient glow from the top-left */}
        <div 
          className="absolute rounded-full blur-[60px] md:blur-[140px] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.04) 0%, transparent 70%)',
            left: '-20%',
            top: '-20%',
          }}
        />

        {/* 2. Large soft pink ambient glow from the top-right */}
        <div 
          className="absolute rounded-full blur-[60px] md:blur-[140px] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.03) 0%, transparent 70%)',
            right: '-20%',
            top: '-15%',
          }}
        />

        {/* 3. Very subtle blue glow behind the profile image */}
        <div 
          className="absolute rounded-full blur-[50px] md:blur-[120px] w-[350px] h-[350px] md:w-[700px] md:h-[700px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
            right: '8%',
            top: '15%',
          }}
        />

        {/* 4. Faint square grid overlay */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(15, 23, 42, 0.08) 1px, transparent 1px)`,
            backgroundSize: '72px 72px'
          }}
        />

        {/* 8. Soft vignette around screen edges */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 40%, rgba(247, 248, 252, 0.70) 100%)'
          }}
        />

        {/* 9. Subtle bottom glow fading upward */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[180px] md:h-[300px] pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(124, 58, 237, 0.024), transparent 100%)'
          }}
        />
      </div>

      {/* 5. Tiny stars (30 on mobile, 100 on desktop) */}
      <div style={{ opacity: 'var(--stars-opacity)' }} className="absolute inset-0 transition-opacity duration-280 md:duration-[650ms] ease-in-out">
        {starSettings.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full pointer-events-none star-twinkle star-color-${star.colorIndex} ${star.id >= 30 ? 'hidden md:block' : ''}`}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--star-duration': `${star.duration}s`,
              '--star-delay': `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* 6. 2 Floating Planets */}
      <div
        className="absolute rounded-full pointer-events-none planet-float-lg w-[75px] h-[75px] md:w-[110px] md:h-[110px]"
        style={{
          background: 'var(--planet-bg-1)',
          boxShadow: '0 0 30px var(--planet-glow)',
          right: '12%',
          top: '22%',
          opacity: 0.85,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none planet-float-sm w-[45px] h-[45px] md:w-[60px] md:h-[60px]"
        style={{
          background: 'var(--planet-bg-2)',
          boxShadow: '0 0 20px var(--planet-glow)',
          right: '22%',
          bottom: '18%',
          opacity: 0.85,
        }}
      />

      {/* 7. Animated SVG Wave Lines */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[140px] md:h-[220px] pointer-events-none select-none"
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

    </div>
  );
});

export default Background;
