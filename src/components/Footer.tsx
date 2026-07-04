import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.8 9.8a1.375 1.375 0 0 0 0 1.956l.085.085a1.379 1.379 0 0 0 1.951-.01l9.74-9.751a1.375 1.375 0 0 0-.929-2.494zM11.224 3.407a1.376 1.376 0 0 0-.97.408l-7.9 7.9a1.375 1.375 0 0 0 0 1.956l.085.085a1.379 1.379 0 0 0 1.951-.01l7.84-7.851a1.375 1.375 0 0 0-.929-2.494zM22.564 13.045a1.377 1.377 0 0 0-1.916.03l-4.14 4.14a1.375 1.375 0 0 0 0 1.956l.085.085a1.379 1.379 0 0 0 1.951-.01l4.08-4.091a1.375 1.375 0 0 0-.06-2.11z"/>
    <path d="M16.883 8.812a1.37 1.37 0 0 0-1.65-.205l-10.2 6a1.375 1.375 0 0 0-.326 2.21l.067.067a1.379 1.379 0 0 0 1.91-.18l9.54-7.89a1.375 1.375 0 0 0 .659-1.956z"/>
  </svg>
);

const CodeChefIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.235V12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.09 0 4.01.71 5.54 1.9l1.415-1.415C16.89 2.01 14.54 1 12 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11c0-.77-.08-1.52-.232-2.245L21 11.235z"/>
    <path d="M18.5 7.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-6.5-4c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z"/>
  </svg>
);

export default function Footer() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <a
              href="https://github.com/Vikki-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn hover:scale-110 hover:bg-gradient-to-br hover:from-violet-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center"
              title="GitHub"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://linkedin.com/in/vigneshwaran-s-1b4364369"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn hover:scale-110 hover:bg-gradient-to-br hover:from-violet-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://leetcode.com/u/Vikki-2006/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn hover:scale-110 hover:bg-gradient-to-br hover:from-violet-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center"
              title="LeetCode"
            >
              <LeetCodeIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.codechef.com/users/vikki2006"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn hover:scale-110 hover:bg-gradient-to-br hover:from-violet-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center"
              title="CodeChef"
            >
              <CodeChefIcon className="w-4.5 h-4.5" />
            </a>
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

        {/* Button Wrapper with Gradient Border */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 p-[1.5px] bg-gradient-to-r from-violet-600 to-pink-500 rounded-xl hover:scale-[1.08] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
          aria-label="Back to top"
        >
          {/* Dark Glass Background with blur */}
          <div className="w-full h-full bg-[var(--card-bg)]/90 backdrop-blur rounded-[11px] flex items-center justify-center text-[var(--purple)] transition-colors duration-300">
            <ChevronUp className="w-5 h-5" />
          </div>
        </button>
      </div>

    </footer>
  );
}
