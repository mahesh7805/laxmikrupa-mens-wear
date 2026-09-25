import React, { useState } from 'react';
import { ArrowUpRight, Sparkle } from '@phosphor-icons/react';
import { CATEGORIES } from '../../data/categories';
import { useRoute } from '../../../../hooks/useRoute';
import { getAssetPath } from '../../../../utils/assetPath';
import './categories.css';

export const ShopByCategory = () => {
  const { navigate } = useRoute();
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const handleCategoryClick = (slug) => {
    navigate(`/collections/${slug}`);
  };

  return (
    <section
      id="categories"
      className="mockup-categories reveal-on-scroll"
      aria-label="Explore Our Collections"
    >
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="mockup-categories__header">
          <div className="mockup-categories__header-title-group">
            <div className="editorial-micro-label editorial-micro-label--mono">
              <span>EXPLORE BY CATEGORY // SURAT ATELIER</span>
            </div>
            <h2 className="mockup-categories__title">
              Curated Collections &amp; Disciplines
            </h2>
            <p className="mockup-categories__subtitle">
              From festive ethnic ensembles and wedding mandalis to everyday breathable cotton shirts — discover the breadth of Laxmikrupa’s tailoring.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/collections')}
            className="mockup-categories__header-link"
          >
            <span>VIEW ALL COLLECTIONS</span>
            <ArrowUpRight size={16} weight="bold" />
          </button>
        </div>

        {/* Dynamic Category Cards Grid */}
        <div
          className={`mockup-categories__grid ${
            hoveredSlug ? 'mockup-categories__grid--has-hover' : ''
          }`}
        >
          {CATEGORIES.map((cat, index) => {
            const isHovered = hoveredSlug === cat.slug;
            return (
              <article
                key={cat.slug}
                className={`mockup-cat-card reveal-stagger-child ${
                  isHovered ? 'mockup-cat-card--hovered' : ''
                }`}
                style={{ '--stagger': index % 3 }}
                onClick={() => handleCategoryClick(cat.slug)}
                onMouseEnter={() => setHoveredSlug(cat.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCategoryClick(cat.slug);
                  }
                }}
                aria-label={`Explore ${cat.name} collection`}
              >
                <div className="mockup-cat-card__image-frame">
                  <img
                    src={getAssetPath(cat.image)}
                    alt={cat.name}
                    className="mockup-cat-card__image"
                    loading="lazy"
                    width="380"
                    height="460"
                  />
                  <div className="mockup-cat-card__overlay" />
                  
                  {/* Subtle Badge */}
                  <div className="mockup-cat-card__badge">
                    <span className="mockup-cat-card__count">{cat.count}</span>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="mockup-cat-card__content">
                    <div className="mockup-cat-card__eyebrow">
                      {cat.isSpecialInquiry ? 'SPECIAL BULK RUNS' : `COLLECTION 0${index + 1}`}
                    </div>
                    
                    <h3 className="mockup-cat-card__name">{cat.name}</h3>
                    
                    <p className="mockup-cat-card__tagline">{cat.tagline}</p>

                    {/* Revealable metadata & Explore CTA */}
                    <div className="mockup-cat-card__cta-row">
                      <span className="mockup-cat-card__cta-text">
                        <span>Explore Collection</span>
                        <ArrowUpRight size={15} weight="bold" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
