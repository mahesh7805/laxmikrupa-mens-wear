import React from 'react';
import { ArrowUpRight, Sparkle } from '@phosphor-icons/react';
import './festive.css';

export const FestiveBanner = ({ onExploreFestive }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onExploreFestive) {
      onExploreFestive('festive-group-orders');
    }
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(catalogEl, { offset: -70 });
      } else {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="festive-edit" className="mockup-festive-banner reveal-on-scroll" aria-label="The Festive Edit Promotional Banner">
      <div className="editorial-container mockup-festive-banner__inner">
        
        {/* Left Text Block */}
        <div className="mockup-festive-banner__content">
          <div className="mockup-festive-banner__tag">
            <Sparkle size={14} weight="fill" color="#D4A017" />
            <span>SPECIALIZED GROUP &amp; MANDALI RUNS</span>
          </div>
          <h2 className="mockup-festive-banner__title">
            The Festive Edit
          </h2>
          <p className="mockup-festive-banner__desc">
            Coordinated matching kurtas and family dress codes for Ganesh Utsav, Navratri, and Wedding Baraats. Custom runs from 10 to 500+ pieces in Surat.
          </p>
        </div>

        {/* Right Action Button matching Mockup */}
        <div className="mockup-festive-banner__action">
          <a
            href="#catalog"
            onClick={handleClick}
            className="mockup-festive-banner__btn"
          >
            <span>EXPLORE FESTIVE COLLECTION</span>
            <ArrowUpRight size={18} weight="bold" />
          </a>
        </div>

      </div>
    </section>
  );
};
