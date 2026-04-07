import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: '\u00BFCu\u00E1nto cuesta una consulta inicial?',
    answer: 'Ofrecemos una primera consulta totalmente gratuita. En ella evaluamos su caso y le orientamos sobre los pasos a seguir sin ning\u00FAn compromiso.',
  },
  {
    question: '\u00BFQu\u00E9 documentos necesito para una compra de inmueble?',
    answer: 'Generalmente necesitar\u00E1 su c\u00E9dula de identidad, comprobante de ingresos, y el certificado de t\u00EDtulo de la propiedad. En la consulta inicial le detallamos todos los requisitos seg\u00FAn su caso espec\u00EDfico.',
  },
  {
    question: '\u00BFCu\u00E1nto tarda un proceso de divorcio?',
    answer: 'Un divorcio por mutuo consentimiento puede tomar entre 60 y 90 d\u00EDas. Los divorcios contenciosos var\u00EDan seg\u00FAn la complejidad del caso. Le acompa\u00F1amos en cada etapa del proceso.',
  },
  {
    question: '\u00BFOfrecen servicios fuera de Santo Domingo?',
    answer: 'S\u00ED, ofrecemos servicios legales en todo el territorio nacional de la Rep\u00FAblica Dominicana, incluyendo Punta Cana, Santiago, y otras provincias.',
  },
  {
    question: '\u00BFC\u00F3mo puedo agendar una cita?',
    answer: 'Puede contactarnos por WhatsApp al 829.846.5843, llamarnos directamente, o llenar el formulario de contacto en nuestra p\u00E1gina. Le responderemos en menos de 24 horas.',
  },
  {
    question: '\u00BFQu\u00E9 tipos de propiedades gestionan?',
    answer: 'Gestionamos apartamentos, casas, solares, locales comerciales y propiedades en proyectos residenciales. Tanto para venta como para alquiler en las mejores ubicaciones del pa\u00EDs.',
  },
];

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <motion.div
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Preguntas Frecuentes
          </motion.div>
          <RevealText tag="h2" className="section-title">
            Resolvemos Sus Dudas
          </RevealText>
          <p className="section-subtitle">
            Encuentre respuestas a las preguntas m&aacute;s comunes sobre nuestros servicios.
          </p>
        </div>

        <motion.div
          className="faq__list"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <span className="faq__icon">{openIndex === i ? '\u2212' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    className="faq__answer-wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <p className="faq__answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
