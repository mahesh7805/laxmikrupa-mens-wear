import React from 'react';
import { ArrowRight, Crown, Sparkle, UsersThree } from '@phosphor-icons/react';
import { getAssetPath } from '../../../../utils/assetPath';
import './festiveEdit.css';

export function FestiveEdit({ onExploreFestive }) {
  const handleScrollToCategories = () => {
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="festive-edit" className="c2-festive-section">
      <div className="c2-festive-banner">
        {/* Background Palace & Model Photo (100% Full-Bleed Edge-to-Edge) */}
        <img
          src={getAssetPath('/assets/concept-2/festive_edit_banner.jpg')}
          alt="The Festive Edit - Regal Traditional Kurta & Palace Setting"
          className="c2-festive-bg-img"
          loading="lazy"
        />

        {/* Dark Royal Gold/Espresso Scrim Overlay */}
        <div className="c2-festive-scrim" />

        {/* Banner Content Row */}
        <div className="c2-festive-content-wrap">
          {/* Left Model Spacer */}
          <div className="c2-festive-model-spacer" />

          {/* Center: Editorial Heading, Subtitle & CTA */}
          <div className="c2-festive-center">
            <h2 className="c2-festive-title">The Festive Edit</h2>
            <p className="c2-festive-subtitle">Traditional roots. Modern expressions.</p>

            <button
              type="button"
              className="c2-festive-btn"
              onClick={handleScrollToCategories}
            >
              <span>Explore Festive Collection</span>
              <ArrowRight size={15} weight="bold" />
            </button>
          </div>

          {/* Vertical Divider */}
          <div className="c2-festive-divider" />

          {/* Right: 3 Occasion Pillars with Gold Icons */}
          <div className="c2-festive-occasions">
            <div className="c2-occasion-item">
              <div className="c2-occasion-icon">
                <UsersThree size={32} weight="light" />
              </div>
              <span>Weddings</span>
            </div>

            <div className="c2-occasion-col-divider" />

            <div className="c2-occasion-item">
              <div className="c2-occasion-icon">
                <Sparkle size={30} weight="light" />
              </div>
              <span>Festivals</span>
            </div>

            <div className="c2-occasion-col-divider" />

            <div className="c2-occasion-item">
              <div className="c2-occasion-icon">
                <Crown size={30} weight="light" />
              </div>
              <span>Special Occasions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
