import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Users, Code2, Brain, Smartphone, Sparkles } from 'lucide-react';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

const HIGHLIGHTS = [
  { icon: GraduationCap, title: 'ICT Undergraduate', desc: 'Faculty of Technological Studies', color: 'from-indigo-500/20 to-indigo-500/5' },
  { icon: MapPin, title: 'University of Vavuniya', desc: 'Sri Lanka', color: 'from-violet-500/20 to-violet-500/5' },
  { icon: Users, title: "Students' Union Member", desc: 'Faculty of Technological Studies', color: 'from-cyan-500/20 to-cyan-500/5' },
  { icon: Code2, title: 'Software Development', desc: 'Full Stack & Mobile', color: 'from-emerald-500/20 to-emerald-500/5' },
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Research & Exploration', color: 'from-amber-500/20 to-amber-500/5' },
  { icon: Smartphone, title: 'Mobile Development', desc: 'React Native & Expo', color: 'from-rose-500/20 to-rose-500/5' },
];

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
        description="A driven ICT undergraduate passionate about building technology that matters."
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
            I am Chathura Deshan, an ICT undergraduate with a strong interest in software development,
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

        {/* Right — Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="glass card-hover p-5 rounded-xl group relative overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center mb-3 group-hover:bg-white/[0.08] transition-colors">
                    <Icon size={20} className="text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-slate-200 text-sm mb-0.5">{item.title}</h3>
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
