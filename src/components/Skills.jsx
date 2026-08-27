import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Globe,
  Smartphone,
  Server,
  Wrench,
  ChevronRight,
  Sparkles,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

const CATEGORIES = [
  {
    id: 'languages',
    icon: Code2,
    title: 'Programming Languages',
    shortTitle: 'Languages',
    description: 'Core languages used for algorithms, problem solving, and software engineering.',
    accent: 'indigo',
    skills: [
      { name: 'Java', level: 'Proficient', tag: 'OOP & Architecture', detail: 'Object-Oriented Programming & Project Architecture' },
      { name: 'Python', level: 'Proficient', tag: 'Scripting & AI Basics', detail: 'Data processing, scripting & automation' },
      { name: 'JavaScript', level: 'Advanced', tag: 'ES6+ & Modern Web', detail: 'Modern async JavaScript & full-stack development' },
      { name: 'C++', level: 'Intermediate', tag: 'DSA & Systems', detail: 'Data structures, algorithms & problem solving' },
      { name: 'C#', level: 'Intermediate', tag: '.NET Applications', detail: 'Application development & software fundamentals' },
      { name: 'C', level: 'Intermediate', tag: 'Low-Level Systems', detail: 'Foundational programming & memory concepts' },
    ],
  },
  {
    id: 'frontend',
    icon: Globe,
    title: 'Frontend & Web',
    shortTitle: 'Frontend & Web',
    description: 'Modern frontend technologies for crafting responsive, interactive web interfaces.',
    accent: 'violet',
    skills: [
      { name: 'React', level: 'Advanced', tag: 'Frontend Library', detail: 'Component architecture, hooks & modern SPA workflows' },
      { name: 'Tailwind CSS', level: 'Advanced', tag: 'Styling & Design System', detail: 'Utility-first modern responsive UI & animations' },
      { name: 'HTML5 & CSS3', level: 'Expert', tag: 'Web Standards', detail: 'Semantic structuring, CSS Grid, Flexbox & styling' },
      { name: 'JavaScript (Web)', level: 'Advanced', tag: 'DOM & Client Logic', detail: 'Dynamic web interactions & API integration' },
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    shortTitle: 'Mobile Dev',
    description: 'Cross-platform mobile application development tools and frameworks.',
    accent: 'cyan',
    skills: [
      { name: 'React Native', level: 'Proficient', tag: 'Cross-Platform Mobile', detail: 'Building cross-platform iOS & Android mobile apps' },
      { name: 'Expo', level: 'Proficient', tag: 'Mobile SDK & Tooling', detail: 'Mobile deployment, native modules & rapid prototyping' },
    ],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend & Database',
    shortTitle: 'Backend & Database',
    description: 'Server-side runtimes, APIs, and relational & cloud database systems.',
    accent: 'emerald',
    skills: [
      { name: 'Node.js', level: 'Proficient', tag: 'Backend Runtime', detail: 'Server-side scripting, Express & RESTful APIs' },
      { name: 'PostgreSQL', level: 'Intermediate', tag: 'Relational Database', detail: 'Relational schema design, SQL queries & indexing' },
      { name: 'MySQL', level: 'Intermediate', tag: 'RDBMS Management', detail: 'Database modeling, normalization & operations' },
      { name: 'Supabase', level: 'Intermediate', tag: 'BaaS & Auth', detail: 'Backend-as-a-service, PostgreSQL & cloud authentication' },
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Tools & Platforms',
    shortTitle: 'Tools & Platforms',
    description: 'Version control, developer environments, and collaboration workflows.',
    accent: 'amber',
    skills: [
      { name: 'Git', level: 'Proficient', tag: 'Version Control', detail: 'Branching strategies, commit workflows & repository management' },
      { name: 'GitHub', level: 'Proficient', tag: 'Code Hosting & CI', detail: 'Remote repositories, pull requests & open-source collaboration' },
      { name: 'VS Code', level: 'Expert', tag: 'Development IDE', detail: 'Core development environment, debugging & tooling setup' },
    ],
  },
];

const ACCENT_MAP = {
  indigo: {
    icon: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    activeBg: 'bg-indigo-500/15',
    border: 'border-indigo-500/30',
    glow: 'shadow-indigo-500/20',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    progress: 'bg-indigo-500',
    dot: 'bg-indigo-400',
  },
  violet: {
    icon: 'text-violet-400',
    bg: 'bg-violet-500/10',
    activeBg: 'bg-violet-500/15',
    border: 'border-violet-500/30',
    glow: 'shadow-violet-500/20',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    progress: 'bg-violet-500',
    dot: 'bg-violet-400',
  },
  cyan: {
    icon: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    activeBg: 'bg-cyan-500/15',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/20',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    progress: 'bg-cyan-500',
    dot: 'bg-cyan-400',
  },
  emerald: {
    icon: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    activeBg: 'bg-emerald-500/15',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    progress: 'bg-emerald-500',
    dot: 'bg-emerald-400',
  },
  amber: {
    icon: 'text-amber-400',
    bg: 'bg-amber-500/10',
    activeBg: 'bg-amber-500/15',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500/20',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    progress: 'bg-amber-500',
    dot: 'bg-amber-400',
  },
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);

  const activeCategoryData = CATEGORIES.find((cat) => cat.id === selectedCategory) || CATEGORIES[0];
  const activeAccent = ACCENT_MAP[activeCategoryData.accent];
  const ActiveIcon = activeCategoryData.icon;

  return (
    <SectionWrapper id="skills">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <SectionHeader
        label="Skills"
        title="Tech Stack"
        description="Technologies and tools I work with to build modern software."
      />

      <div className="grid lg:grid-cols-[0.9fr_1.35fr] gap-6 lg:gap-8 items-start">
        {/* ── Left Side: Categories Arranged Down-Wise ── */}
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers size={14} className="text-indigo-400" />
              Categories
            </span>
            <span className="text-xs text-slate-500">{CATEGORIES.length} Areas</span>
          </div>

          <div className="space-y-2.5">
            {CATEGORIES.map((cat, i) => {
              const isSelected = cat.id === selectedCategory;
              const Icon = cat.icon;
              const a = ACCENT_MAP[cat.accent];

              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                    isSelected
                      ? `glass-bright border ${a.border} shadow-lg ${a.glow}`
                      : 'glass border border-white/[0.05] hover:border-white/15 hover:bg-white/[0.03]'
                  }`}
                >
                  {/* Subtle active background glow */}
                  {isSelected && (
                    <motion.div
                      layoutId="active-cat-glow"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/5 to-transparent pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 ${
                        isSelected ? `${a.bg} scale-110` : 'bg-white/[0.04] group-hover:scale-105'
                      }`}
                    >
                      <Icon size={20} className={isSelected ? a.icon : 'text-slate-400 group-hover:text-slate-200'} />
                    </div>

                    <div>
                      <h4
                        className={`text-sm sm:text-base font-semibold transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {cat.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-2">
                    <ChevronRight
                      size={18}
                      className={`transition-all duration-300 ${
                        isSelected
                          ? `${a.icon} translate-x-0 opacity-100`
                          : 'text-slate-600 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Right Side: Skills Displayed in a Down-Wise List ── */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryData.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="glass p-6 sm:p-7 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Category Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl ${activeAccent.bg} flex items-center justify-center shadow-inner`}>
                    <ActiveIcon size={24} className={activeAccent.icon} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {activeCategoryData.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 max-w-md">
                      {activeCategoryData.description}
                    </p>
                  </div>
                </div>

                <div className="self-start sm:self-auto">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${activeAccent.badge}`}>
                    {activeCategoryData.skills.length} Technologies
                  </span>
                </div>
              </div>

              {/* Skills Down-Wise List */}
              <div className="space-y-3">
                {activeCategoryData.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/15 transition-all duration-300 group flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={16} className={`${activeAccent.icon}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-400 border border-white/[0.05]">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          {skill.detail}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 pt-2 sm:pt-0">
                      <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border ${activeAccent.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${activeAccent.dot} animate-pulse`} />
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Footer Note */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-indigo-400" />
                  Continuously evolving with new libraries & frameworks
                </span>
                <span className="font-mono text-[11px] text-slate-600">
                  {selectedCategory.toUpperCase()}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
