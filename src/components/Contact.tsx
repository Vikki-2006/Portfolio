import { Mail, Phone, MapPin, FileDown, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-transparent relative">
      
      {/* Background soft blur accent */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-violet-600/5 to-red-500/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Container */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-zinc-900 shadow-2xl relative overflow-hidden">
          
          {/* Decorative glowing gradient border top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-red-500 to-violet-600"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: CTA Heading */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's Build Something <br />
                <span className="text-gradient">Amazing Together! 🚀</span>
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg">
                I am currently seeking software engineering or full-stack development internship roles where I can contribute to building reliable systems and solve challenging architectural tasks. If you have an opportunity or want to collaborate, feel free to reach out!
              </p>

              {/* Get in touch button (mailto link) */}
              <a
                href="mailto:waran3708@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 to-red-500 hover:shadow-lg hover:shadow-violet-600/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Column: Contact Details Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Email item */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/40 border border-zinc-900">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-500 text-xs font-semibold block uppercase">Email</span>
                  <a href="mailto:waran3708@gmail.com" className="text-white hover:text-violet-400 font-semibold text-sm sm:text-base transition-colors">
                    waran3708@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/40 border border-zinc-900">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-500 text-xs font-semibold block uppercase">Phone</span>
                  <a href="tel:+919345689068" className="text-white hover:text-violet-400 font-semibold text-sm sm:text-base transition-colors">
                    +91 93456 89068
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/40 border border-zinc-900">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-500 text-xs font-semibold block uppercase">Location</span>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Resume download item */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/40 border border-zinc-900">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-500">
                  <FileDown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-500 text-xs font-semibold block uppercase">Resume CV</span>
                  <a 
                    href="/resume.pdf"
                    download="Vigneshwaran_S_Resume.pdf"
                    className="text-white hover:text-violet-400 font-semibold text-sm sm:text-base transition-colors flex items-center gap-1.5"
                  >
                    Download CV PDF
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
