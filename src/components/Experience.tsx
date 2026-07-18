import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';

interface InternshipDetails {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

const internshipData: InternshipDetails = {
  role: 'Full Stack Development Intern',
  company: 'VDart Academy',
  duration: 'June 2025 - July 2025',
  points: [
    'Developed full-stack web application components using React and FastAPI following industry practices.',
    'Integrated REST APIs with backend services and structured relational databases for scalable data access.',
    'Applied agile workflows, code reviews, and collaborative development practices with mentors.'
  ]
};

export default function Experience() {
  return (
    <SectionContainer id="experience">
      {/* Section Header */}
      <div className="mb-10 text-left">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--purple)]">Professional Path</h2>
        <p className="mt-2 text-3xl font-bold text-zinc-100 sm:text-4xl tracking-tight">Internship Experience</p>
        <div className="section-underline"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full">
          
          {/* Vertical Path Line */}
          <div 
            className="absolute left-4 top-2 bottom-2 w-0.5 transition-all duration-300"
            style={{
              background: 'var(--timeline-line)',
              opacity: 'var(--timeline-line-opacity)'
            }}
          ></div>

          {/* Timeline Node */}
          <div className="relative pl-12 pb-4">
            
            {/* Timeline Node Icon Pin */}
            <div className="absolute left-0 top-1.5 w-8.5 h-8.5 rounded-full bg-zinc-950 border-2 border-violet-500 flex items-center justify-center text-violet-500 shadow-md shadow-violet-500/20 z-10">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Internship Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
              className="glass-panel portfolio-card rounded-2xl p-6 sm:p-8 border border-zinc-800 shadow-lg relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none"></div>

              {/* Role & Duration Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-800 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 tracking-wide">{internshipData.role}</h3>
                  <p className="text-gradient font-bold text-base mt-1">{internshipData.company}</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--date-bg)] border border-[var(--date-border)] text-xs font-bold text-[var(--date-text)] transition-colors duration-300 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-[var(--date-text)]" />
                  {internshipData.duration}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
                {internshipData.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          </div>

        </div>

    </SectionContainer>
  );
}
