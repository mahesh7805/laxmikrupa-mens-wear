import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { getAssetPath } from '../../../../utils/assetPath';
import './whoWeAre.css';

export function WhoWeAre() {
  const handleScrollToStore = () => {
    const el = document.getElementById('store-locator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="who-we-are" className="c2-who-section">
      <div className="concept2-container c2-who-container">
        {/* Left Column: Story & Philosophy */}
        <div className="c2-who-left">
          <div className="c2-numbered-header">
            <h2 className="c2-heading">Who We Are</h2>
            <div className="c2-subtitle">TRADITION MEETS TODAY</div>
          </div>

          <p className="c2-who-text">
            Laxmikrupa Men's Wear is a Surat-based brand that believes in timeless style, quality fabrics and honest service. We curate men's fashion that blends tradition with modern trends, so you always look and feel your best.
          </p>

          <button
            type="button"
            className="c2-btn-outline"
            onClick={handleScrollToStore}
          >
            <span>Our Story</span>
            <ArrowRight size={15} weight="bold" />
          </button>
        </div>

        {/* Right Column: Visual Collage & Heritage Script */}
        <div className="c2-who-right">
          <div className="c2-who-photos-grid">
            {/* Hanging Racks Photo */}
            <div className="c2-who-photo-card c2-who-rack-photo">
              <img
                src={getAssetPath('/assets/concept-2/hero_hanging_fabrics.jpg')}
                alt="Curated ethnic garments on wooden hangers at Laxmikrupa"
                loading="lazy"
              />
            </div>

            {/* Fabric Macro with Woven Label */}
            <div className="c2-who-photo-card c2-who-label-photo">
              <img
                src={getAssetPath('/assets/concept-2/fabric_macro.jpg')}
                alt="Laxmikrupa artisanal woven fabric detail and label"
                loading="lazy"
              />
              <div className="c2-who-label-overlay">
                <span>LAXMIKRUPA</span>
              </div>
            </div>
          </div>

          {/* Calligraphic Heritage Script */}
          <div className="c2-who-script-wrap">
            <div className="c2-who-script-text">
              Surat's<br />
              heritage.<br />
              Your style.
            </div>
            <div className="c2-who-script-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
