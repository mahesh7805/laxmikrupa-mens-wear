import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
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
        {/* Left Column: Editorial Headline & Actions */}
        <div className="c2-hero-left">
          <span className="c2-hero-eyebrow">STYLE • COMFORT • CONFIDENCE</span>

          <h1 className="c2-hero-title">
            For Every<br />
            <em>Occasion</em>
          </h1>

          <p className="c2-hero-description">
            From everyday essentials to festive dressing, discover men's wear made for workdays, weekends and everything in between.
          </p>

          <div className="c2-hero-ctas">
            <button
              type="button"
              className="c2-btn-primary"
              onClick={() => handleScrollTo('categories')}
            >
              <span>Explore Collections</span>
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>

          <div className="c2-hero-features-row">
            <div className="c2-hero-feature-item">
              <strong>EVERYDAY</strong>
              <span>ESSENTIALS</span>
            </div>
            <div className="c2-hero-feature-item">
              <strong>FESTIVE</strong>
              <span>COLLECTIONS</span>
            </div>
            <div className="c2-hero-feature-item">
              <strong>GROUP &amp; BULK</strong>
              <span>ORDERS</span>
            </div>
          </div>
        </div>

        {/* Center & Right Visual Collage */}
        <div className="c2-hero-visual-grid">
          {/* Main Tall Center Image */}
          <div className="c2-hero-card c2-hero-card-main">
            <img
              src={getAssetPath('/assets/concept-2/hero-main-wide-v2.jpg')}
              alt="Laxmikrupa Men's Wear - Contemporary Everyday Collection"
              loading="eager"
            />
          </div>

          {/* Right Visual Stack */}
          <div className="c2-hero-right-stack">
            {/* Top Right Card: Festive Moments */}
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
                <ArrowRight size={14} weight="bold" />
              </div>
            </div>

            {/* Bottom Split Row */}
            <div className="c2-hero-bottom-split">
              {/* Everyday Essentials */}
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

              {/* Casual Comfort (Jeans/Denim) */}
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
                  <ArrowRight size={13} weight="bold" />
                </div>
              </div>
            </div>
          </div>

          {/* Far Right Calligraphic Editorial Accent */}
          <div className="c2-hero-editorial-accent">
            <div className="c2-accent-serif">
              <span>More</span>
              <span>than just</span>
              <span>clothing.</span>
            </div>
            <div className="c2-accent-script">
              It's a feeling.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
