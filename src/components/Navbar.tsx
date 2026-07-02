import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

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
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold flex items-center gap-1 font-sans text-white group">
              <span className="text-gradient font-extrabold">&lt;/&gt;</span>
              <span className="tracking-wide group-hover:text-zinc-300 transition-colors">VIGNESHWARAN</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.substring(1)
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Download Resume Button */}
          <div className="hidden lg:block">
            <a
              href="/resume.pdf"
              download="Vigneshwaran_S_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-lg text-sm font-medium text-white bg-zinc-900/40 hover:bg-zinc-900 hover:border-transparent relative overflow-hidden group transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              <FileText className="w-4 h-4 z-10 text-accent-red group-hover:text-white transition-colors" />
              <span className="z-10">Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/60 focus:outline-none"
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
                  ? 'border-violet-600 bg-zinc-900 text-white'
                  : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/40'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-900">
            <a
              href="/resume.pdf"
              download="Vigneshwaran_S_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-red-500 shadow-md"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
