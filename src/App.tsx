import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  useEffect(() => {
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Clean up event listener and destroy Lenis instance on unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-transparent isolate text-zinc-100 selection:bg-violet-600/30 selection:text-white">
        {/* Premium Layered Background */}
        <Background />

      {/* Content wrapper with z-index to stack correctly above the background layer */}
      <div className="relative z-10">
        {/* Premium Glassmorphic Header */}
        <Navbar />

        <main className="relative">
          {/* Hero Section */}
          <Hero />

          {/* About Bio Section */}
          <About />

          {/* Skills & Technologies Grid */}
          <Skills />

          {/* Internship Experience Section */}
          <Experience />

          {/* Projects Cards Grid */}
          <Projects />

          {/* Achievements / Competitive Programming records */}
          <Achievements />

          {/* Verified Badges / Certifications Grid */}
          <Certifications />

          {/* Contact CTA Card */}
          <Contact />
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
    </ThemeProvider>
  );
}
