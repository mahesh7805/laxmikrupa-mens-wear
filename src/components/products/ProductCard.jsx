import React, { useState } from 'react';
import { Heart, Eye, ArrowUpRight } from '@phosphor-icons/react';

export const ProductCard = ({
  product,
  onQuickView,
  isWishlisted,
  onToggleWishlist,
  index = 0,
}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);

  return (
    <article
      className="editorial-product-card reveal-stagger-child"
      style={{ '--stagger': index % 4 }}
      tabIndex={0}
      aria-label={`${product.name} - ${product.priceDemo}`}
    >
      {/* Image Showcase Frame */}
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
        <button
          type="button"
          className={`editorial-product-card__wishlist-btn ${
            isWishlisted ? 'editorial-product-card__wishlist-btn--active' : ''
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          title={isWishlisted ? 'Saved' : 'Save to wishlist'}
        >
          <Heart
            size={18}
            weight={isWishlisted ? 'fill' : 'regular'}
            color={isWishlisted ? '#B07D38' : 'currentColor'}
          />
        </button>

        {/* Quick View Trigger on Hover/Focus */}
        <div className="editorial-product-card__quick-view-wrapper">
          <button
            type="button"
            className="editorial-product-card__quick-view-btn"
            onClick={() => onQuickView(product)}
            aria-label={`Quick view ${product.name}`}
          >
            <Eye size={16} weight="regular" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Stock / Group Order Badge */}
        {product.groupOrderAvailable && (
          <div className="editorial-product-card__badge">
            <span>Group Orders</span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="editorial-product-card__content">
        <div className="editorial-product-card__meta-top">
          <span className="editorial-product-card__category">
            {product.subcategory ? product.subcategory.replace(/-/g, ' ') : product.category}
          </span>
          <span className="editorial-product-card__price">{product.priceDemo}</span>
        </div>

        <h3
          className="editorial-product-card__title"
          onClick={() => onQuickView(product)}
        >
          {product.name}
        </h3>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="editorial-product-card__swatches" role="radiogroup" aria-label="Available Colors">
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                className={`editorial-product-card__swatch ${
                  selectedColor?.name === color.name
                    ? 'editorial-product-card__swatch--active'
                    : ''
                }`}
                style={{ backgroundColor: color.hex }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                aria-label={`Color ${color.name}`}
                title={color.name}
              />
            ))}
            <span className="editorial-product-card__color-name">
              {selectedColor ? selectedColor.name : product.colors[0].name}
            </span>
          </div>
        )}

        {/* Size Spec Label */}
        <div className="editorial-product-card__sizes-strip">
          <span>{product.sizeRangeLabel}</span>
        </div>
      </div>
    </article>
  );
};
