import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-400">ABOUT ME</h2>
          <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">Building Scalable Software Solutions</p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-red-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography Narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed">
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
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-900 shadow-xl relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-violet-500" />
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold text-base sm:text-lg">B.Tech – Information Technology</h4>
                  <p className="text-zinc-400 text-sm mt-1">SRM Institute of Science and Technology</p>
                  
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
                  <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">CGPA</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                    <span className="text-sm font-bold text-white">7.06 / 10</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
