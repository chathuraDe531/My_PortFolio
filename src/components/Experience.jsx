import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Calendar } from 'lucide-react';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

const EXPERIENCES = [
  {
    title: "Students' Union Member",
    org: 'Faculty of Technological Studies, University of Vavuniya',
    period: 'Present',
    description:
      'Actively contribute to student activities, events, coordination, and leadership initiatives within the Faculty of Technological Studies.',
    highlights: [
      'Organize and coordinate student events and activities',
      'Participate in faculty development and improvement initiatives',
      'Enhance collaboration and communication skills',
      'Support fellow students in academic and personal growth',
    ],
  },
  // Add more experience objects here to expand
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label="Experience"
        title="Experience & Leadership"
        description="My professional journey, leadership roles, and meaningful contributions."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent" aria-hidden="true" />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className="relative pl-14 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 md:left-6 top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[var(--clr-bg)] glow-accent-sm z-10" />

              {/* Card */}
              <div className="glass card-hover p-6 md:p-8 rounded-xl group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-indigo-400" />
                      <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                    </div>
                    <p className="text-sm font-medium text-indigo-400/80">{exp.org}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/15 rounded-full whitespace-nowrap shrink-0">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {exp.highlights.map((h, hi) => (
                    <motion.div
                      key={hi}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + hi * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
