import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Server, Wrench } from 'lucide-react';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

const CATEGORIES = [
  {
    icon: Code2,
    title: 'Programming Languages',
    accent: 'indigo',
    skills: ['Java', 'Python', 'JavaScript', 'C++', 'C#', 'C'],
  },
  {
    icon: Globe,
    title: 'Frontend & Web',
    accent: 'violet',
    skills: ['HTML', 'CSS', 'React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    accent: 'cyan',
    skills: ['React Native', 'Expo'],
  },
  {
    icon: Server,
    title: 'Backend & Database',
    accent: 'emerald',
    skills: ['Node.js', 'Supabase', 'PostgreSQL', 'MySQL'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    accent: 'amber',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

const ACCENT_MAP = {
  indigo: { icon: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', pill: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/15', hoverGlow: 'group-hover:shadow-indigo-500/10' },
  violet: { icon: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', pill: 'bg-violet-500/10 text-violet-300 border-violet-500/15', hoverGlow: 'group-hover:shadow-violet-500/10' },
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', pill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/15', hoverGlow: 'group-hover:shadow-cyan-500/10' },
  emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', pill: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15', hoverGlow: 'group-hover:shadow-emerald-500/10' },
  amber: { icon: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', pill: 'bg-amber-500/10 text-amber-300 border-amber-500/15', hoverGlow: 'group-hover:shadow-amber-500/10' },
};

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <SectionHeader
        label="Skills"
        title="Tech Stack"
        description="Technologies and tools I work with to build modern software."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          const a = ACCENT_MAP[cat.accent];

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className={`glass card-hover p-6 rounded-xl group ${a.hoverGlow} group-hover:shadow-lg`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg ${a.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className={a.icon} />
                </div>
                <h3 className="font-semibold text-slate-200 text-base">{cat.title}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + si * 0.04 }}
                    viewport={{ once: true }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${a.pill} hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
