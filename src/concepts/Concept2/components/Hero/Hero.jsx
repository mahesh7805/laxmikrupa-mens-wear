import React from 'react';
import { ArrowUpRight, ArrowRight } from '@phosphor-icons/react';
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
      <div className="concept2-container c2-hero-container">
        {/* Left: Stretched Panoramic Hero Banner */}
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

        {/* Right: 3-Image Stack matching reference */}
        <div className="c2-hero-right-stack">
          {/* Top Card: Festive Moments */}
          <div
            className="c2-hero-card c2-hero-card-top"
            onClick={() => handleScrollTo('festive-edit')}
          >
            <img
              src={getAssetPath('/assets/concept-2/hero-festive.jpg')}
              alt="Festive Moments - Handcrafted Kurta"
            />
            <div className="c2-hero-card-overlay">
              <span>Festive Moments</span>
            </div>
          </div>

          {/* Bottom Split Row (Everyday Essentials + Casual Comfort) */}
          <div className="c2-hero-bottom-split">
            {/* Left Split Card: Everyday Essentials */}
            <div
              className="c2-hero-card c2-hero-card-split"
              onClick={() => handleScrollTo('new-arrivals')}
            >
              <img
                src={getAssetPath('/assets/concept-2/hero-everyday.jpg')}
                alt="Everyday Essentials"
              />
              <div className="c2-hero-card-overlay">
                <span>Everyday Essentials</span>
                <ArrowRight size={13} weight="bold" />
              </div>
            </div>

            {/* Right Split Card: Casual Comfort */}
            <div
              className="c2-hero-card c2-hero-card-split"
              onClick={() => handleScrollTo('categories')}
            >
              <img
                src={getAssetPath('/assets/concept-2/hero-casual.jpg')}
                alt="Casual Comfort Denim and Trousers"
              />
              <div className="c2-hero-card-overlay">
                <span>Casual Comfort</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
