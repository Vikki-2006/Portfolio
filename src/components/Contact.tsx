import { useState } from 'react';
import { Mail, MapPin, FileText, ArrowRight, User, MessageSquare, Check, Loader2, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

const contactCards = [
  {
    id: 'email',
    title: 'Email Address',
    value: 'waran3708@gmail.com',
    href: 'mailto:waran3708@gmail.com',
    icon: Mail,
    themeColor: 'from-[#0f62fe]/10 to-[#0043ce]/10'
  },
  {
    id: 'location',
    title: 'Location',
    value: 'Tamil Nadu, India',
    icon: MapPin,
    themeColor: 'from-[#34a853]/10 to-[#4285f4]/10'
  }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative">
      
      {/* Background soft blur accent */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-violet-600/5 to-red-500/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--purple)]">Connection</h2>
          <p className="mt-2 text-3xl font-bold text-zinc-100 sm:text-4xl tracking-tight">Get In Touch</p>
          <div className="section-underline"></div>
        </div>

        {/* Premium Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-center items-start">
          
          {/* Left Column: Heading, Subtitle and Glass Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight">
                Let's Build Something <br />
                <span className="text-gradient">Amazing Together.</span>
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-medium">
                Currently seeking Software Engineer / Full Stack Developer opportunities. Feel free to reach out for internships, collaborations, or full-time roles.
              </p>
            </div>

            {/* Premium Glassmorphism Contact Form wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl p-5 sm:p-7 border border-zinc-800 shadow-xl relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-zinc-500 group-focus-within:text-violet-400 transition-colors">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-[var(--input-bg)] hover:bg-[var(--input-hover-bg)] border border-[var(--input-border)] rounded-2xl text-xs sm:text-sm text-[var(--input-text)] placeholder-zinc-500 focus:border-[var(--input-focus-border)] focus:bg-[var(--input-focus-bg)] focus:ring-4 focus:ring-[var(--input-focus-ring)] transition-all duration-300 outline-none shadow-inner"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-zinc-500 group-focus-within:text-violet-400 transition-colors">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-[var(--input-bg)] hover:bg-[var(--input-hover-bg)] border border-[var(--input-border)] rounded-2xl text-xs sm:text-sm text-[var(--input-text)] placeholder-zinc-500 focus:border-[var(--input-focus-border)] focus:bg-[var(--input-focus-bg)] focus:ring-4 focus:ring-[var(--input-focus-ring)] transition-all duration-300 outline-none shadow-inner"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-zinc-500 group-focus-within:text-violet-400 transition-colors">
                    <FileText className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Subject"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-[var(--input-bg)] hover:bg-[var(--input-hover-bg)] border border-[var(--input-border)] rounded-2xl text-xs sm:text-sm text-[var(--input-text)] placeholder-zinc-500 focus:border-[var(--input-focus-border)] focus:bg-[var(--input-focus-bg)] focus:ring-4 focus:ring-[var(--input-focus-ring)] transition-all duration-300 outline-none shadow-inner"
                  />
                </div>

                {/* Message */}
                <div className="relative group">
                  <span className="absolute top-[14px] left-0 pl-4 text-zinc-500 group-focus-within:text-violet-400 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <textarea
                    required
                    rows={5}
                    placeholder="Message"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-[var(--input-bg)] hover:bg-[var(--input-hover-bg)] border border-[var(--input-border)] rounded-2xl text-xs sm:text-sm text-[var(--input-text)] placeholder-zinc-500 focus:border-[var(--input-focus-border)] focus:bg-[var(--input-focus-bg)] focus:ring-4 focus:ring-[var(--input-focus-ring)] transition-all duration-300 outline-none shadow-inner resize-none min-h-[140px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="portfolio-btn-primary w-full relative group overflow-hidden py-3.5 px-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:to-pink-600 rounded-2xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] z-0"></span>
                  
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4.5 h-4.5 animate-spin z-10" />
                      <span className="z-10">Sending Message...</span>
                    </>
                  ) : isSent ? (
                    <>
                      <Check className="w-4.5 h-4.5 z-10 text-emerald-400" />
                      <span className="z-10">Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span className="z-10">Send Message</span>
                      <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform z-10" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column: Premium Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4.5 w-full">
            
            {contactCards.map((card) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel portfolio-card rounded-2xl p-4.5 border border-zinc-800 shadow-md relative overflow-hidden group hover:border-zinc-800 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.themeColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-500 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-pink-500 group-hover:border-transparent transition-all duration-300 flex-shrink-0">
                      <CardIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider block">{card.title}</span>
                      {card.href ? (
                        <a href={card.href} className="text-zinc-100 hover:text-[var(--purple)] font-bold text-sm sm:text-base transition-colors mt-0.5 block">
                          {card.value}
                        </a>
                      ) : (
                        <span className="text-zinc-100 font-bold text-sm sm:text-base mt-0.5 block">
                          {card.value}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Standalone Premium Download Resume Button */}
            <div className="flex justify-center w-full mt-1.5">
              <motion.a
                whileHover={{ y: -4 }}
                href="/Vigneshwaran_S_Resume_Updated.pdf"
                download="Vigneshwaran_S_Resume_Updated.pdf"
                className="portfolio-btn-primary w-60 relative group overflow-hidden py-3.5 px-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:to-pink-600 rounded-2xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.35)] active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2 border border-transparent shadow-md select-none"
              >
                {/* Shine animation overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] z-0"></span>
                <FileDown className="w-4 h-4 z-10" />
                <span className="z-10">Download Resume</span>
              </motion.a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
