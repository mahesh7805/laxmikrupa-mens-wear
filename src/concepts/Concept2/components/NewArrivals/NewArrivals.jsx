import React, { useState } from 'react';
import { Heart, ArrowRight } from '@phosphor-icons/react';
import { CONCEPT2_PRODUCTS } from '../../data/concept2Products';
import './newArrivals.css';

export function NewArrivals({
  wishlist = [],
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}) {
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorSelect = (productId, colorIndex) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorIndex,
    }));
  };

  return (
    <section id="new-arrivals" className="c2-new-arrivals-section">
      <div className="concept2-container">
        {/* Section Header */}
        <div className="c2-new-arrivals-header">
          <div className="c2-header-text">
            <span className="c2-section-tag">NEW IN</span>
            <h2 className="c2-section-heading">New Arrivals</h2>
            <p className="c2-section-subtext">Fresh styles for the season.</p>
          </div>
          <a
            href="#new-arrivals"
            className="c2-view-all-link"
            onClick={(e) => e.preventDefault()}
          >
            <span>View All Products</span>
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        {/* 6-Card Product Grid */}
        <div className="c2-products-grid">
          {CONCEPT2_PRODUCTS.map((prod) => {
            const isWishlisted = wishlist.includes(prod.id);
            const activeColorIdx = selectedColors[prod.id] || 0;

            return (
              <div key={prod.id} className="c2-product-card">
                {/* Image Container with Wishlist Icon */}
                <div className="c2-product-image-wrap">
                  <img src={prod.image} alt={prod.name} loading="lazy" />

                  <button
                    type="button"
                    className={`c2-product-wishlist-btn ${isWishlisted ? 'is-active' : ''}`}
                    aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onToggleWishlist) onToggleWishlist(prod.id);
                    }}
                  >
                    <Heart size={16} weight={isWishlisted ? 'fill' : 'regular'} />
                  </button>
                </div>

                {/* Product Meta */}
                <div className="c2-product-info">
                  <h3 className="c2-product-title">{prod.name}</h3>
                  <div className="c2-product-price">{prod.priceDemo}</div>

                  {/* Color Swatches */}
                  <div className="c2-product-swatches">
                    {prod.colors.map((color, idx) => (
                      <button
                        key={color.name}
                        type="button"
                        className={`c2-swatch-dot ${activeColorIdx === idx ? 'is-selected' : ''}`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                        onClick={() => handleColorSelect(prod.id, idx)}
                        aria-label={`Select color ${color.name}`}
                      />
                    ))}
                  </div>

                  {/* Quick View Button */}
                  <button
                    type="button"
                    className="c2-quick-view-btn"
                    onClick={() => onQuickView && onQuickView(prod)}
                  >
                    Quick View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
