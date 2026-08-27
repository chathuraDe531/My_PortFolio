import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Users, Code2, Brain, Smartphone, Sparkles } from 'lucide-react';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

const HIGHLIGHTS = [
  { icon: GraduationCap, title: 'BICT (Hons) Undergraduate', desc: 'Faculty of Technological Studies', accent: 'indigo', gradient: 'from-indigo-500/20 via-indigo-500/5 to-transparent' },
  { icon: MapPin, title: 'University of Vavuniya', desc: 'Sri Lanka', accent: 'violet', gradient: 'from-violet-500/20 via-violet-500/5 to-transparent' },
  { icon: Users, title: "Students' Union President (2026)", desc: 'Faculty of Technological Studies · University of Vavuniya', accent: 'cyan', gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent' },
  { icon: Code2, title: 'Software Development', desc: 'Full Stack & Mobile', accent: 'emerald', gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent' },
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Research & Exploration', accent: 'amber', gradient: 'from-amber-500/20 via-amber-500/5 to-transparent' },
  { icon: Smartphone, title: 'Mobile Development', desc: 'React Native & Expo', accent: 'rose', gradient: 'from-rose-500/20 via-rose-500/5 to-transparent' },
];

const ACCENT_MAP = {
  indigo: { icon: 'text-indigo-400', bg: 'bg-indigo-500/10', ring: 'ring-indigo-500/20', borderHover: 'group-hover:border-indigo-500/30' },
  violet: { icon: 'text-violet-400', bg: 'bg-violet-500/10', ring: 'ring-violet-500/20', borderHover: 'group-hover:border-violet-500/30' },
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', ring: 'ring-cyan-500/20', borderHover: 'group-hover:border-cyan-500/30' },
  emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', ring: 'ring-emerald-500/20', borderHover: 'group-hover:border-emerald-500/30' },
  amber: { icon: 'text-amber-400', bg: 'bg-amber-500/10', ring: 'ring-amber-500/20', borderHover: 'group-hover:border-amber-500/30' },
  rose: { icon: 'text-rose-400', bg: 'bg-rose-500/10', ring: 'ring-rose-500/20', borderHover: 'group-hover:border-rose-500/30' },
};

const INTERESTS = [
  'Software Development',
  'Web Technologies',
  'Mobile Apps',
  'AI & Machine Learning',
  'Emerging Tech',
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="About Me"
        title="Who I Am"
        description="A driven BICT (Hons) undergraduate passionate about building technology that matters."
      />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
        {/* Left — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-8"
        >
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I am Chathura Deshan, a BICT (Hons) undergraduate at the University of Vavuniya with a strong interest in software development,
            web technologies, mobile application development, artificial intelligence, and emerging technologies.
            I enjoy learning new technologies and building practical projects that solve real-world problems.
          </p>

          {/* Interests */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-indigo-400" />
              Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="px-3.5 py-1.5 text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/15 rounded-full hover:border-indigo-500/30 transition-colors"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { value: '5+', label: 'Projects' },
              { value: '4+', label: 'Certificates' },
              { value: '6+', label: 'Languages' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 glass rounded-xl"
              >
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Highlight Cards — Icons Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            const a = ACCENT_MAP[item.accent];
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`glass card-hover p-6 rounded-xl group relative overflow-hidden text-center ${a.borderHover}`}
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Centered icon */}
                  <div className={`w-12 h-12 rounded-xl ${a.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={a.icon} />
                  </div>
                  <h3 className="font-semibold text-slate-200 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
