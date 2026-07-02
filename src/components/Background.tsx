import { useMemo } from 'react';
import { motion } from 'framer-motion';

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
  const stars = useMemo(() => starSettings, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[-1] select-none pointer-events-none overflow-hidden bg-[#09090B]">
      
      {/* 1. Large soft purple ambient glow from the top-left */}
      <div 
        className="absolute rounded-full blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
          width: '1000px',
          height: '1000px',
          left: '-20%',
          top: '-20%',
        }}
      />

      {/* 2. Large soft pink ambient glow from the top-right */}
      <div 
        className="absolute rounded-full blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.10) 0%, transparent 70%)',
          width: '1000px',
          height: '1000px',
          right: '-20%',
          top: '-15%',
        }}
      />

      {/* 3. Very subtle blue glow behind the profile image */}
      <div 
        className="absolute rounded-full blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, transparent 70%)',
          width: '700px',
          height: '700px',
          right: '8%',
          top: '15%',
        }}
      />

      {/* 4. Extremely faint square grid overlay across the entire Hero (opacity around 2-3%) */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px'
        }}
      />

      {/* 5. 80-120 tiny white, purple and pink particles randomly distributed (slow twinkling stars) */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 3px ${star.color}`
          }}
          animate={{
            opacity: [0.15, 0.85, 0.15]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 6. 2 Floating Blurred Planets */}
      {/* Large planet near the top-right */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '110px',
          height: '110px',
          background: 'radial-gradient(circle at 30% 30%, #3F3F46, #09090B)',
          boxShadow: '0 0 50px rgba(236, 72, 153, 0.08)',
          right: '12%',
          top: '22%',
          opacity: 0.85
        }}
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Small planet near the bottom-right */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle at 35% 35%, #27272A, #09090B)',
          boxShadow: '0 0 35px rgba(124, 58, 237, 0.08)',
          right: '22%',
          bottom: '18%',
          opacity: 0.85
        }}
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
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
        <motion.path
          fill="none"
          stroke="url(#wave-purple)"
          strokeWidth="1.2"
          animate={{
            d: [
              "M0,110 C240,70 480,150 720,110 C960,70 1200,150 1440,110",
              "M0,110 C240,130 480,90 720,110 C960,130 1200,90 1440,110",
              "M0,110 C240,70 480,150 720,110 C960,70 1200,150 1440,110"
            ]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          fill="none"
          stroke="url(#wave-pink)"
          strokeWidth="1.2"
          animate={{
            d: [
              "M0,130 C300,160 600,100 900,130 C1200,160 1320,100 1440,130",
              "M0,130 C300,100 600,160 900,130 C1200,100 1320,160 1440,130",
              "M0,130 C300,160 600,100 900,130 C1200,160 1320,100 1440,130"
            ]
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </svg>

      {/* 8. Soft vignette around screen edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, transparent 40%, rgba(9, 9, 11, 0.85) 100%)'
        }}
      />

      {/* 9. Subtle bottom glow fading upward */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(124, 58, 237, 0.08), transparent 100%)'
        }}
      />

    </div>
  );
}
