import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealText from '../components/RevealText';

const LESLIE_PROFILE = '/images/leslie-about.png';

const mvvData = [
  {
    title: 'Misi\u00F3n',
    text: 'Brindar servicios legales de alta calidad orientados a satisfacer las necesidades de nuestros clientes.',
  },
  {
    title: 'Visi\u00F3n',
    text: 'Ser referentes en servicios legales y gesti\u00F3n inmobiliaria en la Rep\u00FAblica Dominicana.',
  },
  {
    title: 'Valores',
    text: 'Transparencia, compromiso, excelencia y dedicaci\u00F3n total a cada caso que asumimos.',
  },
];

export default function AboutSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const imgInView = useInView(imgRef, { once: true, amount: 0.3 });

  return (
    <section className="about" id="nosotros">
      <div className="container">
        <div className="about__grid">
          {/* Imagen con clip reveal */}
          <div ref={imgRef}>
            <motion.div
              className="about__img-wrap"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={imgInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            >
              <img
                src={LESLIE_PROFILE}
                alt="Lic. Leslie Soriano"
                className="about__img"
              />
              <div className="about__badge">
                &#9878;&#65039; Lic. Leslie Soriano &middot; Abogada
              </div>
            </motion.div>
          </div>

          {/* Texto */}
          <div className="about__text">
            <motion.div
              className="section-eyebrow"
              style={{ justifyContent: 'flex-start' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {'Qui\u00E9nes Somos'}
            </motion.div>
            <RevealText tag="h2" className="section-title" style={{ textAlign: 'left' }}>
              Servicios Legales Soriano
            </RevealText>
            <div className="gold-line gold-line--left" />

            <motion.p
              className="about__body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              En SLS nos dedicamos a brindar servicios de alta calidad orientados
              a satisfacer las necesidades de nuestros clientes y lograr soluciones
              efectivas en cada caso que asumimos. Con m&aacute;s de 10 a&ntilde;os de experiencia,
              ofrecemos una asesor&iacute;a integral que abarca desde lo civil y comercial
              hasta la gesti&oacute;n inmobiliaria.
            </motion.p>
            <motion.p
              className="about__body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Nuestra divisi&oacute;n de gesti&oacute;n inmobiliaria le acompa&ntilde;a en cada paso
              del proceso: ya sea comprar, vender o alquilar una propiedad,
              garantizamos transparencia y seguridad jur&iacute;dica en cada transacci&oacute;n.
            </motion.p>

            <motion.div
              className="about__mvv"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {mvvData.map((item) => (
                <div key={item.title} className="mvv-card">
                  <h4 className="mvv-card__title">{item.title}</h4>
                  <p className="mvv-card__text">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
