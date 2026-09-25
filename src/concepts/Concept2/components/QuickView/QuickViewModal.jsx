import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Check } from '@phosphor-icons/react';
import './quickView.css';

export function QuickViewModal({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '38');
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product, selectedSize, product.colors?.[selectedColor]?.name);
    }
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="c2-modal-overlay" onClick={onClose}>
      <div className="c2-quickview-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="c2-modal-close-btn"
          onClick={onClose}
          aria-label="Close Quick View"
        >
          <X size={20} weight="bold" />
        </button>

        <div className="c2-quickview-grid">
          {/* Product Image */}
          <div className="c2-quickview-image-wrap">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Product Details */}
          <div className="c2-quickview-content">
            <span className="c2-quickview-cat">{product.category}</span>
            <h2 className="c2-quickview-title">{product.name}</h2>
            <div className="c2-quickview-price">{product.priceDemo}</div>
            <p className="c2-quickview-desc">{product.description}</p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="c2-quickview-option-group">
                <label className="c2-option-label">
                  Color: <strong>{product.colors[selectedColor]?.name}</strong>
                </label>
                <div className="c2-quickview-swatches">
                  {product.colors.map((c, i) => (
                    <button
                      key={c.name}
                      type="button"
                      className={`c2-modal-swatch ${selectedColor === i ? 'is-active' : ''}`}
                      style={{ backgroundColor: c.hex }}
                      onClick={() => setSelectedColor(i)}
                      title={c.name}
                      aria-label={`Select color ${c.name}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="c2-quickview-option-group">
                <label className="c2-option-label">
                  Select Size: <strong>{selectedSize}</strong>
                </label>
                <div className="c2-size-pills">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      className={`c2-size-btn ${selectedSize === sz ? 'is-selected' : ''}`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="c2-quickview-actions">
              <button
                type="button"
                className="c2-btn-primary c2-add-cart-btn"
                onClick={handleAdd}
              >
                {added ? (
                  <>
                    <Check size={18} weight="bold" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} weight="bold" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <button
                type="button"
                className={`c2-quickview-wish-btn ${isWishlisted ? 'is-active' : ''}`}
                onClick={() => onToggleWishlist(product.id)}
                aria-label={isWishlisted ? 'Remove Wishlist' : 'Add to Wishlist'}
              >
                <Heart size={20} weight={isWishlisted ? 'fill' : 'regular'} />
              </button>
            </div>

            <div className="c2-quickview-trust">
              <span>✓ 100% Authentic Surat Fabric</span>
              <span>✓ In-Store Custom Fitting Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
