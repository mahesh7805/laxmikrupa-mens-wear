import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { CONCEPT2_CATEGORIES } from '../../data/concept2Categories';
import './shopByCategory.css';

export function ShopByCategory({ onSelectCategory }) {
  return (
    <section id="categories" className="c2-categories-section">
      <div className="concept2-container">
        {/* Section Header */}
        <div className="c2-categories-header">
          <div className="c2-header-text">
            <span className="c2-section-tag">EXPLORE</span>
            <h2 className="c2-section-heading">Shop by Category</h2>
            <p className="c2-section-subtext">A complete range for every you.</p>
          </div>
          <a
            href="#categories"
            className="c2-view-all-link"
            onClick={(e) => {
              e.preventDefault();
              if (onSelectCategory) onSelectCategory('all');
            }}
          >
            <span>View All Categories</span>
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        {/* 6-Card Category Grid */}
        <div className="c2-categories-grid">
          {CONCEPT2_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="c2-category-card"
              onClick={() => onSelectCategory && onSelectCategory(cat.slug)}
            >
              <div className="c2-category-image-wrap">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <div className="c2-category-overlay">
                  <span className="c2-category-name">{cat.name}</span>
                  <ArrowRight size={14} weight="bold" className="c2-category-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
