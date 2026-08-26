import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, ArrowRight, ChevronDown, Terminal, Braces, Database } from 'lucide-react';

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
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* ── Left Column ── */}
          <motion.div variants={container} initial="hidden" animate="visible" className="space-y-7">
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
              className="text-lg sm:text-xl font-medium gradient-text-subtle"
            >
              ICT Undergraduate · Aspiring Software Developer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg"
            >
              I am passionate about building modern software solutions, exploring new technologies, and creating impactful web and mobile applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={() => scrollTo('projects')} className="btn-primary group">
                View My Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-outline">
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 pt-4">
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

          {/* ── Right Column — Animated code terminal ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow backdrop */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-violet-500/[0.05] blur-xl" />

              {/* Terminal card */}
              <div className="relative glass rounded-2xl overflow-hidden border border-white/[0.06]">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.05] bg-white/[0.02]">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">portfolio.tsx</span>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-sm leading-relaxed space-y-1.5">
                  <CodeLine delay={0.6}>
                    <span className="text-violet-400">const</span>{' '}
                    <span className="text-cyan-300">developer</span>{' '}
                    <span className="text-slate-500">=</span>{' '}
                    <span className="text-yellow-300">{'{'}</span>
                  </CodeLine>
                  <CodeLine delay={0.8} indent>
                    <span className="text-indigo-300">name</span>
                    <span className="text-slate-500">:</span>{' '}
                    <span className="text-emerald-300">"Chathura Deshan"</span>
                    <span className="text-slate-500">,</span>
                  </CodeLine>
                  <CodeLine delay={1.0} indent>
                    <span className="text-indigo-300">role</span>
                    <span className="text-slate-500">:</span>{' '}
                    <span className="text-emerald-300">"Software Developer"</span>
                    <span className="text-slate-500">,</span>
                  </CodeLine>
                  <CodeLine delay={1.2} indent>
                    <span className="text-indigo-300">skills</span>
                    <span className="text-slate-500">:</span>{' '}
                    <span className="text-yellow-300">[</span>
                    <span className="text-emerald-300">"React"</span>
                    <span className="text-slate-500">,</span>{' '}
                    <span className="text-emerald-300">"Node.js"</span>
                    <span className="text-slate-500">,</span>{' '}
                    <span className="text-emerald-300">"Python"</span>
                    <span className="text-yellow-300">]</span>
                    <span className="text-slate-500">,</span>
                  </CodeLine>
                  <CodeLine delay={1.4} indent>
                    <span className="text-indigo-300">passion</span>
                    <span className="text-slate-500">:</span>{' '}
                    <span className="text-emerald-300">"Building the future"</span>
                    <span className="text-slate-500">,</span>
                  </CodeLine>
                  <CodeLine delay={1.6} indent>
                    <span className="text-indigo-300">openToWork</span>
                    <span className="text-slate-500">:</span>{' '}
                    <span className="text-orange-300">true</span>
                    <span className="text-slate-500">,</span>
                  </CodeLine>
                  <CodeLine delay={1.8}>
                    <span className="text-yellow-300">{'}'}</span>
                    <span className="text-slate-500">;</span>
                  </CodeLine>

                  {/* Blinking cursor */}
                  <motion.div
                    className="flex items-center gap-1 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                  >
                    <span className="text-slate-500">{'>'}</span>
                    <motion.span
                      className="w-2 h-5 bg-indigo-400 rounded-sm"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 p-3 glass rounded-xl border border-white/[0.06]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Terminal size={20} className="text-indigo-400" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 p-3 glass rounded-xl border border-white/[0.06]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Braces size={20} className="text-violet-400" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 p-3 glass rounded-xl border border-white/[0.06]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <Database size={18} className="text-cyan-400" />
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

/* ── Animated Code Line ── */
const CodeLine = ({ children, delay = 0, indent = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={indent ? 'pl-6' : ''}
  >
    {children}
  </motion.div>
);

export default Hero;
