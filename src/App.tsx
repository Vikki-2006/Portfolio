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
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-transparent isolate text-zinc-100 selection:bg-violet-600/30 selection:text-white transition-colors duration-400">
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
