import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { properties } from '../data/properties';
import MagneticButton from '../components/MagneticButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollProgress from '../components/ScrollProgress';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="pd__not-found">
          <h2>Propiedad no encontrada</h2>
          <Link to="/" className="btn-gold">Volver al inicio</Link>
        </div>
        <Footer />
      </>
    );
  }

  const otherProperties = properties.filter((p) => p.id !== id).slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />

      <section className="pd">
        <div className="container">
          {/* Breadcrumb */}
          <motion.div
            className="pd__breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">Inicio</Link>
            <span>/</span>
            <Link to="/#propiedades">Propiedades</Link>
            <span>/</span>
            <span>{property.zone}</span>
          </motion.div>

          {/* Main image */}
          <motion.div
            className="pd__hero"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <img src={property.image} alt={property.zone} className="pd__hero-img" />
            <span className="pd__badge">
              {property.type === 'venta' ? 'En Venta' : 'En Alquiler'}
            </span>
          </motion.div>

          <div className="pd__content">
            {/* Left: details */}
            <motion.div
              className="pd__details"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="pd__location">{property.location}</div>
              <h1 className="pd__title">{property.zone}</h1>
              <div className="pd__price">
                <span className="pd__price-value">{property.price}</span>
                <span className="pd__price-currency">{property.currency}</span>
              </div>

              {/* Quick stats */}
              {(property.bedrooms || property.bathrooms || property.area) && (
                <div className="pd__stats">
                  {property.bedrooms && (
                    <div className="pd__stat">
                      <span className="pd__stat-icon">&#128716;</span>
                      <span>{property.bedrooms} Hab.</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="pd__stat">
                      <span className="pd__stat-icon">&#128703;</span>
                      <span>{property.bathrooms} Ba&ntilde;os</span>
                    </div>
                  )}
                  {property.area && (
                    <div className="pd__stat">
                      <span className="pd__stat-icon">&#128207;</span>
                      <span>{property.area}</span>
                    </div>
                  )}
                </div>
              )}

              <p className="pd__description">{property.description}</p>

              <h3 className="pd__features-title">{'Caracter\u00EDsticas'}</h3>
              <ul className="pd__features">
                {property.features.map((f) => (
                  <li key={f} className="pd__feature">
                    <span className="pd__feature-check">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: CTA card */}
            <motion.div
              className="pd__cta-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            >
              <h3 className="pd__cta-title">{'\u00BFInteresado en esta propiedad?'}</h3>
              <p className="pd__cta-text">
                {'Cont\u00E1ctenos para obtener m\u00E1s informaci\u00F3n o agendar una visita.'}
              </p>
              <MagneticButton
                href={`https://wa.me/18298465843?text=${encodeURIComponent(`Hola Lic. Leslie, me interesa la propiedad ${property.zone} en ${property.location} (${property.price} ${property.currency})`)}`}
                className="btn-gold"
              >
                Consultar por WhatsApp &rarr;
              </MagneticButton>
              <a href="tel:18298465843" className="pd__cta-phone">
                &#9742; Llamar: 829.846.5843
              </a>
            </motion.div>
          </div>

          {/* Other properties */}
          <motion.div
            className="pd__related"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="pd__related-title">Otras Propiedades</h3>
            <div className="pd__related-grid">
              {otherProperties.map((p) => (
                <Link key={p.id} to={`/propiedad/${p.id}`} className="pd__related-card">
                  <img src={p.image} alt={p.zone} className="pd__related-img" />
                  <div className="pd__related-info">
                    <div className="pd__related-zone">{p.zone}</div>
                    <div className="pd__related-price">{p.price} {p.currency}</div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
