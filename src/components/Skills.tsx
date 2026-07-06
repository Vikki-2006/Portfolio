import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SectionContainer from './SectionContainer';

interface TechItem {
  name: string;
  icon: any;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  items: TechItem[];
  glowColor: string;
}

// Custom 4K High-Resolution crisp SVG brand logos
const PythonLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2c-3.15 0-5 .35-5 2.3v2h5v.8H5.1C3.1 7.1 2 8.4 2 11.8c0 3.4 1 4.4 3 4.4h1.8v-2.6c0-1.9 1.6-3.5 3.5-3.5H15.4V4.8C15.4 2.8 14.5 2 12 2zm-2.8 3.2c.4 0 .7.3.7.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.9-.8z" fill="#3776AB"/>
    <path d="M12 22c3.15 0 5-.35 5-2.3v-2H12v-.8h6.9c2 0 3.1-1.3 3.1-4.7 0-3.4-1-4.4-3-4.4h-1.8v2.6c0 1.9-1.6 3.5-3.5 3.5H8.6v5.3c0 2 1 2.8 3.4 2.8zm2.8-3.2c.4 0 .8.3.8.8s-.4.8-.8.8c-.5 0-.8-.3-.8-.8 0-.5.3-.8.8-.8z" fill="#FFD43B"/>
  </svg>
);

const JavaLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.7 18c0 .2 0 .4.2.5s.4.2.8.2.9-.1 1.4-.2 1-.2 1.3-.2.6 0 .8.2c.1.2 0 .5-.3.8s-.7.6-1.3.8-1.2.3-1.8.3c-.7 0-1.2-.1-1.5-.4s-.4-.7-.4-1.2c0-.6.2-1.3.7-2.1s1.2-1.6 2-2.3c.9-.8 1.8-1.5 2.8-2.2l.6.6c-1 .8-1.9 1.6-2.8 2.6s-1.5 1.9-1.9 2.8c-.3.4-.6.8-.7 1.1zm8-11.8c.6.9.5 2.1-.2 3.6s-1.8 3-3.2 4.6c-1.4 1.6-3 3-4.6 4.3l-.6-.6c1.6-1.3 3.1-2.6 4.5-4.1s2.4-3 3.1-4.5.6-2.5 0-3l-.6.6c.3.2.4.6.1 1.1z" fill="#5382A1"/>
    <path d="M18.8 17.5c0 1-1.3 1.9-3.9 2.6s-5.6 1-9 1-6.4-.3-9-1c-1.4-.4-2.1-1.2-2.1-2.2 0-.8.4-1.5 1.3-2s2.1-.9 3.5-1.2c-.8.8-1.2 1.6-1.2 2.3 0 1.2 1.7 2.1 5.2 2.7s7.3.9 11.5.9 7-.3 8.3-.9 1.4-1.2 1.4-2.1c0-.7-.4-1.4-1.1-2.1 1.5.3 2.7.7 3.5 1.2s1.1 1.2 1.1 2.1z" fill="#E76F00"/>
  </svg>
);

const CLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c3.34 0 6.3-1.64 8.16-4.15l-3.32-1.9A6.16 6.16 0 0 1 12 17.8c-3.2 0-5.8-2.6-5.8-5.8S8.8 6.2 12 6.2c1.94 0 3.67.95 4.74 2.43l3.32-1.9C18.3 4.29 15.34 2 12 2z" fill="#3949AB"/>
  </svg>
);

const CPlusPlusLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M9.6 2C5.2 2 1.6 5.6 1.6 10s3.6 8 8 8c2.7 0 5-1.3 6.5-3.3l-2.7-1.5c-.9 1.2-2.3 2-3.8 2-2.6 0-4.6-2-4.6-4.6s2-4.6 4.6-4.6c1.5 0 2.9.8 3.8 2l2.7-1.5C14.6 3.3 12.3 2 9.6 2z" fill="#00599C"/>
    <path d="M19.2 8h-1.6V6.4h-1.6V8h-1.6v1.6h1.6v1.6h1.6V9.6h1.6V8zM24 12h-1.6v-1.6h-1.6V12h-1.6v1.6h1.6v1.6h1.6v-1.6H24V12z" fill="#659AD2"/>
  </svg>
);

const ReactLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <ellipse rx="11" ry="4.2" cx="12" cy="12" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(0 12 12)"/>
    <ellipse rx="11" ry="4.2" cx="12" cy="12" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
    <ellipse rx="11" ry="4.2" cx="12" cy="12" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
  </svg>
);

const Html5Logo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M2.8 2l1.6 18.2L12 22l7.6-1.8L21.2 2H2.8zm14.3 6.6H9.7l.2 2h7l-.6 6.3-4.3 1.2-4.3-1.2-.3-3.1h2l.1 1.5 2.5.7 2.5-.7.3-3H6.8l-.6-6.3h11.2l-.3 2.9z" fill="#E34F26"/>
  </svg>
);

const Css3Logo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M2.8 2l1.6 18.2L12 22l7.6-1.8L21.2 2H2.8zm14.3 6.6H8.2l.2 2h8.5l-.6 6.3-4.3 1.2-4.3-1.2-.3-3.1h2l.1 1.5 2.5.7 2.5-.7.3-3H6.4l-.6-6.3h11.6l-.3 2.9z" fill="#1572B6"/>
  </svg>
);

const JavaScriptLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" fill="#F7DF1E" rx="3" />
    <path d="M17.18 15.68c-.28-.43-.72-.73-1.34-.87-.4-.1-.85-.15-1.2-.18-.3-.02-.53-.06-.6-.1-.13-.08-.18-.2-.18-.37 0-.15.06-.27.2-.35.15-.09.38-.13.68-.13.3 0 .54.06.66.18s.22.36.3.69l1.8-.35c-.14-.65-.47-1.16-.96-1.47a2.6 2.6 0 0 0-1.63-.44c-.75 0-1.36.2-1.78.6s-.62.94-.62 1.57c0 .54.16.98.47 1.28.32.3.83.5 1.51.65.6.13 1 .23 1.23.3.36.12.53.33.53.63 0 .34-.23.57-.68.67-.3.07-.66.08-1.02.04-.47-.05-.8-.22-.98-.5-.14-.2-.25-.56-.3-.98l-1.82.35c.1 1 .47 1.7 1.07 2.1s1.42.6 2.45.6c.9 0 1.63-.23 2.14-.68s.77-1.07.77-1.85c.02-.7-.2-1.2-.64-1.63z" fill="#000000"/>
  </svg>
);

const ViteLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="viteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#41D1FF" />
        <stop offset="100%" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
    <path d="M12 2L2 22h20L12 2z" fill="url(#viteGrad)"/>
    <path d="M12 7.5L6.5 18h11L12 7.5z" fill="#FFC517"/>
  </svg>
);

const FastapiLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5v-3.5H8.7l3.5-6.5v3.5h1.5l-3.5 6.5z" fill="#009688"/>
  </svg>
);

const FlaskLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 19c-1.1 0-2-.9-2-2V9.8l.6-.7a1 1 0 0 0 .1-.7V4.5C17.7 3.1 16.6 2 15.2 2H8.8C7.4 2 6.3 3.1 6.3 4.5v1.9c0 .3 0 .5.1.7l.6.7V17c0 1.1-.9 2-2 2H4v2h16v-2h-1zM8.3 4.5c0-.3.2-.5.5-.5h6.4c.3 0 .5.2.5.5v1.5H8.3V4.5zm8 12.5H7.7v-6.7h8.6V17z" fill="#FFFFFF"/>
  </svg>
);

const RestApiLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="#00B4D8" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="#00B4D8" />
    <line x1="6" y1="6" x2="6.01" y2="6" stroke="#FFB703" strokeWidth="3" />
    <line x1="6" y1="18" x2="6.01" y2="18" stroke="#FFB703" strokeWidth="3" />
  </svg>
);

const GitLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3 11.5L12.5.7c-.4-.4-1-.4-1.4 0L9.4 2.4l3.3 3.3c.3-.1.6-.1.9.1.5.5.5 1.4 0 1.9s-1.4.5-1.9 0c-.2-.2-.2-.5-.1-.9L8.3 3.5l-6.8 6.8c-.4.4-.4 1 0 1.4L12.3 22.5c.4.4 1 .4 1.4 0l9.6-9.6c.4-.4.4-1 0-1.4z" fill="#F05032"/>
  </svg>
);

const GithubLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.1 24 17.6 24 12.3 24 5.7 18.6.3 12 .3z" fill="#FFFFFF"/>
  </svg>
);

const VscodeLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M23.984 6.802a.602.602 0 0 0-.21-.433L19.26.837a.6.6 0 0 0-.806.046l-8.566 8.568-3.413-2.617a.6.6 0 0 0-.756.028L.23 11.233a.602.602 0 0 0-.022.868L5.68 17.57a.6.6 0 0 0 .762.033l3.376-2.585 8.556 8.558a.602.602 0 0 0 .807.042l4.516-3.535a.602.602 0 0 0 .217-.433V7.07a.602.602 0 0 0-.03-.268zM18 12l-6.425-4.912 6.425-6.425V12zm-12 0l-4.425.588L6 11.412V12z" fill="#007ACC"/>
  </svg>
);

const PostmanLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 10.7c-.5-.9-1.3-1.6-2.2-2.1l-6.8-3.8c-1.1-.6-2.5-.6-3.6 0L3.3 8.6c-1 .5-1.7 1.3-2.2 2.1-.5.9-.6 2-.4 3.1.2 1 .8 2 1.6 2.7l6.8 5.6c.5.4 1.1.6 1.8.6s1.3-.2 1.8-.6l6.8-5.6c.8-.7 1.4-1.7 1.6-2.7.2-1.1 0-2.2-.4-3.1zm-10.7-5.3c.3-.2.7-.2 1 0l6.8 3.8c.3.2.5.5.5.8s-.2.7-.5.8l-6.8 3.8c-.3.2-.7.2-1 0L6.7 10.9c-.3-.2-.5-.5-.5-.8s.2-.7.5-.8l6.8-3.9zm-4.7 9.8L5.7 14c-.3-.2-.5-.5-.5-.8s.2-.7.5-.8l1.6-.9c.3-.2.7-.2 1 0l1.6.9c.3.2.5.5.5.8s-.2.7-.5.8l-1.6.9c-.3.2-.7.2-1 0zm9.4 0l-1.6-.9c-.3-.2-.5-.5-.5-.8s.2-.7.5-.8l1.6-.9c.3-.2.7-.2 1 0l1.6.9c.3.2.5.5.5.8s-.2.7-.5.8l-1.6.9c-.3.2-.7.2-1 0z" fill="#FF6C37" />
  </svg>
);

const GoogleColabLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.24 10.185c.677-.852 1.493-1.636 2.472-2.12a5.49 5.49 0 0 1 5.093.003c.983.486 1.796 1.272 2.471 2.125a12.39 12.39 0 0 0-2.471-2.125 5.49 5.49 0 0 0-5.093-.003 12.39 12.39 0 0 0-2.472 2.12z" fill="#F9AB00" />
    <path d="M11.76 13.815a12.39 12.39 0 0 0-2.472-2.12c-.675-.853-1.488-1.639-2.471-2.125a5.49 5.49 0 0 0-5.093.003C.74 10.06.01 10.96 0 12c0 1.04.73 1.94 1.724 2.43a5.49 5.49 0 0 0 5.093.003c.983-.486 1.796-1.272 2.471-2.125a12.39 12.39 0 0 0 5.093.003c.984.486 1.797 1.272 2.472 2.125a12.39 12.39 0 0 0-2.472-2.12 5.49 5.49 0 0 0-5.093-.003 12.39 12.39 0 0 0-2.472 2.12z" fill="#E8710A" />
  </svg>
);

const OpenaiLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7 10.7a6.2 6.2 0 0 0-3.6-4.6c.3-.9.3-1.9-.1-2.8-.7-1.5-2.2-2.3-3.8-2.1-.9.1-1.7.6-2.3 1.3a6.2 6.2 0 0 0-4.6 3.6c-.9-.3-1.9-.3-2.8.1-1.5.7-2.3 2.2-2.1 3.8.1.9.6 1.7 1.3 2.3a6.2 6.2 0 0 0 3.6 4.6c-.3.9-.3 1.9.1 2.8.7 1.5 2.2 2.3 3.8 2.1.9-.1 1.7-.6 2.3-1.3a6.2 6.2 0 0 0 4.6-3.6c.9.3 1.9.3 2.8-.1 1.5-.7 2.3-2.2 2.1-3.8-.1-.9-.6-1.7-1.3-2.3zm-10-8.2c1.1 0 2.2.8 2.4 1.9l-.1 1a5 5 0 0 0-4.4 2.5l-1.3-.7a3.8 3.8 0 0 1 3.4-4.7zm-6.2 4c.6-.9 1.6-1.5 2.7-1.4l.7 1a5 5 0 0 0-.1 5.1l-1 .1a3.8 3.8 0 0 1-2.3-4.8zm1.5 8.2c-.6-.9-.8-2-0.5-3l1-.1a5 5 0 0 0 4.3 2.6l-.1 1a3.8 3.8 0 0 1-4.7-.5zm9.5 5.5c-1.1 0-2.2-.8-2.4-1.9l.1-1a5 5 0 0 0 4.4-2.5l1.3.7a3.8 3.8 0 0 1-3.4 4.7zm6.2-4c-.6.9-1.6 1.5-2.7 1.4l-.7-1a5 5 0 0 0 .1-5.1l1-.1a3.8 3.8 0 0 1 2.3 4.8zm-1.5-8.2c.6.9.8 2 .5 3l-1 .1a5 5 0 0 0-4.3-2.6l.1-1a3.8 3.8 0 0 1 4.7.5zm-4.4 3.7a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0z" fill="#10A37F"/>
  </svg>
);

const GeminiLogo = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1A73E8" />
        <stop offset="50%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" fill="url(#geminiGrad)"/>
  </svg>
);

const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core Foundations',
    items: [
      { name: 'Python', icon: PythonLogo },
      { name: 'Java', icon: JavaLogo },
      { name: 'C', icon: CLogo },
      { name: 'C++', icon: CPlusPlusLogo },
    ],
    glowColor: 'rgba(124, 58, 237, 0.16)' // Purple
  },
  {
    title: 'Frontend Development',
    subtitle: 'UI & Interactive Interfaces',
    items: [
      { name: 'React', icon: ReactLogo },
      { name: 'HTML5', icon: Html5Logo },
      { name: 'CSS3', icon: Css3Logo },
      { name: 'JavaScript', icon: JavaScriptLogo },
      { name: 'Vite', icon: ViteLogo },
    ],
    glowColor: 'rgba(236, 72, 153, 0.16)' // Pink
  },
  {
    title: 'Backend Development',
    subtitle: 'Services & APIs',
    items: [
      { name: 'FastAPI', icon: FastapiLogo },
      { name: 'Flask', icon: FlaskLogo },
      { name: 'REST APIs', icon: RestApiLogo },
    ],
    glowColor: 'rgba(139, 92, 246, 0.16)' // Violet
  },
  {
    title: 'Developer Tools',
    subtitle: 'APIs, CLIs & Editors',
    items: [
      { name: 'Git', icon: GitLogo },
      { name: 'GitHub', icon: GithubLogo },
      { name: 'VS Code', icon: VscodeLogo },
      { name: 'Postman', icon: PostmanLogo },
      { name: 'Google Colab', icon: GoogleColabLogo },
      { name: 'OpenAI API', icon: OpenaiLogo },
      { name: 'Gemini API', icon: GeminiLogo },
    ],
    glowColor: 'rgba(244, 63, 94, 0.16)' // Rose
  }
];

function SkillCard({ category }: { category: SkillCategory }) {
  const { theme } = useTheme();

  // Bypassing React rendering cycles for mouse-follow movements by writing directly to CSS custom properties
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="portfolio-card relative p-[2px] rounded-[24px] select-none cursor-pointer h-full group bg-[rgba(255,255,255,0.08)] hover:bg-gradient-to-br hover:from-[#7C3AED] hover:to-[#EC4899] hover:active-gradient-border hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_35px_rgba(124,58,237,0.18)]"
      style={{
        willChange: "transform, box-shadow",
        backfaceVisibility: "hidden"
      }}
    >
      {/* Soft pink corner accent glow on hover (top right) */}
      <div 
        className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: "radial-gradient(120px circle at top right, rgba(236,72,153,0.12), transparent)"
        }}
      />

      {/* Centered Small Top Accent Line - Only visible on hover */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2.5px] bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-full shadow-[0_0_8px_#7C3AED] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Inner Card Container: Matches the requested dark glass backdrop exactly with NO background changes on active */}
      <div 
        className="relative rounded-[22.5px] backdrop-blur-2xl p-6 sm:p-8 h-full flex flex-col justify-between z-10 overflow-hidden transition-all duration-300 border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--card-hover-bg)]"
      >
        
        {/* Mouse Follow Glow Overlay - GPU rendered using CSS custom properties */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
          style={{
            background: theme === 'dark'
              ? `radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${category.glowColor}, transparent 80%)`
              : `radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(124, 58, 237, 0.04), transparent 80%)`
          }}
        />

        {/* Abstract floating particles inside card */}
        <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-300 ${theme === 'dark' ? 'opacity-30 group-hover:opacity-60' : 'opacity-[0.08] group-hover:opacity-[0.15]'}`}>
          <motion.div 
            animate={{
              y: [0, -12, 0],
              x: [0, 6, 0],
              opacity: [0.15, 0.45, 0.15]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-[25%] left-[35%] w-1.5 h-1.5 rounded-full blur-[0.5px] ${theme === 'dark' ? 'bg-violet-400' : 'bg-zinc-400'}`}
          />
          <motion.div 
            animate={{
              y: [0, 10, 0],
              x: [0, -8, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className={`absolute bottom-[35%] right-[25%] w-[2px] h-[2px] rounded-full blur-[0.5px] ${theme === 'dark' ? 'bg-pink-400' : 'bg-zinc-400'}`}
          />
          <motion.div 
            animate={{
              y: [0, -15, 0],
              x: [0, -6, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className={`absolute top-[65%] left-[20%] w-1.5 h-1.5 rounded-full blur-[0.5px] ${theme === 'dark' ? 'bg-indigo-400' : 'bg-zinc-400'}`}
          />
        </div>

        <div className="flex flex-col h-full justify-between gap-6">
          
          {/* Top Block: Category Details */}
          <div className="relative z-10">
            
            {/* Elegant Minimal Accent Bar + Title + Subtitle */}
            <div className="flex items-center gap-4.5">
              <div className="w-[4px] h-11 rounded-full bg-gradient-to-b from-violet-500 to-pink-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 leading-tight font-sans">{category.title}</h3>
                <p className="text-zinc-500 text-xs mt-1.5 uppercase tracking-wider font-semibold font-sans">{category.subtitle}</p>
              </div>
            </div>

          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10" />

          {/* Bottom Chips Container with Official Colored Icons */}
          <div className="flex flex-wrap gap-2.5 relative z-10 mt-auto">
            {category.items.map((tech, techIndex) => {
              const TechIcon = tech.icon;
              return (
                <motion.div
                  key={techIndex}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)] text-[var(--tag-text)] hover:bg-[var(--tag-hover-bg)] hover:text-[var(--tag-hover-text)] hover:border-[var(--tag-hover-border)] hover:shadow-[var(--tag-hover-shadow)] text-xs font-semibold select-none cursor-default transition-all duration-300 font-sans"
                >
                  <TechIcon 
                    className="w-3.5 h-3.5 filter saturate-[1.1]" 
                  />
                  <span>{tech.name}</span>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionContainer id="skills">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-violet-600/5 to-pink-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--purple)] font-sans">MY SKILLS</h2>
          <p className="mt-2 text-3xl font-bold text-zinc-100 sm:text-4xl font-sans tracking-tight">Technologies I Work With</p>
          <div className="section-underline"></div>
        </div>

        {/* 2x2 Grid Layout - Equal heights, spacious gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillsData.map((category, catIndex) => (
            <SkillCard 
              key={catIndex} 
              category={category} 
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
