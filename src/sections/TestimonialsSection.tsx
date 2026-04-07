import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Mar\u00EDa Gonz\u00E1lez',
    role: 'Compra de inmueble',
    text: 'La Lic. Leslie me acompa\u00F1\u00F3 en todo el proceso de compra de mi apartamento. Su profesionalismo y transparencia me dieron total confianza. Recomendada al 100%.',
    rating: 5,
  },
  {
    name: 'Carlos Ram\u00EDrez',
    role: 'Caso de derecho familiar',
    text: 'Excelente servicio en mi caso de divorcio. Todo fue manejado con discre\u00ADci\u00F3n y eficiencia. El equipo de SLS siempre estuvo disponible para responder mis dudas.',
    rating: 5,
  },
  {
    name: 'Ana Mart\u00EDnez',
    role: 'Registro mercantil',
    text: 'Gracias a SLS pude registrar mi empresa sin complicaciones. Me guiaron paso a paso con todos los documentos y tr\u00E1mites necesarios. Servicio impecable.',
    rating: 5,
  },
  {
    name: 'Roberto Pe\u00F1a',
    role: 'Asesor\u00EDa inmobiliaria',
    text: 'Vend\u00ED mi propiedad a trav\u00E9s de SLS y el proceso fue r\u00E1pido y seguro. La Lic. Soriano se asegur\u00F3 de que cada detalle legal estuviera cubierto.',
    rating: 5,
  },
  {
    name: 'Laura Hern\u00E1ndez',
    role: 'Rectificaci\u00F3n de acta',
    text: 'Ten\u00EDa un problema con mi acta de nacimiento que arrastraba por a\u00F1os. SLS lo resolvi\u00F3 en tiempo r\u00E9cord. Muy agradecida por su dedicaci\u00F3n.',
    rating: 5,
  },
];

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <div className="section-header">
          <motion.div
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Testimonios
          </motion.div>
          <RevealText tag="h2" className="section-title">
            Lo Que Dicen Nuestros Clientes
          </RevealText>
          <p className="section-subtitle">
            La confianza de nuestros clientes es nuestro mayor logro.
          </p>
        </div>

        <div className="testimonials__carousel">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              className="testimonials__card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="testimonials__star">&#9733;</span>
                ))}
              </div>
              <blockquote className="testimonials__text">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="testimonials__name">{t.name}</div>
                  <div className="testimonials__role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__nav">
            <button
              className="testimonials__btn"
              onClick={() => paginate(-1)}
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="testimonials__btn"
              onClick={() => paginate(1)}
              aria-label="Siguiente"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
