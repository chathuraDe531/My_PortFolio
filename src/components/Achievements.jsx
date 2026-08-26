import { motion } from 'framer-motion';
import { Award, Trophy, BookOpen, Mic } from 'lucide-react';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Intro to Programming',
    issuer: 'Kaggle',
    date: '2024',
    icon: BookOpen,
    description: 'Completed comprehensive introduction to programming fundamentals.',
    accent: 'indigo',
  },
  {
    id: 2,
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    icon: Award,
    description: 'Completed Python programming course for beginners.',
    accent: 'violet',
  },
  {
    id: 3,
    title: 'Certificate of Appreciation',
    issuer: 'FOTS Media — Announcer',
    date: '2024',
    icon: Mic,
    description: 'Recognized for contributions as announcer in faculty media team.',
    accent: 'cyan',
  },
  {
    id: 4,
    title: 'INNOVA National Level Ideathon 2025',
    issuer: 'IEEE Computer Society',
    date: '2025',
    icon: Trophy,
    description: 'Participant in national-level ideathon competition.',
    accent: 'amber',
  },
  // Add more achievements here
];

const ACCENT_MAP = {
  indigo: { icon: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'hover:border-indigo-500/30', badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/15' },
  violet: { icon: 'text-violet-400', bg: 'bg-violet-500/10', border: 'hover:border-violet-500/30', badge: 'bg-violet-500/10 text-violet-300 border-violet-500/15' },
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'hover:border-cyan-500/30', badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/15' },
  amber: { icon: 'text-amber-400', bg: 'bg-amber-500/10', border: 'hover:border-amber-500/30', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/15' },
};

const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <SectionHeader
        label="Achievements"
        title="Certificates & Awards"
        description="Recognitions, accomplishments, and continuous learning milestones."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {ACHIEVEMENTS.map((ach, i) => {
          const Icon = ach.icon;
          const a = ACCENT_MAP[ach.accent];

          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className={`glass card-hover p-6 rounded-xl group ${a.border}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${a.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className={a.icon} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-100 text-base leading-snug mb-0.5">{ach.title}</h3>
                  <p className="text-sm font-medium text-slate-400 mb-2">{ach.issuer}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{ach.description}</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full border ${a.badge}`}>
                    {ach.date}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
