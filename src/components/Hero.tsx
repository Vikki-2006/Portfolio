import { FileText, ArrowRight } from 'lucide-react';
import profile from '@/assets/profile.png';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.8 9.8a1.375 1.375 0 0 0 0 1.956l.085.085a1.379 1.379 0 0 0 1.951-.01l9.74-9.751a1.375 1.375 0 0 0-.929-2.494zM11.224 3.407a1.376 1.376 0 0 0-.97.408l-7.9 7.9a1.375 1.375 0 0 0 0 1.956l.085.085a1.379 1.379 0 0 0 1.951-.01l7.84-7.851a1.375 1.375 0 0 0-.929-2.494zM22.564 13.045a1.377 1.377 0 0 0-1.916.03l-4.14 4.14a1.375 1.375 0 0 0 0 1.956l.085.085a1.379 1.379 0 0 0 1.951-.01l4.08-4.091a1.375 1.375 0 0 0-.06-2.11z"/>
    <path d="M16.883 8.812a1.37 1.37 0 0 0-1.65-.205l-10.2 6a1.375 1.375 0 0 0-.326 2.21l.067.067a1.379 1.379 0 0 0 1.91-.18l9.54-7.89a1.375 1.375 0 0 0 .659-1.956z"/>
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.235V12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.09 0 4.01.71 5.54 1.9l1.415-1.415C16.89 2.01 14.54 1 12 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11c0-.77-.08-1.52-.232-2.245L21 11.235z"/>
    <path d="M18.5 7.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-6.5-4c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z"/>
  </svg>
);

const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0a12 12 0 0 0-3.3 23.5v-4.148c0-.39-.17-.74-.47-.96L3.9 15.17c-.3-.22-.47-.58-.47-.96V9.79c0-.38.17-.74.47-.96L8.23 5.4c.3-.22.47-.58.47-.96V2.29A10.021 10.021 0 0 1 12 2c1.23 0 2.42.22 3.53.62l-.76.76c-.28.28-.43.66-.43 1.06v2.338c0 .38-.17.74-.47.96l-3.37 2.47a.784.784 0 0 0-.3.62v2.36a.784.784 0 0 0 .3.62l3.37 2.47c.3.22.47.58.47.96v4.12A12.001 12.001 0 0 0 12 0zm0 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
  </svg>
);

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  title: string;
}

const SocialLink = ({ href, icon, title }: SocialLinkProps) => {
  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn flex items-center justify-center transition-all duration-300 cursor-pointer relative"
      >
        {icon}
      </a>
      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[11px] font-semibold text-zinc-100 bg-zinc-950/90 border border-zinc-800 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl scale-95 group-hover:scale-100 origin-bottom">
        {title}
      </span>
    </div>
  );
};

// SVG arc helper functions
const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", start.x, start.y, 
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
};

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-transparent">
      
      <div className="max-w-[1450px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
          
          {/* Left Column: Text & Links */}
          <div className="w-full lg:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Redesigned Hero Heading matching Sujith G portfolio Visual Hierarchy */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
              className="mb-3 text-center lg:text-left flex flex-col w-full items-center lg:items-start"
            >
              <div className="flex flex-col items-center lg:items-start select-none mb-[7px]">
                <span className="font-generalsans-semibold text-zinc-100 text-[26px] sm:text-[32px] lg:text-[38px] leading-none tracking-[-0.02em]">
                  Hi, I'm
                </span>
                <div className="w-[48px] h-[3px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mt-2"></div>
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
              className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4 text-zinc-400 font-semibold text-sm sm:text-base"
            >
              <span>Software Engineer</span>
              <span className="text-zinc-500">•</span>
              <span>Full Stack Developer</span>
              <span className="text-zinc-500">•</span>
              <span>Backend Developer</span>
            </motion.div>

            {/* Introduction */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl font-medium"
            >
              Passionate Full Stack Developer focused on building scalable, high-quality web applications using Python, React, FastAPI, and SQL. Strong foundation in software engineering, data structures, algorithms, and problem solving, with a commitment to writing clean, efficient, and maintainable code. Currently seeking Software Engineer Internship and Full-Time opportunities.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="hero-btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide"
              >
                Explore My Projects
                <ArrowRight className="arrow-icon w-4 h-4" />
              </a>
              <a
                href="/Vigneshwaran_S_Resume_Updated.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-secondary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide"
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
              className="mt-10 pt-8 border-t border-zinc-900/50 w-full max-w-xl flex flex-col items-center lg:items-start"
            >
              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-4 text-center lg:text-left">CONNECT</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <SocialLink 
                  href="https://github.com/Vikki-2006" 
                  icon={<GithubIcon />} 
                  title="GitHub" 
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/vigneshwaran-s-1b4364369/" 
                  icon={<LinkedinIcon />} 
                  title="LinkedIn" 
                />
                <SocialLink 
                  href="https://leetcode.com/u/Vikki-2006/" 
                  icon={<LeetCodeIcon />} 
                  title="LeetCode" 
                />
                <SocialLink 
                  href="https://www.codechef.com/users/vikki2006" 
                  icon={<CodeChefIcon />} 
                  title="CodeChef" 
                />
                <SocialLink 
                  href="https://www.hackerrank.com/profile/Vikki_2006" 
                  icon={<HackerRankIcon />} 
                  title="HackerRank" 
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Corporate Orbits Portrait UI */}
          <div className="w-full lg:w-[48%] flex flex-col items-center justify-center relative mb-14 lg:mb-0">
            
            {/* Master float translateY container */}
            <motion.div
              animate={{
                y: [0, -6, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity
              }}
              className="relative flex items-center justify-center w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
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
                <defs>
                  {/* Arc Glow Filter - Dark Theme */}
                  <filter id="arcGlowDark" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Arc Glow Filter - Light Theme */}
                  <filter id="arcGlowLight" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Gradient Arc Gradients */}
                  <linearGradient id="topRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>
                  
                  <linearGradient id="bottomLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#F43F5E" />
                  </linearGradient>
                </defs>

                {/* Concentric circles */}
                <circle cx="250" cy="250" r="218" stroke="rgba(168, 85, 247, 0.18)" strokeWidth="1" fill="none" />
                <circle cx="250" cy="250" r="228" stroke="rgba(168, 85, 247, 0.18)" strokeWidth="1" fill="none" />
                <circle cx="250" cy="250" r="238" stroke="rgba(168, 85, 247, 0.18)" strokeWidth="1" fill="none" />
                <circle cx="250" cy="250" r="248" stroke="rgba(168, 85, 247, 0.18)" strokeWidth="1" fill="none" />

                {/* Gradient Arc Segments */}
                <path 
                  d={describeArc(250, 250, 233, 20, 70)}
                  fill="none"
                  stroke="url(#topRightGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  filter={theme === 'dark' ? 'url(#arcGlowDark)' : 'url(#arcGlowLight)'}
                  style={{ strokeOpacity: theme === 'dark' ? 1.0 : 0.35 }}
                  className="transition-all duration-400"
                />

                <path 
                  d={describeArc(250, 250, 233, 205, 255)}
                  fill="none"
                  stroke="url(#bottomLeftGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  filter={theme === 'dark' ? 'url(#arcGlowDark)' : 'url(#arcGlowLight)'}
                  style={{ strokeOpacity: theme === 'dark' ? 1.0 : 0.35 }}
                  className="transition-all duration-400"
                />
              </svg>

              {/* Glowing Particles */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                  opacity: [0.35, 0.5, 0.35]
                }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_8px_rgba(168,85,247,0.7)] opacity-40 blur-[0.5px] z-20 pointer-events-none"
              />
              <motion.div
                animate={{
                  y: [0, 4, 0],
                  opacity: [0.35, 0.5, 0.35]
                }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-[12%] right-[22%] w-[7px] h-[7px] rounded-full bg-[#EC4899] shadow-[0_0_6px_rgba(236,72,153,0.7)] opacity-40 blur-[0.5px] z-20 pointer-events-none"
              />
              <motion.div
                animate={{
                  y: [0, -4, 0],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                className="absolute top-[4%] left-[44%] w-2 h-2 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.5)] opacity-50 blur-[0.5px] z-20 pointer-events-none"
              />
              <motion.div
                animate={{
                  y: [0, 3, 0],
                  opacity: [0.35, 0.5, 0.35]
                }}
                transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 1.5 }}
                className="absolute top-[45%] left-[4%] w-[6px] h-[6px] rounded-full bg-white/70 shadow-[0_0_6px_rgba(255,255,255,0.4)] opacity-40 blur-[0.5px] z-20 pointer-events-none"
              />

              {/* Circular Portrait Frame */}
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
                  className="w-full h-full object-contain scale-[1.22] translate-y-[5%] select-none pointer-events-none z-10"
                />
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
