import React from 'react';
import { ArrowUp, WhatsappLogo, InstagramLogo, Phone, MapPin } from '@phosphor-icons/react';
import { useRoute } from '../../../../hooks/useRoute';
import './footer.css';

export const Footer = () => {
  const { navigate } = useRoute();

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, pathOrAnchor) => {
    e.preventDefault();
    if (pathOrAnchor.startsWith('#')) {
      navigate(pathOrAnchor);
    } else {
      navigate(pathOrAnchor);
    }
  };

  return (
    <footer className="mockup-footer" role="contentinfo">
      <div className="editorial-container">
        
        <div className="mockup-footer__grid">
          
          {/* Column 1: Brand Info */}
          <div className="mockup-footer__col-brand">
            <div className="mockup-footer__brand-title">LAXMIKRUPA</div>
            <div className="mockup-footer__brand-sub">EMPORIUM</div>
            <p className="mockup-footer__brand-desc">
              Surat's trusted destination for fine Indian ethnic menswear, tailored festive kurtas, and coordinated group mandali runs.
            </p>
            
            <div className="mockup-footer__social-links">
              <a
                href="https://wa.me/919512905629"
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-footer__social-btn"
                aria-label="WhatsApp Store"
              >
                <WhatsappLogo size={18} weight="fill" />
              </a>

              <a
                href="https://www.instagram.com/laxmi_krupa.541/"
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-footer__social-btn"
                aria-label="Instagram Profile"
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
                onClick={(e) => handleLinkClick(e, '#store-info')}
                className="mockup-footer__social-btn"
                aria-label="Store Location"
              >
                <MapPin size={18} weight="fill" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Collections */}
          <div className="mockup-footer__col">
            <span className="mockup-footer__heading">COLLECTIONS</span>
            <ul className="mockup-footer__list">
              <li>
                <a
                  href="/collections/kurtas"
                  onClick={(e) => handleLinkClick(e, '/collections/kurtas')}
                  className="mockup-footer__link"
                >
                  Solid &amp; Designer Kurtas
                </a>
              </li>
              <li>
                <a
                  href="/collections/kurta-pajamas"
                  onClick={(e) => handleLinkClick(e, '/collections/kurta-pajamas')}
                  className="mockup-footer__link"
                >
                  Kurta Pajama Sets
                </a>
              </li>
              <li>
                <a
                  href="/collections/shirts"
                  onClick={(e) => handleLinkClick(e, '/collections/shirts')}
                  className="mockup-footer__link"
                >
                  Casual Printed Shirts
                </a>
              </li>
              <li>
                <a
                  href="/collections/trousers"
                  onClick={(e) => handleLinkClick(e, '/collections/trousers')}
                  className="mockup-footer__link"
                >
                  Tailored Trousers
                </a>
              </li>
              <li>
                <a
                  href="/collections/festive-wear"
                  onClick={(e) => handleLinkClick(e, '/collections/festive-wear')}
                  className="mockup-footer__link"
                >
                  The Festive Edit
                </a>
              </li>
              <li>
                <a
                  href="/collections/kids"
                  onClick={(e) => handleLinkClick(e, '/collections/kids')}
                  className="mockup-footer__link"
                >
                  Kids &amp; Boys Ethnic Sets
                </a>
              </li>
              <li>
                <a
                  href="/collections/group-orders"
                  onClick={(e) => handleLinkClick(e, '/collections/group-orders')}
                  className="mockup-footer__link"
                  style={{ color: '#D4A017' }}
                >
                  Group / Bulk Mandali Runs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Store & Help */}
          <div className="mockup-footer__col">
            <span className="mockup-footer__heading">STORE &amp; SERVICE</span>
            <ul className="mockup-footer__list">
              <li>
                <a
                  href="#store-info"
                  onClick={(e) => handleLinkClick(e, '#store-info')}
                  className="mockup-footer__link"
                >
                  Store Location &amp; Map
                </a>
              </li>
              <li>
                <a
                  href="#store-info"
                  onClick={(e) => handleLinkClick(e, '#store-info')}
                  className="mockup-footer__link"
                >
                  Opening Hours (10 AM–9 PM)
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleLinkClick(e, '#why-us')}
                  className="mockup-footer__link"
                >
                  Tailoring &amp; Size Range (20–50)
                </a>
              </li>
              <li>
                <a
                  href="/collections/group-orders"
                  onClick={(e) => handleLinkClick(e, '/collections/group-orders')}
                  className="mockup-footer__link"
                >
                  Bulk Mandali Quotations
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="mockup-footer__link"
                >
                  Direct WhatsApp Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Surat Atelier */}
          <div className="mockup-footer__col">
            <span className="mockup-footer__heading">SURAT ATELIER</span>
            <div className="mockup-footer__contact-info">
              <p>11, 12, Moti Super Market, Danapith Rd,<br />Zampa Bazaar, Begampura,<br />Surat, Gujarat 395003, India</p>
              <p><strong>Primary Line:</strong> +91 95129 05629</p>
              <p><strong>Wholesale Line:</strong> +91 98254 05629</p>
              <p><strong>Store Hours:</strong> Mon–Sun 10:00 AM – 9:00 PM IST</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
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
