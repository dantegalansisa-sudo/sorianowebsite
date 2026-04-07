import { motion } from 'framer-motion';
import { properties } from '../data/properties';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

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

export default function PropertiesSection() {
  return (
    <section className="properties" id="propiedades">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Gesti&oacute;n Inmobiliaria</div>
          <RevealText tag="h2" className="section-title">
            Inmuebles Disponibles
          </RevealText>
          <p className="section-subtitle">
            Propiedades seleccionadas en las mejores ubicaciones
            de la Rep&uacute;blica Dominicana.
          </p>
        </div>

        <motion.div
          className="properties__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              className="property-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="property-card__img-wrap">
                <img
                  src={property.image}
                  alt={property.location}
                  className="property-card__img"
                  loading="lazy"
                />
                <span className="property-card__badge">
                  {property.type === 'venta' ? 'En Venta' : 'En Alquiler'}
                </span>
                <a
                  href={`https://wa.me/18298465843?text=Hola%20Lic.%20Leslie%2C%20me%20interesa%20la%20propiedad%20en%20${encodeURIComponent(property.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="property-card__overlay"
                >
                  <span className="property-card__overlay-btn">
                    Ver m&aacute;s &rarr;
                  </span>
                </a>
              </div>
              <div className="property-card__info">
                <div className="property-card__location">{property.location}</div>
                <div className="property-card__zone">{property.zone}</div>
                <div>
                  <span className="property-card__price">{property.price}</span>
                  <span className="property-card__currency">{property.currency}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="properties__cta">
          <MagneticButton
            href="https://wa.me/18298465843?text=Hola%20Lic.%20Leslie%2C%20me%20interesan%20las%20propiedades%20disponibles"
            className="btn-gold"
          >
            Ver Todas las Propiedades &rarr;
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
