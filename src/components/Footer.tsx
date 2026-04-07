export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Logo column */}
          <div>
            <div className="footer__logo-name">Leslie Soriano</div>
            <div className="footer__logo-sub">
              Servicios Legales &middot; Gesti&oacute;n Inmobiliaria
            </div>
            <p className="footer__desc">
              Servicios legales especializados y gesti&oacute;n inmobiliaria
              con compromiso, transparencia y excelencia profesional.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="footer__col-title">Empresa</h4>
            <ul className="footer__links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#propiedades">Propiedades</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="footer__col-title">Servicios</h4>
            <ul className="footer__links">
              <li><a href="#servicios">Asesor&iacute;a Civil</a></li>
              <li><a href="#servicios">Asuntos Inmobiliarios</a></li>
              <li><a href="#servicios">Derecho Familiar</a></li>
              <li><a href="#servicios">Consultor&iacute;a Comercial</a></li>
              <li><a href="#servicios">Derecho Penal</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__links">
              <li><a href="tel:18298465843">829.846.5843</a></li>
              <li><a href="mailto:info@sls.com.do">info@sls.com.do</a></li>
              <li>
                <a
                  href="https://wa.me/18298465843"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#contacto">
                  Calle J. No. 7, SDE
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; 2025 SLS &middot; Servicios Legales Soriano &middot;{' '}
            <a href="mailto:info@sls.com.do">info@sls.com.do</a>
            {' '}&middot; Desarrollado por{' '}
            <a href="https://nexix.tech" target="_blank" rel="noopener noreferrer">
              NEXIX Tech Studio
            </a>
          </span>

          <div className="footer__socials">
            <a
              href="https://wa.me/18298465843"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="WhatsApp"
            >
              &#128172;
            </a>
            <a
              href="https://instagram.com/sls.servicioslegales"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="Instagram"
            >
              &#128247;
            </a>
            <a
              href="https://facebook.com/SLSServiciosLegalesSoriano"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              title="Facebook"
            >
              f
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
