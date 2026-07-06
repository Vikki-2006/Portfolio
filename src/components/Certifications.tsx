import { ShieldCheck, Award, Trophy } from 'lucide-react';
import { SiMeta } from 'react-icons/si';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';

const IbmIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4.5h24v1.5H0V4.5zm0 3h24v1.5H0V7.5zm0 3h24v1.5H0v-1.5zm0 3h24v1.5H0v-1.5zm0 3h24v1.5H0v-1.5zm0 3h24v1.5H0v-1.5z"/>
  </svg>
);

interface Certification {
  title: string;
  issuer: string;
  logo: any;
  desc: string;
  themeColor: string;
  link: string;
}

const certificationsData: Certification[] = [
  {
    title: 'Getting Started with AI',
    issuer: 'IBM SkillsBuild',
    logo: IbmIcon,
    desc: 'Foundational concepts of artificial intelligence, neural networks, and NLP modeling.',
    themeColor: 'from-[#0f62fe]/10 to-[#0043ce]/10',
    link: 'https://www.credly.com/badges/18d862e7-b507-4e3b-95e5-3ff872a434b7'
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    logo: SiMeta,
    desc: 'Advanced JavaScript topics including OOP, functional programming, DOM APIs, and unit testing.',
    themeColor: 'from-[#0668e1]/10 to-[#023c89]/10',
    link: 'https://www.coursera.org/account/accomplishments/verify/FCNRW76QPA67'
  },
  {
    title: 'Databases and SQL for Data Science',
    issuer: 'IBM',
    logo: IbmIcon,
    desc: 'Relational database architecture, advanced SQL queries, multi-table joins, and Python connectivity.',
    themeColor: 'from-[#0f62fe]/10 to-[#0043ce]/10',
    link: 'https://www.coursera.org/account/accomplishments/verify/3C6RXIS1ARK7'
  },
  {
    title: 'Artificial Intelligence for All',
    issuer: 'Infosys Springboard',
    logo: Award,
    desc: 'Comprehensive study of AI technologies, ethics, impact, and modern cognitive machine learning frameworks.',
    themeColor: 'from-[#007cc3]/10 to-[#005a9c]/10',
    link: 'https://verify.onwingspan.com/'
  },
  {
    title: 'Full Stack Development Internship Certificate',
    issuer: 'VDart Academy',
    logo: Trophy,
    desc: 'Practical software engineering training in frontend components, databases, server integration, and team delivery.',
    themeColor: 'from-[#0a4a83]/10 to-[#06335c]/10',
    link: 'https://drive.google.com/file/d/1VHepRoEKIQGfNJqYfqhgi9gp0Xt5H2B_/view'
  }
];

export default function Certifications() {
  return (
    <SectionContainer id="certifications">
      {/* Section Header */}
      <div className="mb-10 text-left">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--purple)]">Credentials</h2>
        <p className="mt-2 text-3xl font-bold text-zinc-100 sm:text-4xl tracking-tight">Industry Certifications</p>
        <div className="section-underline"></div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const Icon = cert.logo;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel portfolio-card rounded-2xl p-6 border border-zinc-800 shadow-md relative overflow-hidden group hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Brand specific background hover accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.themeColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div>
                  {/* Card Header: Issuer Logo & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">{cert.issuer}</span>
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-red-500 group-hover:border-transparent transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-base sm:text-lg font-bold text-zinc-100 tracking-wide group-hover:text-[var(--purple)] transition-colors">
                    {cert.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                    {cert.desc}
                  </p>
                </div>

                {/* Verification Footer with View Button */}
                <div className="mt-6 border-t border-zinc-800/80 pt-4 flex items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-violet-500" />
                    <span>Verified</span>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold text-[var(--purple)] hover:text-[var(--pink)] hover:underline transition-colors"
                  >
                    View Certificate →
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>
    </SectionContainer>
  );
}
