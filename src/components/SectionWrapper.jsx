import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`relative py-28 md:py-36 lg:py-40 overflow-hidden ${className}`}
    >
      <div className="section-container relative z-10">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ label, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className="mb-16 md:mb-20"
    >
      <span className="section-label">{label}</span>
      <h2 className="section-heading gradient-text mb-4">{title}</h2>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionWrapper;
