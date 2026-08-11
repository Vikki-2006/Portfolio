import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Prevent background page scrolling while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    let isScrolledPast = false;
    const handleScroll = () => {
      const past = window.scrollY > 20;
      if (past !== isScrolledPast) {
        isScrolledPast = past;
        setScrolled(past);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.substring(1);
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar (>=769px / md:block) - 100% UNTOUCHED */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--navbar-bg)] backdrop-blur-xl border-b border-[var(--border-color)] py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="responsive-container">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" aria-label="Vigneshwaran S Portfolio Home" className="flex items-center gap-1.5 text-zinc-100 group select-none">
                <span className="text-violet-500 font-extrabold text-xl leading-none">&lt;/&gt;</span>
                <span className="font-script text-zinc-100 text-[21px] font-semibold leading-none">Vigneshwaran S</span>
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="nav-links-desktop items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'text-[var(--nav-text-active)] bg-violet-500/10 dark:bg-white/5'
                        : 'text-[var(--nav-text-inactive)] hover:text-[var(--nav-text-hover)] hover:bg-zinc-900/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              <ThemeToggle className="ml-2" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Top-Right Controls (<=768px / md:hidden) - NO navbar container */}
      <div className="absolute top-4 right-4 z-50 flex md:hidden items-center gap-2.5">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-full text-[var(--text-primary)] hover:bg-zinc-800/30 border border-[var(--border-color)] bg-[var(--background)] shadow-md focus:outline-none transition-transform duration-200 active:scale-95"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5 text-violet-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Backdrop overlay for closing mobile drawer */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[55] bg-black/50 md:hidden transition-opacity duration-250 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Navigation Drawer (Right-Side Slide-In) */}
      <div
        className={`fixed top-0 right-0 z-[60] h-[100dvh] w-[82vw] max-w-[360px] bg-[var(--background)] border-l border-[var(--border-color)] shadow-2xl flex flex-col md:hidden transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{
          transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-color)]">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 text-zinc-100 group select-none"
          >
            <span className="text-violet-500 font-extrabold text-lg leading-none">&lt;/&gt;</span>
            <span className="font-script text-[var(--text-primary)] text-lg font-semibold leading-none">Vigneshwaran S</span>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-zinc-800/40 focus:outline-none transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-violet-400" />
          </button>
        </div>

        {/* Navigation Items List */}
        <div className="px-3 py-4 space-y-1 overflow-y-auto flex-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 border-l-2 ${
                  isActive
                    ? 'border-violet-500 bg-violet-500/10 text-violet-400 font-bold'
                    : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-zinc-800/20'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
