import { memo } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import profile from '@/assets/profile.png';
import { motion } from 'framer-motion';
import SocialIcon from './SocialIcon';



interface ParticleConfig {
  size: number;
  color: string;
  glowColor: string;
  offset: number;
  duration: number; // orbit duration (15s to 35s)
  direction: 'cw' | 'ccw';
  floatDuration: number;
  floatDelay: number;
  twinkleDuration: number;
  twinkleDelay: number;
  angle: number;
}

const ORBITING_PARTICLES: ParticleConfig[] = [
  // Mobile active (0 - 9: total 10 particles)
  // Purple (7), Pink (2), White (1)
  { size: 1.5, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 2, duration: 24, direction: 'cw', floatDuration: 5.2, floatDelay: 0.2, twinkleDuration: 3.2, twinkleDelay: 0.5, angle: 15 },
  { size: 2, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 6, duration: 32, direction: 'ccw', floatDuration: 6.8, floatDelay: 0.8, twinkleDuration: 4.1, twinkleDelay: 1.2, angle: 50 },
  { size: 1, color: '#EC4899', glowColor: 'rgba(236, 72, 153, var(--pink-glow-opacity))', offset: 8, duration: 28, direction: 'cw', floatDuration: 7.5, floatDelay: 1.5, twinkleDuration: 2.8, twinkleDelay: 0.1, angle: 85 },
  { size: 3, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 4, duration: 36, direction: 'ccw', floatDuration: 6.2, floatDelay: 1.2, twinkleDuration: 3.5, twinkleDelay: 0.9, angle: 120 },
  { size: 1.5, color: '#EC4899', glowColor: 'rgba(236, 72, 153, var(--pink-glow-opacity))', offset: 9, duration: 22, direction: 'cw', floatDuration: 5.5, floatDelay: 0.5, twinkleDuration: 2.2, twinkleDelay: 1.5, angle: 160 },
  { size: 2, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 1, duration: 30, direction: 'ccw', floatDuration: 6.0, floatDelay: 0.3, twinkleDuration: 4.5, twinkleDelay: 0.3, angle: 195 },
  { size: 1.5, color: '#FFFFFF', glowColor: 'rgba(255, 255, 255, var(--white-glow-opacity))', offset: 5, duration: 27, direction: 'cw', floatDuration: 7.1, floatDelay: 1.7, twinkleDuration: 3.0, twinkleDelay: 2.0, angle: 230 },
  { size: 2, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 7, duration: 40, direction: 'ccw', floatDuration: 6.6, floatDelay: 0.6, twinkleDuration: 5.2, twinkleDelay: 0.7, angle: 265 },
  { size: 1, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 3, duration: 34, direction: 'cw', floatDuration: 5.8, floatDelay: 1.1, twinkleDuration: 3.8, twinkleDelay: 1.3, angle: 300 },
  { size: 2, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 10, duration: 25, direction: 'ccw', floatDuration: 4.9, floatDelay: 0.4, twinkleDuration: 2.5, twinkleDelay: 0.6, angle: 335 },

  // Tablet active (10 - 15: total 6 particles, cumulating to 16)
  // Purple (4), Pink (1), White (1)
  { size: 1, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 4, duration: 28, direction: 'ccw', floatDuration: 6.4, floatDelay: 0.4, twinkleDuration: 3.3, twinkleDelay: 1.2, angle: 35 },
  { size: 3, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 7, duration: 23, direction: 'cw', floatDuration: 5.0, floatDelay: 0.2, twinkleDuration: 4.2, twinkleDelay: 0.5, angle: 105 },
  { size: 1.5, color: '#EC4899', glowColor: 'rgba(236, 72, 153, var(--pink-glow-opacity))', offset: 2, duration: 39, direction: 'ccw', floatDuration: 7.3, floatDelay: 2.2, twinkleDuration: 2.7, twinkleDelay: 1.8, angle: 145 },
  { size: 2, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 6, duration: 30, direction: 'cw', floatDuration: 6.1, floatDelay: 1.1, twinkleDuration: 3.9, twinkleDelay: 0.2, angle: 215 },
  { size: 1.5, color: '#FFFFFF', glowColor: 'rgba(255, 255, 255, var(--white-glow-opacity))', offset: 9, duration: 25, direction: 'ccw', floatDuration: 5.9, floatDelay: 0.9, twinkleDuration: 3.0, twinkleDelay: 1.1, angle: 250 },
  { size: 1, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 1, duration: 35, direction: 'cw', floatDuration: 6.8, floatDelay: 1.8, twinkleDuration: 4.6, twinkleDelay: 0.7, angle: 315 },

  // Desktop only active (16 - 23: total 8 particles, cumulating to 24)
  // Purple (6), Pink (2), White (0)
  { size: 2, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 5, duration: 29, direction: 'ccw', floatDuration: 5.3, floatDelay: 0.3, twinkleDuration: 2.4, twinkleDelay: 1.4, angle: 20 },
  { size: 1.5, color: '#EC4899', glowColor: 'rgba(236, 72, 153, var(--pink-glow-opacity))', offset: 8, duration: 37, direction: 'cw', floatDuration: 7.4, floatDelay: 0.7, twinkleDuration: 5.5, twinkleDelay: 0.9, angle: 70 },
  { size: 3, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 3, duration: 31, direction: 'ccw', floatDuration: 6.5, floatDelay: 1.5, twinkleDuration: 3.4, twinkleDelay: 0.3, angle: 130 },
  { size: 2, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 10, duration: 26, direction: 'cw', floatDuration: 5.7, floatDelay: 0.7, twinkleDuration: 4.0, twinkleDelay: 1.0, angle: 180 },
  { size: 1, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 2, duration: 37, direction: 'ccw', floatDuration: 7.0, floatDelay: 2.3, twinkleDuration: 2.6, twinkleDelay: 2.1, angle: 200 },
  { size: 2, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 6, duration: 31, direction: 'cw', floatDuration: 5.5, floatDelay: 1.0, twinkleDuration: 4.5, twinkleDelay: 1.3, angle: 240 },
  { size: 1.5, color: '#EC4899', glowColor: 'rgba(236, 72, 153, var(--pink-glow-opacity))', offset: 9, duration: 25, direction: 'ccw', floatDuration: 5.2, floatDelay: 0.6, twinkleDuration: 3.2, twinkleDelay: 0.6, angle: 280 },
  { size: 1, color: '#A855F7', glowColor: 'rgba(168, 85, 247, var(--purple-glow-opacity))', offset: 4, duration: 34, direction: 'cw', floatDuration: 6.7, floatDelay: 1.3, twinkleDuration: 3.7, twinkleDelay: 0.8, angle: 340 },
];

const Hero = memo(function Hero() {

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-transparent">
      
      <div className="responsive-container relative z-10">
        <div className="hero-flex-layout flex flex-col lg:flex-row gap-16 lg:gap-24 xl:gap-x-28 2xl:gap-x-36 items-center justify-between">
          
          {/* Left Column: Text & Links */}
          <div className="hero-text-column w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Redesigned Hero Heading matching Sujith G portfolio Visual Hierarchy */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
              className="mb-3 text-center lg:text-left flex flex-col w-full items-center lg:items-start"
            >
              <div className="flex flex-col items-center lg:items-start select-none mb-6 group">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="inline-flex items-center"
                >
                  <span
                    className="font-outfit text-[22px] sm:text-[28px] lg:text-[34px] font-semibold tracking-[-0.02em] leading-[1.1] text-[var(--text-primary)] transition-colors duration-300"
                    style={{ textShadow: '0 0 10px rgba(139,92,246,0.10)' }}
                  >
                    Hello,
                  </span>
                  <span
                    className="font-outfit text-[22px] sm:text-[28px] lg:text-[34px] font-semibold tracking-[-0.02em] leading-[1.1] bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent transition-colors duration-300 ml-2"
                    style={{ textShadow: '0 0 10px rgba(139,92,246,0.10)' }}
                  >
                    I&apos;m
                  </span>
                </motion.div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                  className="origin-left w-[56px] h-[3px] mt-2.5 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] shadow-[0_0_18px_rgba(139,92,246,0.15)] transition-[filter,opacity] duration-300 group-hover:brightness-110"
                />
              </div>
              <span className="font-milker bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-[21px] sm:text-[36px] lg:text-[53px] leading-[1.05] py-0.5 whitespace-nowrap block select-all tracking-normal">
                VIGNESHWARAN S
              </span>
            </motion.h1>

            {/* Sub-Badges / Skills (Muted gray) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4 text-[var(--text-secondary)] font-semibold text-sm sm:text-base"
            >
              <span>Full-Stack Developer • Building Intelligent Software</span>
            </motion.div>

            {/* Introduction */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-[var(--text-primary-muted)] text-base sm:text-lg leading-relaxed max-w-3xl font-medium"
              style={{ textAlign: 'justify', textJustify: 'inter-word' }}
            >
              Passionate Full-Stack Software Engineer with expertise in designing and developing scalable, AI-powered web applications from frontend to backend. Proficient in <span className="text-[var(--purple)]">React</span>, <span className="text-[var(--purple)]">TypeScript</span>, <span className="text-[var(--purple)]">FastAPI</span>, <span className="text-[var(--purple)]">Python</span>, and <span className="text-[var(--purple)]">PostgreSQL</span>, with a strong foundation in software engineering, Data Structures & Algorithms, REST APIs, and clean, maintainable code. Currently seeking Software Engineer Internship and Full-Time opportunities.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hero-buttons-container mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="hero-btn-primary px-7 py-3.5 text-sm"
              >
                Explore My Projects
                <ArrowRight className="arrow-icon w-4 h-4" />
              </a>
              <a
                href="/resume/Vigneshwaran_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-secondary px-7 py-3.5 text-sm"
              >
                View Resume
                <FileText className="file-icon w-4 h-4" />
              </a>
            </motion.div>

            {/* Social Handles */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 pt-8 border-t border-[var(--border-color)] w-full max-w-xl flex flex-col items-center lg:items-start"
            >
              <p className="text-[var(--text-secondary)] text-xs font-semibold uppercase tracking-wider mb-4 text-center lg:text-left">CONNECT WITH ME</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <SocialIcon 
                  href="https://github.com/Vikki-2006" 
                  network="github"
                  title="GitHub" 
                />
                <SocialIcon 
                  href="https://www.linkedin.com/in/vigneshwaran-s-1b4364369/" 
                  network="linkedin"
                  title="LinkedIn" 
                />
                <SocialIcon 
                  href="https://leetcode.com/u/Vikki-2006/" 
                  network="leetcode"
                  title="LeetCode" 
                />
                <SocialIcon 
                  href="https://www.codechef.com/users/vikki2006" 
                  network="codechef"
                  title="CodeChef" 
                />
                <SocialIcon 
                  href="https://x.com/Vignesh72625559" 
                  network="x"
                  title="X (Twitter)" 
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Corporate Orbits Portrait UI */}
          <div className="hero-image-column w-full lg:w-[40%] flex flex-col items-center justify-center relative mb-14 lg:mb-0">
            
            {/* Master float translateY container */}
            <div
              className="hero-float-container relative flex items-center justify-center w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
            >
              {/* Radial Purple background glow */}
              <div 
                className="absolute rounded-full pointer-events-none z-0 transition-all duration-300"
                style={{
                  background: 'radial-gradient(circle, var(--profile-glow) 0%, transparent 70%)',
                  width: '500px',
                  height: '500px'
                }}
              />

              {/* SVG Overlay */}
              <svg 
                viewBox="0 0 500 500" 
                className="w-full h-full absolute top-0 left-0 z-10 pointer-events-none"
              >
                {/* Concentric circles */}
                <circle cx="250" cy="250" r="218" stroke="rgba(168, 85, 247, 0.18)" strokeWidth="1" fill="none" />
                <circle cx="250" cy="250" r="228" stroke="rgba(168, 85, 247, 0.18)" strokeWidth="1" fill="none" />
                <circle cx="250" cy="250" r="238" stroke="rgba(168, 85, 247, 0.18)" strokeWidth="1" fill="none" />
                <circle cx="250" cy="250" r="248" stroke="rgba(168, 85, 247, 0.18)" strokeWidth="1" fill="none" />
              </svg>

              {/* Glowing Particles */}
              <div
                className="hero-glow-p-1 absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_8px_rgba(168,85,247,0.7)] opacity-40 blur-[0.5px] z-20 pointer-events-none"
              />
              <div
                className="hero-glow-p-2 absolute bottom-[12%] right-[22%] w-[7px] h-[7px] rounded-full bg-[#EC4899] shadow-[0_0_6px_rgba(236,72,153,0.7)] opacity-40 blur-[0.5px] z-20 pointer-events-none"
              />
              <div
                className="hero-glow-p-3 absolute top-[4%] left-[44%] w-2 h-2 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.5)] opacity-50 blur-[0.5px] z-20 pointer-events-none"
              />
              <div
                className="hero-glow-p-4 absolute top-[45%] left-[4%] w-[6px] h-[6px] rounded-full bg-white/70 shadow-[0_0_6px_rgba(255,255,255,0.4)] opacity-40 blur-[0.5px] z-20 pointer-events-none"
              />

              {/* Profile Image & Orbiting Particles Container */}
              <div className="relative flex items-center justify-center">
                
                {/* Orbiting Particles System (behind frame, z-0) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  {ORBITING_PARTICLES.map((p, idx) => {
                    let responsiveness = "absolute";
                    if (idx >= 10 && idx < 16) {
                      responsiveness = "absolute hidden sm:block";
                    } else if (idx >= 16) {
                      responsiveness = "absolute hidden lg:block";
                    }
                    
                    return (
                      <div
                        key={idx}
                        className={responsiveness}
                        style={{
                          width: 0,
                          height: 0,
                          transform: `rotate(${p.angle}deg)`
                        }}
                      >
                        {/* 1. Orbit animation layer (cw or ccw rotation) */}
                        <div
                          className="absolute"
                          style={{
                            width: 0,
                            height: 0,
                            animation: `particle-orbit-${p.direction} ${p.duration}s linear infinite`
                          }}
                        >
                          {/* 2. Radius translation layer */}
                          <div
                            className="absolute"
                            style={{
                              width: 0,
                              height: 0,
                              transform: `translateY(calc(-1 * (var(--profile-radius) + ${p.offset}px)))`
                            }}
                          >
                            {/* 3. Inner drifting, scaling and twinkling particle */}
                            <div
                              className="absolute rounded-full"
                              style={{
                                width: `${p.size}px`,
                                height: `${p.size}px`,
                                backgroundColor: p.color,
                                boxShadow: `0 0 calc(2px + ${p.size}px) ${p.glowColor}`,
                                filter: 'var(--particle-blur-filter)',
                                animation: `particle-drift-${idx % 4} ${p.floatDuration}s ease-in-out ${p.floatDelay}s infinite alternate, particle-twinkle-${idx % 3} ${p.twinkleDuration}s ease-in-out ${p.twinkleDelay}s infinite alternate`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Circular Portrait Frame + Animated Gradient Border */}
                <div className="profile-border-ring">
                  {/* Spinning conic-gradient arc — only this element rotates */}
                  <div className="profile-border-ring__arc" aria-hidden="true" />
                  {/* Soft bloom for glow spread — rotates in sync */}
                  <div className="profile-border-ring__bloom" aria-hidden="true" />
                  {/* Subtle inner glow for premium depth — static */}
                  <div className="profile-border-ring__inner-glow" aria-hidden="true" />

                  {/* Profile frame sits on top, perfectly still */}
                  <div className="profile-border-ring__frame">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full border-[6px] border-[#5A6373] overflow-hidden z-10 flex items-center justify-center p-2 cursor-default bg-black"
                      style={{
                        boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.2)'
                      }}
                    >
                      <img
                        src={profile}
                        alt="Vigneshwaran S"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="w-full h-full object-contain scale-[1.22] translate-y-[5%] select-none pointer-events-none z-10"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
});

export default Hero;
