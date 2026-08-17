import { memo } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';

// Real project first-page screenshots
import smartParkingImg from '../assets/projects/smart-parking.webp';
import doccraftImg from '../assets/projects/doccraft.webp';
import atscopeImg from '../assets/projects/atscope.webp';
import shieldblockImg from '../assets/projects/shieldblock.webp';
import compresslyImg from '../assets/projects/compressly.webp';
import vexoCommerceImg from '../assets/projects/vexo-commerce.webp';

/* ─────────────────────────────────────────────────────────────────────────
   GitHub Icon
──────────────────────────────────────────────────────────────────────────── */
const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────────────────
   Project data
──────────────────────────────────────────────────────────────────────────── */
const projectsData = [
  {
    id: '01',
    title: 'Smart Parking System',
    category: 'FULL STACK • IoT',
    accentFrom: '#7C3AED',
    accentTo: '#4F46E5',
    image: smartParkingImg,
    description:
      'Intelligent web-based smart parking platform for automated slot allocation, QR-based vehicle management, real-time parking monitoring, and admin dashboard.',
    features: [
      'Automated slot allocation with real-time availability',
      'QR-code based vehicle entry & exit management',
      'Admin dashboard with live monitoring & analytics',
    ],
    tags: ['Python', 'Flask', 'PostgreSQL', 'Neon', 'JavaScript', 'QR Code'],
    githubUrl: 'https://github.com/Vikki-2006/smart-parking-system',
    demoUrl: 'https://smartpark-control.vercel.app',
  },
  {
    id: '02',
    title: 'DocCraft',
    category: 'PDF TOOLKIT',
    accentFrom: '#EC4899',
    accentTo: '#8B5CF6',
    image: doccraftImg,
    description:
      'Modern PDF toolkit for merging, splitting, converting, rotating, and watermarking PDFs with a polished desktop workstation interface.',
    features: [
      'Merge, split, rotate & watermark PDFs',
      'Desktop workstation CustomTkinter UI',
      'Web companion with PDF live preview',
    ],
    tags: ['Python', 'CustomTkinter', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Vikki-2006/Doc-craft',
    demoUrl: 'https://doccraft-tool.vercel.app',
  },
  {
    id: '03',
    title: 'ATScope',
    category: 'AI SAAS PLATFORM',
    accentFrom: '#06B6D4',
    accentTo: '#7C3AED',
    image: atscopeImg,
    description:
      'Production-grade AI Resume Analyzer and ATS Optimization SaaS platform with resume scoring, keyword analysis, and actionable optimization insights.',
    features: [
      'AI-powered ATS scoring & keyword analysis',
      'Optimization insights with recommendations',
      'Modern SaaS UI — Tailwind CSS & Alpine.js',
    ],
    tags: ['FastAPI', 'spaCy', 'scikit-learn', 'Chart.js', 'Alpine.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Vikki-2006/ATScope',
    demoUrl: 'https://atscope-analyzer.vercel.app',
  },
  {
    id: '04',
    title: 'ShieldBlock Pro',
    category: 'BROWSER EXTENSION',
    accentFrom: '#10B981',
    accentTo: '#059669',
    image: shieldblockImg,
    description:
      'Modern Chrome/Brave ad-blocking extension built with Manifest V3, focused on blocking unwanted content and providing a clean browsing experience.',
    features: [
      'Manifest V3 compliant ad & tracker blocking',
      'Lightweight with minimal overhead & live stats',
      'Chrome & Brave compatible dashboard UI',
    ],
    tags: ['JavaScript', 'CSS', 'HTML', 'Manifest V3'],
    githubUrl: 'https://github.com/Vikki-2006/ShieldBlock-Pro',
    demoUrl: null,
  },
  {
    id: '05',
    title: 'Compressly',
    category: 'VIDEO PLATFORM',
    accentFrom: '#F59E0B',
    accentTo: '#EF4444',
    image: compresslyImg,
    description:
      'Modern video compression platform with local processing, FFmpeg integration, real-time progress tracking, and a premium React interface.',
    features: [
      'Video compression via local FFmpeg engine',
      'Real-time progress tracking with live feedback',
      'Premium React UI with Docker containerization',
    ],
    tags: ['FastAPI', 'React', 'FFmpeg', 'SQLite', 'Docker', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Vikki-2006/Compressly',
    demoUrl: 'https://compressly-tool.vercel.app',
  },
  {
    id: '06',
    title: 'VEXO-Commerce',
    category: 'E-COMMERCE PLATFORM',
    accentFrom: '#8B5CF6',
    accentTo: '#EC4899',
    image: vexoCommerceImg,
    description:
      'Production-ready full-stack e-commerce platform featuring JWT authentication, user accounts, product catalog, categories, wishlist, and modern responsive UI.',
    features: [
      'JWT authentication & secure user accounts',
      'Product catalog with categories, search & wishlist',
      'Full CRUD with PostgreSQL + SQLAlchemy ORM',
    ],
    tags: ['FastAPI', 'Jinja2', 'PostgreSQL', 'SQLAlchemy', 'Python'],
    githubUrl: 'https://github.com/Vikki-2006/VEXO-Commerce',
    demoUrl: 'https://vexo-commerce.vercel.app',
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   ProjectCard — Uniform 3x2 Grid Card
──────────────────────────────────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const hasDemo = Boolean(project.demoUrl);

  const thumbnailContent = (
    <>
      {/* Actual Project First Page Screenshot */}
      <div className="proj-thumb-scale w-full h-full">
        <img
          src={project.image}
          alt={`${project.title} live demo preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top select-none pointer-events-none"
        />
      </div>

      {/* Hover overlay with centered "View Project" (only for projects with live demo) */}
      {hasDemo && (
        <div className="proj-thumb-veil">
          <div className="proj-view-label flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold select-none">
            <span>View Project</span>
          </div>
        </div>
      )}

      {/* Project Number badge in top-left */}
      <span
        className="proj-num-badge absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono"
        style={{
          background: 'rgba(8,6,14,0.85)',
          border: `1px solid ${project.accentFrom}44`,
          color: project.accentFrom,
          backdropFilter: 'blur(6px)',
        }}
      >
        {project.id}
      </span>

      {/* Accent top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none z-20"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentFrom}80, ${project.accentTo}80, transparent)`,
        }}
      />
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="proj-card rounded-2xl overflow-hidden flex flex-col relative group h-full"
      aria-label={`Project: ${project.title}`}
      style={{
        background: 'rgba(12,10,18,0.75)',
        border: '1px solid rgba(255,255,255,0.065)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      {/* ── 1. Thumbnail (Strict 16:9 Aspect Ratio) ────────────────────────── */}
      {hasDemo ? (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Open ${project.title} live demo`}
          className="proj-thumb-wrap relative block w-full overflow-hidden flex-shrink-0 aspect-video bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          {thumbnailContent}
        </a>
      ) : (
        <div
          className="proj-thumb-wrap relative block w-full overflow-hidden flex-shrink-0 aspect-video bg-zinc-900"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          {thumbnailContent}
        </div>
      )}

      {/* ── 2. Card Body ──────────────────────────────────────────────────── */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        {/* Upper Content Area */}
        <div className="flex flex-col">
          {/* Category */}
          <span
            className="text-[10px] font-bold uppercase tracking-wider mb-1.5 block"
            style={{ color: project.accentFrom }}
          >
            {project.id} • {project.category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-zinc-100 leading-snug mb-2 proj-title">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-zinc-400 leading-relaxed mb-3 min-h-[3rem]">
            {project.description}
          </p>

          {/* 3 Key Features */}
          <ul
            className="space-y-1.5 border-t pt-3 mb-4 min-h-[4.5rem]"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            {project.features.map((feat, fi) => (
              <li key={fi} className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: project.accentFrom }}
                  aria-hidden="true"
                />
                <span className="text-[11px] text-zinc-300 leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lower Content Area (Tech Badges + Bottom Action Buttons) */}
        <div className="flex flex-col mt-auto pt-2">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-4 min-h-[2.25rem] items-center">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[9px] font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(212,212,216,0.85)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Actions — Aligned at bottom */}
          <div className={`grid gap-2.5 ${project.demoUrl ? 'grid-cols-2' : 'grid-cols-1'}`}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              id={`proj-gh-${project.id}`}
              className="proj-btn-secondary flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Codebase</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                id={`proj-demo-${project.id}`}
                className="proj-btn-primary flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold"
              >
                <ExternalLink className="w-3.5 h-3.5 proj-demo-icon" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card glow overlay */}
      <div
        className="proj-card-glow absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: `0 0 0 0 ${project.accentFrom}00` }}
      />
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Projects Section Container
──────────────────────────────────────────────────────────────────────────── */
const Projects = memo(function Projects() {
  return (
    <SectionContainer id="projects">
      {/* Section header */}
      <motion.div
        className="mb-12 text-left"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--purple)]">My Creations</h2>
        <p className="mt-2.5 text-3xl font-bold text-zinc-100 sm:text-4xl tracking-tight">Featured Projects</p>
        <div className="section-underline" />
      </motion.div>

      {/* Clean 3x2 Grid — All 6 Cards Exactly Identical */}
      <div className="proj-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
});

export default Projects;
