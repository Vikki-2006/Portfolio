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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--navbar-bg)] backdrop-blur-xl border-b border-[var(--border-color)] py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-1.5 text-zinc-100 group select-none">
              <span className="text-violet-500 font-extrabold text-xl leading-none">&lt;/&gt;</span>
              <span className="font-script text-zinc-100 text-[21px] font-semibold leading-none">Vigneshwaran S</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
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

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-semibold border-l-2 ${
                activeSection === link.href.substring(1)
                  ? 'border-violet-600 bg-zinc-900 text-zinc-100'
                  : 'border-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Theme Toggle Row */}
          <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between px-4">
            <span className="text-sm font-medium text-zinc-400">Theme Mode</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
