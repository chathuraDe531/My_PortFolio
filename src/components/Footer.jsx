import { motion } from 'framer-motion';
import { MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const SOCIAL = [
  { icon: Github, href: 'https://github.com/chathuraDe531', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/chathura-deshan/', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/94785371098', label: 'WhatsApp' },
];

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.04] bg-[var(--clr-surface)]">
      {/* Main footer */}
      <div className="section-container py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl font-extrabold gradient-text">CD<span className="text-indigo-400">.</span></span>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed max-w-xs">
              BICT (Hons) Undergraduate & Aspiring Software Developer building modern web and mobile applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2" aria-label="Footer navigation">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-slate-500 hover:text-indigo-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-indigo-400 card-hover"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 Chathura Deshan. All rights reserved.
          </p>

          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            Made with <Heart size={12} className="text-rose-500" /> using React + Vite + Tailwind CSS
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-indigo-400 card-hover"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
