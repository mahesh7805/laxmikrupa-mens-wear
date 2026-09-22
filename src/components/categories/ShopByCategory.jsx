import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { CATEGORIES_LIST } from '../../data/categories';
import './categories.css';

export const ShopByCategory = ({ onSelectCategory }) => {
  const handleCardClick = (catKey) => {
    if (onSelectCategory) {
      onSelectCategory(catKey === 'all' ? null : catKey);
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
    <section id="categories" className="mockup-categories reveal-on-scroll" aria-label="Shop By Category">
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="mockup-categories__header">
          <div>
            <span className="editorial-micro-label editorial-micro-label--mono">
              TAXONOMY // CURATED RETAIL
            </span>
            <h2 className="mockup-categories__title">
              Shop By Category
            </h2>
          </div>

          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleCardClick('all');
            }}
            className="mockup-categories__header-link"
          >
            <span>EXPLORE ALL CATEGORIES &amp; SUB-COLLECTIONS</span>
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </div>

        {/* 6 Category Cards Grid matching mockup */}
        <div className="mockup-categories__grid">
          {CATEGORIES_LIST.map((cat, index) => (
            <div
              key={cat.id}
              className="mockup-cat-card reveal-stagger-child"
              style={{ '--stagger': index }}
              onClick={() => handleCardClick(cat.categoryKey)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(cat.categoryKey);
                }
              }}
              aria-label={`Shop category ${cat.name}`}
            >
              <div className="mockup-cat-card__image-frame">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="mockup-cat-card__image"
                  loading="lazy"
                  width="280"
                  height="340"
                />
                <div className="mockup-cat-card__overlay" />
                
                <div className="mockup-cat-card__content">
                  <span className="mockup-cat-card__count">{cat.count}</span>
                  <h3 className="mockup-cat-card__name">{cat.name}</h3>
                  <span className="mockup-cat-card__subtext">{cat.subtext}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
