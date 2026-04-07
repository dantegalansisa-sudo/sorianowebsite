import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#propiedades', label: 'Propiedades' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="navbar__container">
        <a href="#inicio" className="navbar__logo">
          <span className="navbar__logo-name">LESLIE SORIANO</span>
          <span className="navbar__logo-sub">Servicios Legales &middot; Inmobiliaria</span>
        </a>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/18298465843?text=Hola%20Lic.%20Leslie%2C%20me%20interesa%20una%20consulta%20gratuita"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta navbar__cta-desktop"
        >
          Consulta Gratis &rarr;
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            style={{
              transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span
            style={{
              transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/18298465843?text=Hola%20Lic.%20Leslie%2C%20me%20interesa%20una%20consulta%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__mobile-link"
              style={{ color: '#C9A84C', fontWeight: 600 }}
              onClick={() => setMobileOpen(false)}
            >
              Consulta Gratis &rarr;
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
