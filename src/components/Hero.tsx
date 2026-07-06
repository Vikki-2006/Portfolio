import { FileText, ArrowRight } from 'lucide-react';
import profile from '@/assets/profile.png';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const GithubIcon = ({ className }: { className?: string }) => <FaGithub className={className} />;

const LinkedinIcon = ({ className }: { className?: string }) => <FaLinkedin className={className} />;

const LeetCodeIcon = ({ className }: { className?: string }) => <SiLeetcode className={className} />;

const CodeChefIcon = ({ className }: { className?: string }) => <SiCodechef className={className} />;

const HackerRankIcon = ({ className }: { className?: string }) => <SiHackerrank className={className} />;

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
      
      <div className="max-w-[1400px] mx-auto px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 xl:gap-x-28 2xl:gap-x-36 items-center justify-between">
          
          {/* Left Column: Text & Links */}
          <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left">
            
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
                    className="font-outfit text-[22px] sm:text-[28px] lg:text-[34px] font-semibold tracking-[-0.02em] leading-[1.1] text-[rgba(255,255,255,0.96)] transition-colors duration-300"
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
              className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4 text-zinc-400 font-semibold text-sm sm:text-base"
            >
              <span>Full-Stack Developer • Competitive Programmer • Problem Solver</span>
            </motion.div>

            {/* Introduction */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl font-medium"
              style={{ textAlign: 'justify', textJustify: 'inter-word' }}
            >
              Passionate Software Engineer specializing in full-stack web development with expertise in <span className="text-[var(--purple)]">React</span>, <span className="text-[var(--purple)]">FastAPI</span>, <span className="text-[var(--purple)]">Python</span>, <span className="text-[var(--purple)]">C</span>, <span className="text-[var(--purple)]">C++</span>, <span className="text-[var(--purple)]">PostgreSQL</span>, and <span className="text-[var(--purple)]">Firebase</span>. Experienced in building scalable applications, designing efficient backend systems, and delivering intuitive user experiences. Backed by strong computer science fundamentals, internship experience, and a commitment to continuous learning, I strive to build software that is clean, maintainable, and impactful. Currently seeking Software Engineer Internship and Full-Time opportunities to contribute to innovative engineering teams.
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
                className="hero-btn-primary px-7 py-3.5 text-sm"
              >
                Explore My Projects
                <ArrowRight className="arrow-icon w-4 h-4" />
              </a>
              <a
                href="/Vigneshwaran_S_Resume_Updated.pdf"
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
              className="mt-10 pt-8 border-t border-zinc-900/50 w-full max-w-xl flex flex-col items-center lg:items-start"
            >
              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-4 text-center lg:text-left">CONNECT</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <SocialLink 
                  href="https://github.com/Vikki-2006" 
                  icon={<GithubIcon className="w-5 h-5" />} 
                  title="GitHub" 
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/vigneshwaran-s-1b4364369/" 
                  icon={<LinkedinIcon className="w-5 h-5" />} 
                  title="LinkedIn" 
                />
                <SocialLink 
                  href="https://leetcode.com/u/Vikki-2006/" 
                  icon={<LeetCodeIcon className="w-5 h-5" />} 
                  title="LeetCode" 
                />
                <SocialLink 
                  href="https://www.codechef.com/users/vikki2006" 
                  icon={<CodeChefIcon className="w-5 h-5" />} 
                  title="CodeChef" 
                />
                <SocialLink 
                  href="https://www.hackerrank.com/profile/Vikki_2006" 
                  icon={<HackerRankIcon className="w-5 h-5" />} 
                  title="HackerRank" 
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Corporate Orbits Portrait UI */}
          <div className="w-full lg:w-[40%] flex flex-col items-center justify-center relative mb-14 lg:mb-0">
            
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
