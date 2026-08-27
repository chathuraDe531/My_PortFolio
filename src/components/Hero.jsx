import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ChevronDown, Database, Code2, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import profileImg from '../assets/profile.png';

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/chathuraDe531', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/chathura-deshan/', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/94785371098', label: 'WhatsApp' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-[15%] left-[8%] w-[420px] h-[420px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)' }}
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)' }}
          animate={{ y: [0, -35, 0], x: [0, -25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* ── Left Column ── */}
          <motion.div variants={container} initial="hidden" animate="visible" className="space-y-5">
            {/* Status badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to Opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp}>
              <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Chathura</span>
                <br />
                <span className="gradient-text">Deshan</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl font-medium gradient-text-subtle mt-2"
            >
              BICT (Hons) Undergraduate · Aspiring Software Developer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mt-3"
            >
              I am a BICT (Hons) undergraduate at the University of Vavuniya, passionate about building modern software solutions, exploring new technologies, and creating impactful web and mobile applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-6">
              <button onClick={() => scrollTo('projects')} className="btn-primary group">
                View My Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-outline">
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 pt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl glass card-hover text-slate-400 hover:text-indigo-400"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
              <span className="h-6 w-px bg-slate-700/60 mx-1" />
              <span className="text-xs text-slate-500 font-medium">Let's connect</span>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Interactive Portrait & Tech Showcase ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center pt-8 lg:pt-0"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[430px]">
              {/* Layered ambient glows behind portrait */}
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-indigo-500/25 via-violet-500/20 to-cyan-400/20 blur-2xl -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none -z-10" />

              {/* Decorative rotating dashed border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-[38px] border border-indigo-500/20 border-dashed pointer-events-none -z-10"
              />

              {/* Portrait Card Container */}
              <div className="relative rounded-[32px] overflow-hidden glass border border-white/[0.12] shadow-2xl group">
                {/* Background lighting / gradient frame inside */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-slate-900/40 to-slate-950/80 z-0" />
                <div className="absolute top-0 inset-x-0 h-48 bg-radial-at-t from-indigo-500/20 via-violet-500/10 to-transparent z-0 pointer-events-none" />

                {/* Profile Image */}
                <div className="relative z-10 pt-6 px-4 flex justify-center items-end">
                  <motion.img
                    src={profileImg}
                    alt="Chathura Deshan"
                    className="w-full max-h-[460px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500 ease-out"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>

                {/* Bottom glassmorphic info bar */}
                <div className="absolute bottom-3 inset-x-3 z-20 glass-bright px-4 py-3 rounded-2xl border border-white/10 flex items-center justify-between backdrop-blur-md">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-100">Chathura Deshan</h3>
                    <p className="text-[11px] text-indigo-400 font-mono flex items-center gap-1">
                      <span className="text-violet-400">const</span> role = <span className="text-emerald-400">"Developer"</span>;
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left (Full Stack / Tech) */}
              <motion.div
                className="absolute -top-3 -left-4 sm:-left-8 z-30 glass px-3.5 py-2.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-2.5 backdrop-blur-md"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Code2 size={18} />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Specialization</div>
                  <div className="text-xs font-bold text-slate-200">Full Stack & Mobile</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Right Mid (Tech Stack) */}
              <motion.div
                className="absolute top-1/3 -right-4 sm:-right-8 z-30 glass px-3.5 py-2.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-2.5 backdrop-blur-md"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Database size={18} />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Focus Stack</div>
                  <div className="text-xs font-bold text-slate-200">React · Node · Python</div>
                </div>
              </motion.div>

              {/* Floating Badge 3 - Bottom Left (Undergraduate) */}
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-left-6 z-30 glass px-3 py-2 rounded-xl border border-white/10 shadow-lg flex items-center gap-2 backdrop-blur-md"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <div className="p-1.5 rounded-lg bg-violet-500/20 text-violet-400">
                  <Sparkles size={15} />
                </div>
                <span className="text-xs font-semibold text-slate-200">BICT (Hons) Vavuniya</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-400 transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
