import { motion } from 'framer-motion';
import { ExternalLink, Layers, Smartphone, Globe } from 'lucide-react';
import { Github } from './BrandIcons';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

const PROJECTS = [
  {
    id: 'agroteamarket',
    name: 'AgroTeaMarket',
    icon: Smartphone,
    description:
      'A mobile-first application designed to digitalize the tea collection ecosystem and improve interactions between tea farmers and agents.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL'],
    features: [
      'User authentication & authorization',
      'Real-time dashboard',
      'Request-to-sell functionality',
      'Monthly financial reporting',
      'Agent search and rating',
      'Profile management',
    ],
    github: 'https://github.com/chathuraDe531',
    live: null,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
  },
  {
    id: 'uoveventhub',
    name: 'UOVEventHub',
    icon: Globe,
    description:
      'A university event management platform designed to help organize, manage, coordinate, and streamline university events and related approval processes.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
    features: [
      'Event management & organization',
      'Faculty organization dashboard',
      'Approval workflows',
      'Permission management',
      'Budget management',
      'Event analytics',
    ],
    github: 'https://github.com/chathuraDe531',
    live: null,
    gradient: 'from-indigo-500/20 via-violet-500/10 to-transparent',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="Projects"
        title="Featured Work"
        description="Innovative solutions showcasing my skills and expertise."
      />

      <div className="grid lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className="glass card-hover rounded-xl overflow-hidden group flex flex-col"
            >
              {/* Project header with gradient */}
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Animated shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                />

                {/* Project icon */}
                <div className={`w-16 h-16 rounded-2xl ${project.iconBg} flex items-center justify-center`}>
                  <Icon size={28} className={project.iconColor} />
                </div>

                {/* Decorative grid */}
                <div className="absolute inset-0 dot-pattern opacity-30" />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Title */}
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={16} className="text-indigo-400" />
                  <h3 className="text-xl font-bold text-slate-100">{project.name}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 rounded-md border border-indigo-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key features */}
                <div className="mb-6 flex-1">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Features
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-xs font-medium text-indigo-400 pl-3">
                        +{project.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-white/[0.05]">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 btn-primary justify-center text-sm py-2.5"
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 btn-outline justify-center text-sm py-2.5"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* More projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 glass p-8 rounded-xl text-center"
      >
        <h3 className="text-lg font-semibold text-slate-200 mb-2">
          More Projects Coming Soon
        </h3>
        <p className="text-sm text-slate-500">
          I'm constantly building new projects.{' '}
          <a
            href="https://github.com/chathuraDe531"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
          >
            Visit my GitHub
          </a>{' '}
          for all projects and contributions.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
