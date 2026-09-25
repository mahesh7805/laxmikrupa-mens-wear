import React from 'react';
import { ArrowUpRight, CheckCircle } from '@phosphor-icons/react';
import { CATEGORIES } from '../../data/categories';
import './categories.css';

export const CategorySection = ({ onSelectCategory }) => {
  const handleCategoryClick = (categoryId) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const productsEl = document.getElementById('curated-products');
    if (productsEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(productsEl, { offset: -70 });
      } else {
        productsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="collections" className="editorial-categories reveal-on-scroll" aria-label="Collections and Categories">
      <div className="editorial-container">
        
        {/* Section Header with Animated Numbering */}
        <div className="editorial-section-header">
          <div className="editorial-section-label">
            <span className="editorial-section-number">01</span>
            <span className="editorial-section-divider-line" aria-hidden="true" />
            <span>COLLECTIONS &amp; DISCIPLINES</span>
          </div>
          <h2 className="editorial-section-title">
            Artisanal Menswear Taxonomy
          </h2>
          <p className="editorial-section-subtitle">
            Explore our authoritative pillars — festive ethnic ensembles, everyday artisanal cotton shirts, and specialized mandali group runs.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="editorial-categories__grid">
          {CATEGORIES.map((cat, index) => (
            <article
              key={cat.id}
              className="editorial-category-card reveal-stagger-child"
              style={{ '--stagger': index }}
              onClick={() => handleCategoryClick(cat.id)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCategoryClick(cat.id);
                }
              }}
              aria-label={`Explore category ${cat.name}`}
            >
              {/* Image Frame */}
              <div className="editorial-category-card__image-frame">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="editorial-category-card__image"
                  loading="lazy"
                  width="480"
                  height="640"
                />
                <div className="editorial-category-card__overlay" />
                
                <div className="editorial-category-card__badge">
                  <span>{cat.subcategories.length} Subcategories</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="editorial-category-card__content">
                <div className="editorial-category-card__header">
                  <div className="editorial-category-card__title-group">
                    <span className="editorial-category-card__index">COLLECTION 0{index + 1}</span>
                    <h3 className="editorial-category-card__title">{cat.name}</h3>
                  </div>
                  <div className="editorial-category-card__arrow-btn" aria-hidden="true">
                    <ArrowUpRight size={18} weight="bold" />
                  </div>
                </div>

                <p className="editorial-category-card__desc">{cat.description}</p>

                {/* Subcategory Pills */}
                <div className="editorial-category-card__pills">
                  {cat.subcategories.map((sub) => (
                    <span key={sub.id} className="editorial-category-card__pill">
                      {sub.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
