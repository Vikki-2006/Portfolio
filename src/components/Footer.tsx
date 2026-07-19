import { useEffect, useState, memo } from 'react';
import SocialIcon from './SocialIcon';

const Footer = memo(function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[var(--footer-bg)] border-t border-[var(--footer-border)] py-12 relative select-none transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
          
          {/* Left: Branding Logo in Yesteryear */}
          <div className="text-zinc-400 text-lg font-semibold font-script flex items-center gap-1.5">
            <span className="text-violet-500 font-extrabold">&lt;/&gt;</span> Vigneshwaran S
          </div>

          {/* Center: Copyright */}
          <div className="text-zinc-500 text-center md:order-none order-2">
            <div className="text-xs sm:text-sm font-semibold tracking-wide">
              &copy; 2026 Vigneshwaran S. All rights reserved.
            </div>
          </div>

          {/* Right: Social Handle Icons with Hover Glow, Scale & Gradient */}
          <div className="flex items-center gap-4">
            <SocialIcon href="https://github.com/Vikki-2006" network="github" title="GitHub" />
            <SocialIcon href="https://linkedin.com/in/vigneshwaran-s-1b4364369" network="linkedin" title="LinkedIn" />
            <SocialIcon href="https://x.com/Vignesh72625559" network="x" title="X (Twitter)" />
          </div>

        </div>
      </div>

      {/* Redesigned Premium Glassmorphism Back to Top Button */}
      <div 
        className={`fixed bottom-6 right-6 z-40 group transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
        }`}
      >
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-950/95 border border-zinc-800/80 rounded-lg text-[10px] font-bold tracking-wider text-zinc-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Back to Top
        </span>

        {/* Transparent Button with Gradient Arrow & Hover Glow */}
        <button
          onClick={scrollToTop}
          className="hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer bg-transparent border-0 p-0 outline-none select-none"
          aria-label="Back to top"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#arrow-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 filter drop-shadow-[0_0_2px_rgba(139,92,246,0.4)] hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.85)] transition-all duration-300"
          >
            <defs>
              <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      </div>

    </footer>
  );
});

export default Footer;
