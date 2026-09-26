import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { getAssetPath } from '../../../../utils/assetPath';
import './hero.css';

export function Hero({ onExploreClick, onShopClick }) {
  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="c2-hero-section">
      <div className="concept2-container">
        {/* Full-width Panoramic Hero Banner matching reference */}
        <div className="c2-hero-banner">
          {/* Main Tall Standing Model Photo stretched across right & center */}
          <img
            src={getAssetPath('/assets/concept-2/hero-main-wide-final.jpg')}
            alt="Laxmikrupa Men's Wear - Contemporary Everyday Collection"
            className="c2-hero-banner-img"
            loading="eager"
          />

          {/* Warm Ivory/Cream Gradient Fade Scrim for Left Text Readability */}
          <div className="c2-hero-banner-fade" />

          {/* Left-Aligned Editorial Text Content */}
          <div className="c2-hero-banner-content">
            <span className="c2-hero-eyebrow">
              LAXMIKRUPA EMPORIUM // MEN'S WEAR // SURAT
            </span>

            <h1 className="c2-hero-title">
              Style for<br />
              <em>every side of you.</em>
            </h1>

            <p className="c2-hero-description">
              From everyday essentials to festive dressing, discover men's wear made for workdays, weekends and everything in between.
            </p>

            <div className="c2-hero-ctas">
              <button
                type="button"
                className="c2-btn-dark"
                onClick={() => handleScrollTo('new-arrivals')}
              >
                <span>Shop Men's Wear</span>
                <ArrowUpRight size={16} weight="bold" />
              </button>

              <button
                type="button"
                className="c2-btn-outline"
                onClick={() => handleScrollTo('categories')}
              >
                <span>Explore Collections</span>
              </button>
            </div>

            <div className="c2-hero-features-row">
              <div className="c2-hero-feature-item">
                <strong>EVERYDAY</strong>
                <span>ESSENTIALS</span>
              </div>
              <div className="c2-hero-feature-divider" />
              <div className="c2-hero-feature-item">
                <strong>FESTIVE</strong>
                <span>COLLECTIONS</span>
              </div>
              <div className="c2-hero-feature-divider" />
              <div className="c2-hero-feature-item">
                <strong>GROUP &amp; BULK</strong>
                <span>ORDERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
