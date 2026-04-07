import { motion } from 'framer-motion';
import { services } from '../data/services';
import RevealText from '../components/RevealText';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Nuestras Especialidades</div>
          <RevealText tag="h2" className="section-title">
            Soluciones Legales Integrales
          </RevealText>
          <p className="section-subtitle">
            Ofrecemos un servicio legal completo y personalizado para cada
            situaci&oacute;n, con la dedicaci&oacute;n que su caso merece.
          </p>
        </div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <span className="service-card__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="service-card__icon">{service.icon}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <ul className="service-card__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
