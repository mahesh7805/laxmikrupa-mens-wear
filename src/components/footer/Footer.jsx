import React from 'react';
import { ArrowUp, WhatsappLogo, InstagramLogo, Phone, MapPin } from '@phosphor-icons/react';
import './footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="mockup-footer" role="contentinfo">
      <div className="editorial-container">
        
        <div className="mockup-footer__grid">
          
          {/* Column 1: Brand Info */}
          <div className="mockup-footer__col-brand">
            <div className="mockup-footer__brand-title">LAXMIKRUPA</div>
            <div className="mockup-footer__brand-sub">EMPORIUM // MEN'S WEAR</div>
            <p className="mockup-footer__brand-desc">
              Surat's trusted destination for fine Indian ethnic menswear, tailored festive kurtas, and coordinated group mandali runs.
            </p>
            
            <div className="mockup-footer__social-links">
              <a
                href="https://wa.me/919512905629"
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-footer__social-btn"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={18} weight="fill" />
              </a>

              <a
                href="https://www.instagram.com/laxmi_krupa.541/"
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-footer__social-btn"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} weight="fill" />
              </a>

              <a
                href="tel:+919512905629"
                className="mockup-footer__social-btn"
                aria-label="Call Store"
              >
                <Phone size={18} weight="fill" />
              </a>

              <a
                href="#store-info"
                className="mockup-footer__social-btn"
                aria-label="Store Location"
              >
                <MapPin size={18} weight="fill" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Categories */}
          <div className="mockup-footer__col">
            <span className="mockup-footer__heading">SHOP</span>
            <ul className="mockup-footer__list">
              <li><a href="#catalog" className="mockup-footer__link">Ethnic Wear &amp; Kurtas</a></li>
              <li><a href="#catalog" className="mockup-footer__link">Kurta Pajama Sets</a></li>
              <li><a href="#catalog" className="mockup-footer__link">Casual Printed Shirts</a></li>
              <li><a href="#catalog" className="mockup-footer__link">Tailored Trousers</a></li>
              <li><a href="#festive-edit" className="mockup-footer__link">Festive &amp; Group Orders</a></li>
              <li><a href="#catalog" className="mockup-footer__link">Boys &amp; Kids Sets</a></li>
            </ul>
          </div>

          {/* Column 3: Help & Store Info */}
          <div className="mockup-footer__col">
            <span className="mockup-footer__heading">STORE &amp; HELP</span>
            <ul className="mockup-footer__list">
              <li><a href="#store-info" className="mockup-footer__link">Store Location &amp; Map</a></li>
              <li><a href="#store-info" className="mockup-footer__link">Opening Hours (10 AM–9 PM)</a></li>
              <li><a href="#why-us" className="mockup-footer__link">Size Range: 20 to 50</a></li>
              <li><a href="#festive-edit" className="mockup-footer__link">Bulk Mandali Quotations</a></li>
              <li><a href="#contact" className="mockup-footer__link">WhatsApp Assistance</a></li>
            </ul>
          </div>

          {/* Column 4: Surat Atelier */}
          <div className="mockup-footer__col">
            <span className="mockup-footer__heading">SURAT ATELIER</span>
            <div className="mockup-footer__contact-info">
              <p>Cinema Road / Station Road Area<br />Surat, Gujarat 395003, India</p>
              <p><strong>Primary Line:</strong> +91 95129 05629</p>
              <p><strong>Wholesale Line:</strong> +91 98254 05629</p>
              <p><strong>Store Hours:</strong> Mon–Sun 10:00 AM – 9:00 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching Mockup */}
        <div className="mockup-footer__bottom">
          <div className="mockup-footer__copyright">
            © {new Date().getFullYear()} Laxmikrupa Emporium. High-Fidelity Client Prototype.
          </div>

          <button
            type="button"
            className="mockup-footer__back-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back To Top</span>
            <ArrowUp size={15} weight="bold" />
          </button>
        </div>

      </div>
    </footer>
  );
};
