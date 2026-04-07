import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

const HERO_BG = 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?w=1920';
const LESLIE_PORTRAIT = '/images/leslie-hero.png';

const PREMIUM_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

type WordDef = { text: string; highlight?: boolean };

const heroWords: WordDef[] = [
  { text: 'Tu' },
  { text: 'Asesor' },
  { text: 'Legal' },
  { text: 'de' },
  { text: 'Confianza', highlight: true },
  { text: 'en' },
  { text: 'la' },
  { text: 'Rep\u00FAblica' },
  { text: 'Dominicana' },
];

function HeroTitle() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref}>
      <h1 className="hero__title" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}>
        {heroWords.map((word, i) => (
          <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.span
              style={{ display: 'inline-block' }}
              className={word.highlight ? 'highlight' : undefined}
              initial={{ y: '110%', rotate: 2 }}
              animate={isInView ? { y: 0, rotate: 0 } : { y: '110%', rotate: 2 }}
              transition={{
                duration: 0.85,
                delay: 0.4 + i * 0.07,
                ease: PREMIUM_EASE,
              }}
            >
              {word.text}
            </motion.span>
          </span>
        ))}
      </h1>
    </div>
  );
}

const chips = [
  'Servicios Legales',
  'Gesti\u00F3n Inmobiliaria',
  'Asesor\u00EDa Integral',
];

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.12]);
  const bgY = useTransform(scrollYProgress, [0, 0.4], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, 60]);

  return (
    <section className="hero" id="inicio">
      {/* Background con parallax */}
      <div className="hero__bg">
        <motion.img
          src={HERO_BG}
          alt="Ciudad moderna"
          style={{ scale: bgScale, y: bgY }}
        />
      </div>

      {/* Overlays */}
      <div className="hero__overlay" />
      <div className="hero__overlay-bottom" />

      {/* Retrato de Leslie */}
      <motion.div
        className="hero__portrait"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <img src={LESLIE_PORTRAIT} alt="Lic. Leslie Soriano" />
      </motion.div>

      {/* Contenido principal */}
      <motion.div
        className="hero__content"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="hero__eyebrow-line" />
          SLS &middot; Servicios Legales Soriano
        </motion.div>

        <HeroTitle />

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Servicios legales especializados y gesti&oacute;n inmobiliaria con m&aacute;s de 10 a&ntilde;os
          de experiencia protegiendo sus intereses en todo el territorio nacional.
        </motion.p>

        <motion.div
          className="hero__chips"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {chips.map((chip) => (
            <span key={chip} className="hero__chip">{chip}</span>
          ))}
        </motion.div>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <MagneticButton
            href="https://wa.me/18298465843?text=Hola%20Lic.%20Leslie%2C%20me%20interesa%20una%20consulta%20gratuita"
            className="btn-gold"
          >
            Consulta Gratuita &rarr;
          </MagneticButton>
          <MagneticButton href="#servicios" className="btn-outline">
            Ver Servicios
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </motion.div>

      {/* Info bar bottom */}
      <motion.div
        className="hero__info-bar"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <a href="tel:18298465843" className="hero__info-item">
          <span className="hero__info-icon">&#9742;</span>
          829.846.5843
        </a>
        <a href="mailto:info@sls.com.do" className="hero__info-item">
          <span className="hero__info-icon">&#9993;</span>
          info@sls.com.do
        </a>
        <a
          href="https://wa.me/18298465843"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__info-item"
        >
          <span className="hero__info-icon">&#128172;</span>
          WhatsApp
        </a>
        <span className="hero__info-item" style={{ marginLeft: 'auto' }}>
          <span className="hero__info-icon">&#128205;</span>
          Santo Domingo Este, Rep. Dom.
        </span>
      </motion.div>
    </section>
  );
}
