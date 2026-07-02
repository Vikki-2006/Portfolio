import { ShieldCheck } from 'lucide-react';
import { SiMeta, SiGooglecloud, SiPostman } from 'react-icons/si';
import { motion } from 'framer-motion';

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
}

const certificationsData: Certification[] = [
  {
    title: 'Getting Started with AI',
    issuer: 'IBM SkillsBuild',
    logo: IbmIcon,
    desc: 'Foundational concepts of artificial intelligence, neural networks, and NLP modeling.',
    themeColor: 'from-[#0f62fe]/10 to-[#0043ce]/10'
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    logo: SiMeta,
    desc: 'Advanced JavaScript topics including OOP, functional programming, DOM APIs, and unit testing.',
    themeColor: 'from-[#0668e1]/10 to-[#023c89]/10'
  },
  {
    title: 'Databases and SQL for Data Science',
    issuer: 'IBM',
    logo: IbmIcon,
    desc: 'Relational database architecture, advanced SQL queries, multi-table joins, and Python connectivity.',
    themeColor: 'from-[#0f62fe]/10 to-[#0043ce]/10'
  },
  {
    title: 'Cloud Computing Fundamentals',
    issuer: 'Google Cloud',
    logo: SiGooglecloud,
    desc: 'Core Google Cloud concepts, compute services, container orchestration, and serverless deployment models.',
    themeColor: 'from-[#34a853]/10 to-[#4285f4]/10'
  },
  {
    title: 'API Student Expert',
    issuer: 'Postman',
    logo: SiPostman,
    desc: 'Design, execution, automation, and validation of RESTful API request chains and workflows.',
    themeColor: 'from-[#ff6c37]/10 to-[#ff4500]/10'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-400">Credentials</h2>
          <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">Industry Certifications</p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-red-500 rounded-full mt-4"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const Icon = cert.logo;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel rounded-2xl p-6 border border-zinc-900 shadow-md relative overflow-hidden group hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Brand specific background hover accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.themeColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div>
                  {/* Card Header: Issuer Logo & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">{cert.issuer}</span>
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/20 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-violet-400 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                {/* Verification Badge */}
                <div className="mt-6 border-t border-zinc-900/80 pt-4 flex items-center gap-2 text-zinc-500 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 text-violet-500" />
                  <span>Verified Certification Credentials</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
