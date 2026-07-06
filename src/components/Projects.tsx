import { ExternalLink, Trash2, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

interface Project {
  id: string;
  title: string;
  category: string;
  description: string[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string; // If undefined or empty, demo button will be disabled
  placeholderType: 'iot' | 'kanban' | 'portfolio';
}

const projectsData: Project[] = [
  {
    id: '01',
    title: 'Smart Waste Collection System Using IoT and AI',
    category: 'IoT & Full Stack Development',
    description: [
      'Engineered an IoT system using ESP8266 and ultrasonic sensors to monitor bin fill levels and stream real-time data to Firebase.',
      'Built a Flask backend with dashboard visualization for live monitoring, alert triggering, and cloud-based data management.',
      'Integrated AI-driven route optimization using Google Maps API to reduce collection trips and improve operational efficiency.'
    ],
    tags: ['Python', 'Flask', 'Firebase', 'ESP8266', 'HC-SR04', 'Google Maps API'],
    githubUrl: 'https://github.com/Vikki-2006/smart-waste-system',
    placeholderType: 'iot'
  },
  {
    id: '02',
    title: 'Task Management System',
    category: 'Full Stack Web Application',
    description: [
      'Built a full-stack task management app with JWT authentication, CRUD operations, and status tracking.',
      'Designed a normalized PostgreSQL schema with foreign key constraints ensuring strict multi-user data isolation.',
      'Implemented protected routes on both React frontend and FastAPI backend for secure, role-based access control.'
    ],
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT'],
    githubUrl: 'https://github.com/Vikki-2006',
    placeholderType: 'kanban'
  },
  {
    id: '03',
    title: 'Premium Developer Portfolio',
    category: 'PERSONAL PORTFOLIO',
    description: [
      'Designed and developed a modern, responsive portfolio using React, TypeScript, and Tailwind CSS.',
      'Implemented premium glassmorphism UI, smooth Framer Motion animations, and interactive components.',
      'Optimized for performance, accessibility, SEO, and responsive layouts across all devices.',
      'Showcases projects, skills, achievements, certifications, and contact information in a professional way.'
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/Vikki-2006',
    demoUrl: 'https://vigneshwaran2006.vercel.app/',
    placeholderType: 'portfolio'
  }
];

// Modern CSS/SVG Mockup placeholders instead of AI illustrations or empty grids
function ProjectScreenshotPlaceholder({ type }: { type: 'iot' | 'kanban' | 'portfolio' }) {
  if (type === 'iot') {
    return (
      <div className="w-full h-48 bg-gradient-to-b from-[#13131A] to-[#0A0A0E] border-b border-zinc-900 flex items-center justify-center relative overflow-hidden group-hover:border-zinc-800 transition-all select-none">
        {/* Radar concentric circles */}
        <div className="absolute w-40 h-40 rounded-full border border-violet-500/10 flex items-center justify-center">
          <div className="absolute w-28 h-28 rounded-full border border-violet-500/10 flex items-center justify-center">
            <div className="absolute w-16 h-16 rounded-full border border-violet-500/20 flex items-center justify-center"></div>
          </div>
        </div>
        {/* Animated sensor sweep bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-violet-600/0 w-1/2 -skew-x-12 animate-pulse"></div>
        
        {/* Center UI representation */}
        <div className="relative z-10 flex flex-col items-center gap-2.5">
          <div className="w-14 h-14 rounded-full bg-zinc-900 border border-violet-500/30 flex items-center justify-center shadow-lg shadow-violet-500/5">
            <Trash2 className="w-6 h-6 text-violet-400" />
          </div>
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 font-semibold">Sensor Monitor Widget</span>
        </div>
      </div>
    );
  }

  if (type === 'kanban') {
    return (
      <div className="w-full h-48 bg-gradient-to-b from-[#13131A] to-[#0A0A0E] border-b border-zinc-900 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-zinc-800 transition-all select-none">
        
        {/* Simple Kanban Column headers */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="h-6 rounded bg-zinc-900 border border-zinc-800/80 flex items-center justify-between px-2 text-[9px] font-mono text-zinc-500">
            <span>TODO</span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 flex items-center justify-center text-[7px] text-zinc-400">2</span>
          </div>
          <div className="h-6 rounded bg-zinc-900 border border-zinc-800/80 flex items-center justify-between px-2 text-[9px] font-mono text-violet-400">
            <span>IN PROGRESS</span>
            <span className="w-2.5 h-2.5 rounded-full bg-violet-950/60 border border-violet-800/40 flex items-center justify-center text-[7px] text-violet-400">1</span>
          </div>
          <div className="h-6 rounded bg-zinc-900 border border-zinc-800/80 flex items-center justify-between px-2 text-[9px] font-mono text-emerald-400">
            <span>DONE</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-[7px] text-emerald-400">4</span>
          </div>
        </div>

        {/* Floating cards */}
        <div className="grid grid-cols-3 gap-2.5 items-start mt-2 flex-grow">
          <div className="space-y-1.5">
            <div className="h-10 rounded bg-zinc-900/60 border border-zinc-800/50 p-1.5 flex flex-col justify-between">
              <div className="h-1 w-2/3 bg-zinc-700 rounded"></div>
              <div className="h-1 w-1/2 bg-zinc-800 rounded"></div>
            </div>
            <div className="h-10 rounded bg-zinc-900/60 border border-zinc-800/50 p-1.5 flex flex-col justify-between">
              <div className="h-1 w-3/4 bg-zinc-700 rounded"></div>
              <div className="h-1 w-1/3 bg-zinc-800 rounded"></div>
            </div>
          </div>
          <div>
            <div className="h-12 rounded bg-zinc-900/80 border border-violet-500/10 p-1.5 flex flex-col justify-between relative shadow-md shadow-violet-500/5">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-violet-500 rounded-bl-sm"></div>
              <div className="h-1 w-4/5 bg-violet-400/55 rounded"></div>
              <div className="h-1 w-1/2 bg-zinc-700 rounded"></div>
              <div className="flex gap-1">
                <span className="px-1 py-0.5 rounded bg-violet-950/80 text-[6px] font-semibold text-violet-400">API</span>
                <span className="px-1 py-0.5 rounded bg-zinc-800 text-[6px] font-semibold text-zinc-500">JWT</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-10 rounded bg-zinc-900/60 border border-zinc-800/50 p-1.5 flex flex-col justify-between opacity-60">
              <div className="h-1 w-2/3 bg-zinc-700 rounded"></div>
              <div className="h-1 w-1/2 bg-zinc-800 rounded"></div>
            </div>
          </div>
        </div>

        {/* Center UI Layout Overlay Label */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 shadow-lg">
          <LayoutGrid className="w-3.5 h-3.5 text-violet-500" />
          <span>Task Board UI</span>
        </div>

      </div>
    );
  }

  // Portfolio type browser mockup
  return (
    <div className="w-full h-48 bg-gradient-to-b from-[#13131A] to-[#0A0A0E] border-b border-zinc-900 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-zinc-800 transition-all select-none">
      {/* Browser Header Bar */}
      <div className="flex items-center gap-1.5 border-b border-zinc-900/50 pb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/60"></div>
        <div className="h-4 rounded bg-zinc-900/80 border border-zinc-800/40 text-[7px] text-zinc-500 font-mono flex items-center px-3 ml-2 w-1/2">
          localhost:5173
        </div>
      </div>
      
      {/* Hero Mockup Visual */}
      <div className="flex items-center justify-between gap-4 mt-3 flex-grow">
        <div className="space-y-1.5 flex-grow">
          <div className="h-2 w-3/4 bg-violet-400/40 rounded"></div>
          <div className="h-1.5 w-11/12 bg-zinc-700 rounded"></div>
          <div className="h-1.5 w-5/6 bg-zinc-800 rounded"></div>
          <div className="flex gap-1.5 mt-2">
            <div className="h-3.5 w-10 bg-violet-600/80 rounded-sm"></div>
            <div className="h-3.5 w-10 bg-zinc-900 border border-zinc-800 rounded-sm"></div>
          </div>
        </div>
        {/* Circle profile image mockup */}
        <div className="w-14 h-14 rounded-full border border-violet-500/20 bg-zinc-900/60 flex items-center justify-center relative flex-shrink-0">
          <div className="w-10 h-10 rounded-full border border-pink-500/20 bg-zinc-800/60"></div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <SectionContainer id="projects">
      {/* Section Header */}
      <div className="mb-10 text-left">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--purple)]">My Creations</h2>
        <p className="mt-2 text-3xl font-bold text-zinc-100 sm:text-4xl tracking-tight">Featured Projects</p>
        <div className="section-underline"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel portfolio-card rounded-2xl overflow-hidden border border-zinc-800 flex flex-col justify-between shadow-lg relative group transition-all"
            >
              
              <div>
                {/* Mockup Placeholder screenshot */}
                <ProjectScreenshotPlaceholder type={project.placeholderType} />

                <div className="p-6">
                  {/* Category Title */}
                  <span className="text-[10px] font-bold text-violet-500 uppercase tracking-widest block mb-2">{project.category}</span>
                  
                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-zinc-100 leading-snug group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Bullet points description */}
                  <ul className="mt-4 space-y-2 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/80 pt-4 font-medium">
                    {project.description.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-1.5 flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags & Action Buttons */}
              <div className="p-6 pt-0 mt-auto">
                
                {/* Technology chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[10px] font-bold text-[var(--tag-text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="grid grid-cols-2 gap-3.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-btn-secondary w-full py-2.5 text-xs"
                  >
                    <GithubIcon className="w-4.5 h-4.5" />
                    Codebase
                  </a>
                  
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-btn-primary w-full py-2.5 text-xs"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="portfolio-btn-secondary w-full py-2.5 text-xs opacity-50 cursor-not-allowed select-none"
                      title="Live deployment is not active"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </div>
    </SectionContainer>
  );
}
