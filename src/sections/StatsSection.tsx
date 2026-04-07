import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { value: 10, suffix: '+', label: 'A\u00F1os de Experiencia' },
  { value: 6, suffix: '', label: '\u00C1reas de Pr\u00E1ctica Legal' },
  { value: 6, suffix: '+', label: 'Propiedades Disponibles' },
  { value: 100, suffix: '%', label: 'Compromiso con el Cliente' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function StatsSection() {
  return (
    <section className="stats">
      <div className="container">
        <motion.div
          className="stats__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} className="stats__item" variants={itemVariants}>
              <span className="stats__num">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="stats__label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
