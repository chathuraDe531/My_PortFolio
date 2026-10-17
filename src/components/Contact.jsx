import { motion } from 'framer-motion';
import { MessageCircle, Send, Mail, CheckCircle, AlertCircle, Loader2, Clock } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

// ─── Contact Configuration ───────────────────────────────────────────────────
export const RECIPIENT_EMAIL = 'chathuradeshan531@gmail.com';

// Optional EmailJS Credentials (if you prefer EmailJS over direct delivery)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: RECIPIENT_EMAIL,
    link: `mailto:${RECIPIENT_EMAIL}`,
    accent: 'text-indigo-400',
    hoverBorder: 'hover:border-indigo-500/30',
  },
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
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submissions
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMsg('');
    setSuccessMsg('');

    try {
      // Check if EmailJS credentials have been supplied
      const hasEmailJs =
        Boolean(EMAILJS_SERVICE_ID) &&
        Boolean(EMAILJS_TEMPLATE_ID) &&
        Boolean(EMAILJS_PUBLIC_KEY) &&
        EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
        EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
        EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

      if (hasEmailJs) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            reply_to: form.email,
          },
          EMAILJS_PUBLIC_KEY
        );
        setSuccessMsg("Message sent successfully! I'll get back to you soon.");
      } else {
        // Direct sending to chathuradeshan531@gmail.com via FormSubmit
        const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `New Portfolio Message from ${form.name}`,
            _replyto: form.email,
            _captcha: 'false',
          }),
        });

        const data = await response.json();
        const isActivationRequired =
          data?.message &&
          (data.message.toLowerCase().includes('activation') ||
           data.message.toLowerCase().includes('activate') ||
           data.message.toLowerCase().includes('confirm'));

        if (isActivationRequired) {
          setStatus('activation');
          setSuccessMsg(
            `Almost there! FormSubmit has sent a one-time confirmation email to ${RECIPIENT_EMAIL}. Open your Gmail inbox and click "Activate Form" to start receiving messages.`
          );
          setForm({ name: '', email: '', message: '' });
          return;
        }

        if (!response.ok || data.success === 'false' || data.success === false) {
          throw new Error(data.message || 'Failed to deliver message.');
        }

        setSuccessMsg(`Message sent successfully to ${RECIPIENT_EMAIL}! I'll get back to you soon.`);
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });

      // Reset success message after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 7000);
    } catch (error) {
      console.error('Contact Form Error:', error);
      setStatus('error');
      setErrorMsg(
        error?.message || error?.text || 'Something went wrong. Please use the direct email button below or reach out via WhatsApp.'
      );
    }
  };

  const isSubmitting = status === 'sending';

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
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
              <Clock size={20} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Fast Response</p>
              <p className="text-sm text-slate-400">Usually replies within 24 hours</p>
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
              <CheckCircle size={18} className="shrink-0" />
              <span>{successMsg || "Message sent successfully! I'll get back to you soon."}</span>
            </motion.div>
          )}

          {/* Activation Required Message */}
          {status === 'activation' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-amber-500/10 border border-amber-500/25 rounded-xl space-y-3 text-amber-200 text-sm"
            >
              <div className="flex items-start gap-3">
                <Mail size={18} className="shrink-0 mt-0.5 text-amber-400" />
                <div>
                  <p className="font-semibold text-amber-300">One-Time Activation Email Sent!</p>
                  <p className="text-xs text-amber-200/90 mt-1 leading-relaxed">{successMsg}</p>
                </div>
              </div>
              <div className="pt-1">
                <a
                  href="https://mail.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-xs text-amber-100 transition-colors font-medium border border-amber-500/30"
                >
                  <Mail size={14} /> Open Gmail to Confirm &rarr;
                </a>
              </div>
            </motion.div>
          )}

          {/* Error message */}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl space-y-3 text-red-300 text-sm"
            >
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
              <div>
                <a
                  href={`mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
                    form.name ? `Portfolio Message from ${form.name}` : 'Portfolio Inquiry'
                  )}&body=${encodeURIComponent(
                    `${form.message || ''}\n\n---\nSender: ${form.name || 'Anonymous'}\nEmail: ${form.email || 'Not provided'}`
                  )}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-xs text-red-200 transition-colors font-medium border border-red-500/30"
                >
                  <Mail size={14} /> Send via Email App (Gmail / Outlook)
                </a>
              </div>
            </motion.div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot spam prevention */}
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
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
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={isSubmitting ? {} : { y: -2 }}
              whileTap={isSubmitting ? {} : { scale: 0.98 }}
              className="w-full btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
