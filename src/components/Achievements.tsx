import { Trophy, Code2, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface Achievement {
  id: string;
  title: string;
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  bullets: string[];
}

const achievementsData: Achievement[] = [
  {
    id: 'lc',
    title: 'LeetCode Problem Solving',
    platform: 'LeetCode',
    icon: Code2,
    bullets: [
      'Solved 150+ coding problems focusing on key algorithmic structures.',
      'Developed strong skills in Dynamic Programming, Graph Traversal Algorithms, Tree Structures, Backtracking, and Binary Search.'
    ]
  },
  {
    id: 'cc',
    title: 'Competitive Contest Records',
    platform: 'CodeChef',
    icon: Award,
    bullets: [
      'Attained a high DSA Skill Rating of 1702.',
      'Achieved an official Contest Rating of 1453 (Division 3).',
      'Earned 2★ Rating classification and passed the Python Skill Test at 2★.'
    ]
  },
  {
    id: 'hr',
    title: 'Language Skill Stars',
    platform: 'HackerRank',
    icon: Sparkles,
    bullets: [
      'Earned 5★ Gold Badge in Python.',
      'Achieved 4★ Silver Badge in C++.',
      'Secured 4★ Badge in general Problem Solving and 2★ Badge in C.'
    ]
  },
  {
    id: 'ha',
    title: 'TEXPERIA Hackathon Recognition',
    platform: 'SNS College of Technology',
    icon: Trophy,
    bullets: [
      'Won appreciation and formal recognition for technical projects at the TEXPERIA 2026 Hackathon.',
      'Developed and pitch-demonstrated solutions alongside dynamic team structures.'
    ]
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-400">Milestones</h2>
          <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">Achievements & Competitive Records</p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-red-500 rounded-full mt-4"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-900 shadow-md relative overflow-hidden group hover:border-zinc-800 transition-all duration-300"
              >
                {/* Background soft color glow */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-violet-600/10"></div>
                
                <div className="flex items-start gap-4">
                  {/* Platform Icon */}
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-500 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-red-500 group-hover:border-transparent transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-4 flex-grow">
                    <div>
                      {/* Platform label */}
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{item.platform}</span>
                      {/* Achievement title */}
                      <h3 className="text-lg font-bold text-white tracking-wide mt-1 group-hover:text-violet-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description bullet points */}
                    <ul className="space-y-3 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-900 pt-4">
                      {item.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
