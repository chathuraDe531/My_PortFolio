import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Send, Mail, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

const CONTACT_METHODS = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'chathuraDe531',
    link: 'https://github.com/chathuraDe531',
    accent: 'text-slate-300',
    hoverBorder: 'hover:border-slate-500/30',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'chathura-deshan',
    link: 'https://www.linkedin.com/in/chathura-deshan/',
    accent: 'text-blue-400',
    hoverBorder: 'hover:border-blue-500/30',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+94 78 537 1098',
    link: 'https://wa.me/94785371098',
    accent: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/30',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | success

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with email service (EmailJS, Resend, etc.)
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        label="Contact"
        title="Let's Connect"
        description="Have a project in mind or just want to say hello? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14">
        {/* Left — Contact methods */}
        <div className="space-y-4">
          {CONTACT_METHODS.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className={`glass card-hover p-5 rounded-xl flex items-center gap-4 group ${method.hoverBorder}`}
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-white/[0.07] transition-colors shrink-0">
                  <Icon size={20} className={method.accent} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{method.label}</p>
                  <p className="text-sm font-semibold text-slate-200">{method.value}</p>
                </div>
              </motion.a>
            );
          })}

          {/* Quick CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glass p-5 rounded-xl flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Prefer email?</p>
              <p className="text-sm text-slate-400">Use the form to send a message →</p>
            </div>
          </motion.div>
        </div>

        {/* Right — Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="glass p-6 md:p-8 rounded-xl"
        >
          <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <Send size={18} className="text-indigo-400" />
            Send a Message
          </h3>

          {/* Success message */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-300 text-sm"
            >
              <CheckCircle size={18} />
              Message received! I'll get back to you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-slate-400 mb-2">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-slate-400 mb-2">
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                rows="5"
                required
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none text-sm"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary justify-center py-3.5"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
