import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';

export default function About() {
  return (
    <SectionContainer id="about">
      {/* Section Header */}
      <div className="mb-10 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--purple)]">ABOUT ME</h2>
          <p className="mt-2 text-3xl font-bold text-zinc-100 sm:text-4xl tracking-tight">Building Scalable Software Solutions</p>
          <div className="section-underline"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-12 items-start">
          
          {/* Left Column: Biography Narrative */}
          <div className="space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-medium">
            <p>
              I'm Vigneshwaran S, a B.Tech Information Technology student passionate about software engineering and full-stack web development. I enjoy transforming ideas into modern, scalable applications with clean architecture, intuitive user experiences, and efficient backend systems.
            </p>
            <p>
              My primary technology stack includes Python, React, FastAPI, Java, SQL, and modern web technologies. I continuously strengthen my knowledge of data structures, algorithms, object-oriented programming, and system design while building real-world projects that solve practical problems.
            </p>
            <p>
              Competitive programming plays an important role in my learning journey. Regular problem-solving on platforms like LeetCode and CodeChef has improved my analytical thinking, coding efficiency, and ability to write optimized, maintainable solutions.
            </p>
            <p>
              Currently, I am seeking Software Engineer Internship and Full-Time opportunities where I can contribute to meaningful projects, collaborate with experienced developers, and continue growing as a software engineer.
            </p>
            <div className="flex items-center gap-3 pt-4 text-sm text-zinc-500">
              <span className="animate-pulse flex-shrink-0 text-base">💜</span>
              <span>Passionate about building scalable software, solving complex problems, and continuously learning new technologies.</span>
            </div>
          </div>

          {/* Right Column: Key Details / Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel portfolio-card rounded-2xl p-6 sm:p-8 border border-zinc-800 shadow-xl relative overflow-hidden"
          >
              {/* Subtle background glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-violet-500" />
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-zinc-100 font-bold text-base sm:text-lg">B.Tech – Information Technology</h4>
                  <p className="text-zinc-300 text-sm mt-1">SRM Institute of Science and Technology</p>
                  
                  {/* Metadata labels */}
                  <div className="mt-4 space-y-2.5 text-zinc-500 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                      <span>Trichy, Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                      <span>Expected Graduation: May 2027</span>
                    </div>
                  </div>

                  {/* CGPA Badge */}
                  <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[var(--tag-bg)] border border-[var(--tag-border)]">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">CGPA</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                    <span className="text-sm font-bold text-zinc-100">7.06 / 10</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
      </SectionContainer>
  );
}
