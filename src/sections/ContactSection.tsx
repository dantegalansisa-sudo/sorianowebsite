import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { services } from '../data/services';

const contactInfo = [
  { icon: '\u{1F4CD}', label: 'Direcci\u00F3n', value: 'Calle J. No. 7, Res. Amarilis III, Autopista San Isidro, SDE' },
  { icon: '\u{1F4F1}', label: 'Tel\u00E9fono', value: '829.846.5843', href: 'tel:18298465843' },
  { icon: '\u{1F4E7}', label: 'Email', value: 'info@sls.com.do', href: 'mailto:info@sls.com.do' },
  { icon: '\u{1F4AC}', label: 'WhatsApp', value: 'Escr\u00EDbenos ahora', href: 'https://wa.me/18298465843' },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const text = `Hola Lic. Leslie, soy ${form.nombre}.%0ATel\u00E9fono: ${form.telefono}%0AServicio: ${form.servicio}%0AMensaje: ${form.mensaje}`;
    window.open(`https://wa.me/18298465843?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact__grid">
          {/* Columna izquierda */}
          <div>
            <div className="section-eyebrow">Cont&aacute;ctenos</div>
            <RevealText tag="h2" className="section-title">
              Solicite Su Consulta
            </RevealText>
            <p className="section-subtitle">
              Estamos listos para asistirle. Comun&iacute;quese con nosotros
              y reciba asesor&iacute;a legal profesional.
            </p>

            <motion.div
              className="contact__info-list"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {contactInfo.map((item) => {
                const Wrapper = item.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={item.label}
                    className="contact__info-item"
                    {...(item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {})}
                  >
                    <span className="contact__info-icon">{item.icon}</span>
                    <div>
                      <span className="contact__info-label">{item.label}</span>
                      <span className="contact__info-value">{item.value}</span>
                    </div>
                  </Wrapper>
                );
              })}
            </motion.div>

            <motion.div
              className="contact__socials"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://wa.me/18298465843"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                title="WhatsApp"
              >
                &#128172;
              </a>
              <a
                href="https://instagram.com/sls.servicioslegales"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                title="Instagram"
              >
                &#128247;
              </a>
              <a
                href="https://facebook.com/SLSServiciosLegalesSoriano"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                title="Facebook"
              >
                f
              </a>
            </motion.div>
          </div>

          {/* Columna derecha - Formulario */}
          <motion.div
            className="contact__form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="contact__form-group">
              <label className="contact__label">Nombre Completo</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Su nombre completo"
                className="contact__input"
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__label">Tel&eacute;fono / WhatsApp</label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="809-000-0000"
                className="contact__input"
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__label">Servicio de Inter&eacute;s</label>
              <select
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                className="contact__select"
              >
                <option value="">Seleccione un servicio</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="contact__form-group">
              <label className="contact__label">Mensaje</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Describa brevemente su consulta..."
                className="contact__textarea"
              />
            </div>
            <MagneticButton
              className="btn-gold"
              onClick={handleSubmit}
            >
              Enviar Consulta por WhatsApp &rarr;
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
