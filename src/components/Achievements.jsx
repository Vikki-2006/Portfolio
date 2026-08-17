import { memo } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';

const achievementsData = [
  {
    id: 'lc',
    title: 'LeetCode Problem Solving',
    platform: 'LeetCode',
    icon: '/logos/leetcode.png',
    bullets: [
      'Solved 300+ algorithmic and data structure problems.',
      'Strong proficiency in Data Structures, Algorithms, Dynamic Programming, Graphs, Trees, Binary Search, and Backtracking.',
      'Consistently improve problem-solving skills through competitive programming and daily practice.'
    ],
    link: 'https://leetcode.com/u/Vikki-2006/',
    logoHoverStyles: 'group-hover:scale-[1.05] group-hover:bg-[#FFA116]/10 group-hover:border-[#FFA116]/20 group-hover:shadow-[0_0_12px_rgba(255,161,22,0.3)]'
  },
  {
    id: 'cc',
    title: 'CodeChef Competitive Programming',
    platform: 'CodeChef',
    icon: '/logos/codechef.png',
    bullets: [
      'CodeChef Rating: 1948 (Division 2)',
      '4-Star CodeChef programmer',
      'Active competitive programmer focused on Data Structures, Algorithms, and problem solving.'
    ],
    link: 'https://www.codechef.com/users/vikki2006',
    logoHoverStyles: 'group-hover:scale-[1.05] group-hover:bg-[#D48D3B]/10 group-hover:border-[#D48D3B]/20 group-hover:shadow-[0_0_12px_rgba(212,141,59,0.3)]'
  },
  {
    id: 'hr',
    title: 'Language Skill Stars',
    platform: 'HackerRank',
    icon: '/logos/hackerrank.png',
    bullets: [
      'Earned 5-Star Gold badges in Problem Solving, Python, SQL, Java, and C++.',
      'Earned 4-Star badges in C and React.',
      'Demonstrates strong problem-solving and programming skills across multiple languages.'
    ],
    link: 'https://www.hackerrank.com/profile/Vikki_2006',
    logoHoverStyles: 'group-hover:scale-[1.05] group-hover:bg-[#2EC866]/10 group-hover:border-[#2EC866]/20 group-hover:shadow-[0_0_12px_rgba(46,200,102,0.3)]'
  },
  {
    id: 'gfg',
    title: 'GeeksforGeeks Coding Profile',
    platform: 'GeeksforGeeks',
    icon: '/logos/geeksforgeeks.png',
    bullets: [
      'Competitive programming and problem-solving profile featuring coding practice, data structures, algorithms, and programming challenges.',
      'Active practice in core computer science fundamentals and algorithmic problem solving.'
    ],
    link: 'https://www.geeksforgeeks.org/profile/vigneshwarandev',
    logoHoverStyles: 'group-hover:scale-[1.05] group-hover:bg-[#2F8D46]/10 group-hover:border-[#2F8D46]/20 group-hover:shadow-[0_0_12px_rgba(47,141,70,0.3)]'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Achievements = memo(function Achievements() {
  return (
    <SectionContainer id="achievements">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="mb-10 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--purple)]">Milestones</h2>
          <p className="mt-2 text-3xl font-bold text-zinc-100 sm:text-4xl tracking-tight">Coding Achievements</p>
          <div className="section-underline"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="glass-panel portfolio-card rounded-2xl p-4.5 sm:p-5 border border-zinc-800 shadow-md relative overflow-hidden group hover:border-zinc-800 transition-all duration-300 flex flex-col justify-start h-full"
              >
              {/* Background soft color glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-violet-600/10"></div>
              
              <div className="flex items-start gap-4 relative z-10 h-full w-full">
                {/* Platform Icon Container */}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-300 flex-shrink-0 cursor-pointer flex items-center justify-center ${item.logoHoverStyles || 'group-hover:scale-[1.05]'}`}
                  >
                    {typeof Icon === 'string' ? (
                      <img 
                        src={Icon} 
                        alt={`${item.platform} Logo`} 
                        loading="lazy"
                        decoding="async"
                        className="w-[26px] h-[26px] object-contain select-none" 
                      />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </a>
                ) : (
                  <div className={`w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-300 flex-shrink-0 flex items-center justify-center ${item.logoHoverStyles || 'group-hover:scale-[1.05]'}`}>
                    {typeof Icon === 'string' ? (
                      <img 
                        src={Icon} 
                        alt={`${item.platform} Logo`} 
                        loading="lazy"
                        decoding="async"
                        className="w-[26px] h-[26px] object-contain select-none" 
                      />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                )}

                <div className="flex-grow flex flex-col justify-between h-full">
                  <div>
                    {/* Platform label */}
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">{item.platform}</span>
                    {/* Achievement title */}
                    {item.link ? (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[17px] font-bold text-zinc-100 tracking-wide mt-0.5 group-hover:text-[var(--purple)] transition-colors hover:underline block"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <h3 className="text-[17px] font-bold text-zinc-100 tracking-wide mt-0.5 block">
                        {item.title}
                      </h3>
                    )}
                  </div>

                  {/* Description bullet points */}
                  <ul className="space-y-1.5 text-zinc-300 text-xs sm:text-[13px] leading-relaxed border-t border-zinc-800 pt-2.5 mt-2.5 font-medium">
                    {item.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* View Profile Button at the bottom */}
                  {item.link && (
                    <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-end">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[var(--purple)] hover:text-[var(--pink)] hover:underline transition-colors flex items-center gap-1"
                      >
                        View Profile →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
        </div>
      </motion.div>
    </SectionContainer>
  );
});

export default Achievements;
