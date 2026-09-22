import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, WhatsappLogo, Check, Heart } from '@phosphor-icons/react';

export const QuickViewModal = ({ product, onClose, onToggleWishlist, isWishlisted }) => {
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0]?.name || '');
      setSelectedSize(product.sizes?.[0] || '');
    }
  }, [product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const inquiryText = `Hello Laxmikrupa Emporium, I would like to inquire about the ${product.name} (Color: ${selectedColor || 'Standard'}, Size: ${selectedSize || 'Standard'}). Is it currently in stock for store pickup or delivery?`;
  const waUrl = `https://wa.me/919512905629?text=${encodeURIComponent(inquiryText)}`;

  return createPortal(
    <div
      className="editorial-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div
        className="editorial-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="editorial-modal-close"
          onClick={onClose}
          aria-label="Close product quick view"
        >
          <X size={20} weight="bold" />
        </button>

        <div className="editorial-modal-grid">
          {/* Left Column: Image Preview */}
          <div className="editorial-modal-image-frame">
            <img
              src={product.image}
              alt={product.name}
              className="editorial-modal-image"
            />
            <div className="editorial-modal-badge">
              <span>{product.stockStatus}</span>
            </div>
          </div>

          {/* Right Column: Product Config & Inquiry */}
          <div className="editorial-modal-details">
            <div className="editorial-modal-header">
              <span className="editorial-micro-label editorial-micro-label--mono">
                {product.category.toUpperCase().replace('-', ' ')}
              </span>
              <h2 id="quick-view-title" className="editorial-modal-title">
                {product.name}
              </h2>
              <div className="editorial-modal-price-strip">
                <span className="editorial-modal-price">{product.priceDemo}</span>
                <span className="editorial-modal-price-note">Provisional Retail / Inquiry</span>
              </div>
            </div>

            <p className="editorial-modal-desc">
              {product.tagline}
            </p>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="editorial-modal-swatches">
                <span className="editorial-modal-label">
                  Selected Color: <strong>{selectedColor}</strong>
                </span>
                <div className="editorial-modal-swatch-list">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      className={`editorial-modal-swatch ${
                        selectedColor === c.name ? 'editorial-modal-swatch--active' : ''
                      }`}
                      style={{ backgroundColor: c.hex }}
                      onClick={() => setSelectedColor(c.name)}
                      aria-label={`Select color ${c.name}`}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check
                          size={12}
                          weight="bold"
                          color={c.hex === '#F9F9F8' || c.hex === '#EDE8D0' ? '#111215' : '#FFFFFF'}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="editorial-modal-sizes">
                <div className="editorial-modal-sizes-header">
                  <span className="editorial-modal-label">Available Sizes</span>
                  <span className="editorial-modal-size-range">{product.sizeRangeLabel}</span>
                </div>
                <div className="editorial-modal-size-chips">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`editorial-modal-size-chip ${
                        selectedSize === s ? 'editorial-modal-size-chip--active' : ''
                      }`}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions: Direct WhatsApp & Wishlist */}
            <div className="editorial-modal-actions">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-button editorial-button--primary editorial-modal-wa-btn"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Inquire via WhatsApp</span>
              </a>

              <button
                type="button"
                className={`editorial-modal-wishlist-btn ${
                  isWishlisted ? 'editorial-modal-wishlist-btn--active' : ''
                }`}
                onClick={() => onToggleWishlist(product.id)}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                title={isWishlisted ? 'Saved in wishlist' : 'Save to wishlist'}
              >
                <Heart size={20} weight={isWishlisted ? 'fill' : 'regular'} />
              </button>
            </div>

            {/* Store Guarantee / Support Note */}
            <div className="editorial-modal-footer-note">
              <span>Direct store inquiry with Laxmikrupa Emporium • Surat, Gujarat</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
