import React, { useState } from 'react';
import { Heart, Eye, WhatsappLogo } from '@phosphor-icons/react';

export const ProductCard = ({
  product,
  onQuickView,
  isWishlisted = false,
  onToggleWishlist,
  index = 0,
}) => {
  const [activeColor, setActiveColor] = useState(product?.colors?.[0] || null);

  if (!product) return null;

  const handleWhatsAppInquiry = (e) => {
    e.stopPropagation();
    const colorName = activeColor?.name || 'Standard Color';
    const msg = `Hello Laxmikrupa Emporium, I am inquiring about the "${product.name}" (${colorName} colorway, ${product.priceDemo}). Could you please share size availability and details?`;
    window.open(`https://wa.me/919512905629?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <article
      className="editorial-product-card reveal-stagger-child"
      style={{ '--stagger': index % 4 }}
      tabIndex={0}
      aria-label={`${product.name} - ${product.priceDemo}`}
    >
      {/* Image Showcase Frame with Single Subtle Quick View Hover */}
      <div className="editorial-product-card__image-frame">
        <img
          src={product.image}
          alt={product.name}
          className="editorial-product-card__image"
          loading="lazy"
          width="400"
          height="520"
        />

        {/* Wishlist Button */}
        {onToggleWishlist && (
          <button
            type="button"
            className={`editorial-product-card__wishlist-btn ${
              isWishlisted ? 'editorial-product-card__wishlist-btn--active' : ''
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
        )}

        {/* Stock / Badge */}
        {product.stockStatus && (
          <div className="editorial-product-card__badge">
            <span>{product.stockStatus}</span>
          </div>
        )}

        {/* Single Subtle Quick View Action on Image Hover */}
        <div className="editorial-product-card__quickview-hover">
          <button
            type="button"
            className="editorial-product-card__quickview-btn"
            onClick={() => onQuickView && onQuickView(product)}
            aria-label={`Quick View ${product.name}`}
          >
            <Eye size={15} weight="regular" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="editorial-product-card__body">
        
        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="editorial-product-card__swatches" role="radiogroup" aria-label="Available Colors">
            <div className="editorial-product-card__swatch-dots">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  className={`editorial-product-card__swatch-dot ${
                    activeColor?.name === c.name ? 'editorial-product-card__swatch-dot--active' : ''
                  }`}
                  style={{ backgroundColor: c.hex }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveColor(c);
                  }}
                  title={c.name}
                  aria-label={`Select color ${c.name}`}
                />
              ))}
            </div>
            <span className="editorial-product-card__color-label">
              {activeColor ? activeColor.name : product.colors[0].name}
            </span>
          </div>
        )}

        {/* Title and Subcategory */}
        <div className="editorial-product-card__meta">
          <span className="editorial-product-card__category-tag">
            {product.subcategoryName || product.categoryName || 'Collection'}
          </span>
          <h3
            className="editorial-product-card__title"
            onClick={() => onQuickView && onQuickView(product)}
          >
            {product.name}
          </h3>
        </div>

        {/* Price & Size Range Strip */}
        <div className="editorial-product-card__price-row">
          <span className="editorial-product-card__price">{product.priceDemo}</span>
          <span className="editorial-product-card__size-range">{product.sizeRangeLabel}</span>
        </div>

        {/* Single Dedicated Inquire Action (No duplicate Quick View button) */}
        <div className="editorial-product-card__actions">
          <button
            type="button"
            className="editorial-product-card__btn-inquire"
            onClick={handleWhatsAppInquiry}
            aria-label={`Inquire about ${product.name} on WhatsApp`}
          >
            <WhatsappLogo size={16} weight="fill" />
            <span>Inquire on WhatsApp</span>
          </button>
        </div>

      </div>
    </article>
  );
};
