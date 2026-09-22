import React, { useState } from 'react';
import { Heart, Eye, WhatsappLogo } from '@phosphor-icons/react';

export const CatalogCard = ({
  product,
  onQuickView,
  isWishlisted,
  onToggleWishlist,
  index = 0,
}) => {
  const [activeColor, setActiveColor] = useState(product.colors?.[0] || null);

  const handleWhatsAppInquiry = (e) => {
    e.stopPropagation();
    const colorName = activeColor?.name || 'Standard';
    const msg = `Hello Laxmikrupa Emporium, I am interested in inquiring about the "${product.name}" (${colorName} colorway). Could you please share stock and sizing details?`;
    window.open(`https://wa.me/919512905629?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <article
      className="mockup-catalog-card reveal-stagger-child"
      style={{ '--stagger': index % 3 }}
      tabIndex={0}
      aria-label={`${product.name} - ${product.priceDemo}`}
    >
      {/* Image Showcase Frame */}
      <div className="mockup-catalog-card__image-frame">
        <img
          src={product.image}
          alt={product.name}
          className="mockup-catalog-card__image"
          loading="lazy"
          width="360"
          height="460"
        />

        {/* Wishlist Button */}
        <button
          type="button"
          className={`mockup-catalog-card__wishlist-btn ${
            isWishlisted ? 'mockup-catalog-card__wishlist-btn--active' : ''
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Remove from saved items' : 'Save to wishlist'}
          title={isWishlisted ? 'Saved in wishlist' : 'Save to wishlist'}
        >
          <Heart
            size={18}
            weight={isWishlisted ? 'fill' : 'regular'}
            color={isWishlisted ? '#B8860B' : 'currentColor'}
          />
        </button>

        {/* Stock Badge */}
        <div className="mockup-catalog-card__badge">
          <span>{product.stockStatus}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="mockup-catalog-card__body">
        
        {/* Color Swatches Below Image */}
        {product.colors && product.colors.length > 0 && (
          <div className="mockup-catalog-card__swatches" role="radiogroup" aria-label="Colors">
            <div className="mockup-catalog-card__swatch-dots">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  className={`mockup-catalog-card__swatch-dot ${
                    activeColor?.name === c.name ? 'mockup-catalog-card__swatch-dot--active' : ''
                  }`}
                  style={{ backgroundColor: c.hex }}
                  onClick={() => setActiveColor(c)}
                  title={c.name}
                  aria-label={`Color ${c.name}`}
                />
              ))}
            </div>
            <span className="mockup-catalog-card__color-label">
              {activeColor ? activeColor.name : product.colors[0].name}
            </span>
          </div>
        )}

        {/* Title and Category */}
        <div className="mockup-catalog-card__meta">
          <span className="mockup-catalog-card__category">
            {product.subcategory ? product.subcategory.replace(/-/g, ' ') : product.category}
          </span>
          <h3
            className="mockup-catalog-card__title"
            onClick={() => onQuickView(product)}
          >
            {product.name}
          </h3>
        </div>

        {/* Price & Size Strip */}
        <div className="mockup-catalog-card__price-row">
          <span className="mockup-catalog-card__price">{product.priceDemo}</span>
          <span className="mockup-catalog-card__sizes">{product.sizeRangeLabel}</span>
        </div>

        {/* Two Buttons Matching Mockup */}
        <div className="mockup-catalog-card__actions">
          <button
            type="button"
            className="mockup-catalog-card__btn-quickview"
            onClick={() => onQuickView(product)}
          >
            <Eye size={15} weight="regular" />
            <span>Quick View</span>
          </button>

          <button
            type="button"
            className="mockup-catalog-card__btn-inquire"
            onClick={handleWhatsAppInquiry}
          >
            <WhatsappLogo size={16} weight="fill" />
            <span>Inquire</span>
          </button>
        </div>

      </div>
    </article>
  );
};
