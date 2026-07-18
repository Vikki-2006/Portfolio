import { useState } from 'react';
import { Mail, MapPin, FileText, ArrowRight, User, MessageSquare, Check, Loader2, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendContactEmail } from '../lib/web3forms';
import SectionContainer from './SectionContainer';
import Toast from './Toast';
import type { ToastData, ToastType } from './Toast';

// ─── Contact info cards ─────────────────────────────────────────────────────
const contactCards = [
  {
    id: 'email',
    title: 'Email Address',
    value: 'vikki.29062006@gmail.com',
    href: 'mailto:vikki.29062006@gmail.com',
    icon: Mail,
  },
  {
    id: 'location',
    title: 'Location',
    value: 'Tamil Nadu, India',
    icon: MapPin,
  },
];

// ─── Validation ──────────────────────────────────────────────────────────────
interface FormErrors { name?: string; email?: string; subject?: string; message?: string; }

function validateForm(form: { name: string; email: string; subject: string; message: string }): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) { errors.name = 'Full name is required.'; }
  else if (form.name.trim().length < 2) { errors.name = 'Name must be at least 2 characters.'; }
  if (!form.email.trim()) { errors.email = 'Email address is required.'; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Please enter a valid email address.'; }
  if (!form.subject.trim()) { errors.subject = 'Subject is required.'; }
  else if (form.subject.trim().length < 3) { errors.subject = 'Subject must be at least 3 characters.'; }
  if (!form.message.trim()) { errors.message = 'Message is required.'; }
  else if (form.message.trim().length < 10) { errors.message = 'Message must be at least 10 characters.'; }
  return errors;
}

// ─── Main Contact component ──────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [toast, setToast] = useState<ToastData | null>(null);

  const showToast = (type: ToastType, title: string, description?: string) => {
    setToast({ type, title, description });
  };

  const handleChange = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setIsSubmitting(true);
    setErrors({});
    try {
      await sendContactEmail(form);
      setIsSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      showToast('success', 'Message sent successfully!', "I'll get back to you soon.");
      setTimeout(() => setIsSent(false), 4000);
    } catch (error: unknown) {
      showToast('error', 'Unable to send message.', 'Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input class — uses CSS variables, not hardcoded dark Tailwind colours
  const inputClass = (field: keyof FormErrors) =>
    `contact-input w-full pl-11 pr-4 py-3 rounded-2xl text-xs sm:text-sm outline-none ${
      errors[field] ? 'contact-input--error' : ''
    }`;

  return (
    <>
      {toast && <Toast toast={toast} onClose={() => setToast(null)} />}

      <SectionContainer id="contact">
        {/* Ambient gradient — hidden in light mode via CSS */}
        <div className="contact-ambient-blob absolute top-1/2 left-1/3 -translate-x-1/2 w-[450px] h-[450px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10">
          {/* Section Header */}
          <div className="mb-10 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--purple)]">Connection</h2>
            <p className="mt-2 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl tracking-tight">Get In Touch</p>
            <div className="section-underline" />
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
                  Let's Build Something <br />
                  <span className="text-gradient">Amazing Together.</span>
                </h3>
                <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed max-w-2xl font-medium">
                  Currently seeking Software Engineer / Full Stack Developer opportunities. Feel free to reach out for internships, collaborations, or full-time roles.
                </p>
              </div>

              {/* Form card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
                className="contact-form-card rounded-3xl p-5 sm:p-7 relative overflow-hidden"
              >
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <div className="relative group">
                        <span className="contact-icon absolute inset-y-0 left-0 pl-4 flex items-center transition-colors duration-200">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Full Name"
                          value={form.name}
                          onChange={handleChange('name')}
                          className={inputClass('name')}
                        />
                      </div>
                      {errors.name && <p className="contact-error mt-1 pl-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <div className="relative group">
                        <span className="contact-icon absolute inset-y-0 left-0 pl-4 flex items-center transition-colors duration-200">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="Email Address"
                          value={form.email}
                          onChange={handleChange('email')}
                          className={inputClass('email')}
                        />
                      </div>
                      {errors.email && <p className="contact-error mt-1 pl-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <div className="relative group">
                      <span className="contact-icon absolute inset-y-0 left-0 pl-4 flex items-center transition-colors duration-200">
                        <FileText className="w-4 h-4" />
                      </span>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange('subject')}
                        className={inputClass('subject')}
                      />
                    </div>
                    {errors.subject && <p className="contact-error mt-1 pl-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <div className="relative group">
                      <span className="contact-icon absolute top-[14px] left-0 pl-4 transition-colors duration-200">
                        <MessageSquare className="w-4 h-4" />
                      </span>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange('message')}
                        className={`${inputClass('message')} resize-none min-h-[140px]`}
                      />
                    </div>
                    {errors.message && <p className="contact-error mt-1 pl-1">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="portfolio-btn-primary w-full py-3.5 px-6 disabled:opacity-50 disabled:pointer-events-none text-xs sm:text-sm"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending Message...</span></>
                    ) : isSent ? (
                      <><Check className="w-4 h-4 text-emerald-400" /><span>Message Sent Successfully!</span></>
                    ) : (
                      <><span>Send Message</span><ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Right: Contact cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full lg:pt-[190px]">
              {contactCards.map((card) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="contact-info-card portfolio-card rounded-2xl p-5 relative overflow-hidden group"
                  >
                    <div className="flex items-start gap-4 relative z-10">
                      {/* Icon badge */}
                      <div className="contact-card-icon-wrap p-3 rounded-xl flex-shrink-0 transition-all duration-300">
                        <CardIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-wider block">
                          {card.title}
                        </span>
                        {card.href ? (
                          <a href={card.href} className="text-[var(--text-primary)] hover:text-[var(--purple)] font-bold text-sm sm:text-base transition-colors mt-0.5 block">
                            {card.value}
                          </a>
                        ) : (
                          <span className="text-[var(--text-primary)] font-bold text-sm sm:text-base mt-0.5 block">
                            {card.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Download Resume */}
              <div className="flex justify-center w-full mt-0">
                <a
                  href="/Vigneshwaran_S_Resume_Updated.pdf"
                  download="Vigneshwaran_S_Resume_Updated.pdf"
                  className="portfolio-btn-primary w-60 py-3.5 px-6 select-none text-xs sm:text-sm"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>

          </div>
        </div>
      </SectionContainer>
    </>
  );
}
