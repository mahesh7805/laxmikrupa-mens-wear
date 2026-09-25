import React from 'react';
import { ArrowRight, Sparkle, Sparkle as StarIcon, Confetti, Crown } from '@phosphor-icons/react';
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
      <div className="concept2-container">
        <div className="c2-festive-banner">
          {/* Left: Festive Portrait */}
          <div className="c2-festive-image-wrap">
            <img
              src={getAssetPath('/assets/concept-2/ethnic_wear_category.jpg')}
              alt="The Festive Edit - Regal Traditional Kurta"
              loading="lazy"
            />
          </div>

          {/* Center: Editorial Heading & CTA */}
          <div className="c2-festive-center">
            <h2 className="c2-festive-title">The Festive Edit</h2>
            <p className="c2-festive-subtitle">Traditional roots. Modern expressions.</p>

            <button
              type="button"
              className="c2-btn-outline-gold"
              onClick={handleScrollToCategories}
            >
              <span>Explore Festive Collection</span>
              <ArrowRight size={15} weight="bold" />
            </button>
          </div>

          {/* Right: 3 Occasion Pillars */}
          <div className="c2-festive-occasions">
            <div className="c2-occasion-item">
              <div className="c2-occasion-icon">
                <Crown size={28} weight="light" />
              </div>
              <span>Weddings</span>
            </div>

            <div className="c2-occasion-item">
              <div className="c2-occasion-icon">
                <Sparkle size={28} weight="light" />
              </div>
              <span>Festivals</span>
            </div>

            <div className="c2-occasion-item">
              <div className="c2-occasion-icon">
                <StarIcon size={28} weight="light" />
              </div>
              <span>Special Occasions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
