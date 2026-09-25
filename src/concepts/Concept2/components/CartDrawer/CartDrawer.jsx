import React from 'react';
import { X, Trash, ArrowRight, ShoppingBag } from '@phosphor-icons/react';
import './cartDrawer.css';

export function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onRemoveItem,
  onCheckout,
}) {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.priceNumeric * (item.quantity || 1)), 0);

  return (
    <div className="c2-drawer-overlay" onClick={onClose}>
      <div className="c2-drawer-content" onClick={(e) => e.stopPropagation()}>
        <div className="c2-drawer-header">
          <div className="c2-drawer-title">
            <ShoppingBag size={22} weight="bold" />
            <span>Your Shopping Bag ({cartItems.length})</span>
          </div>
          <button
            type="button"
            className="c2-drawer-close"
            onClick={onClose}
            aria-label="Close Bag"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="c2-drawer-empty">
            <ShoppingBag size={48} weight="light" color="#A3968A" />
            <p>Your shopping bag is currently empty.</p>
            <button
              type="button"
              className="c2-btn-primary"
              onClick={onClose}
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <>
            <div className="c2-drawer-items">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.selectedSize}-${index}`} className="c2-drawer-item">
                  <img src={item.image} alt={item.name} className="c2-drawer-item-img" />
                  <div className="c2-drawer-item-info">
                    <h4>{item.name}</h4>
                    <div className="c2-drawer-item-meta">
                      Size: <span>{item.selectedSize || '38'}</span> | Color: <span>{item.selectedColor || 'Default'}</span>
                    </div>
                    <div className="c2-drawer-item-price">
                      {item.priceDemo} × {item.quantity || 1}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="c2-drawer-item-remove"
                    onClick={() => onRemoveItem && onRemoveItem(index)}
                    aria-label="Remove item"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="c2-drawer-footer">
              <div className="c2-drawer-subtotal">
                <span>Estimated Total:</span>
                <strong>₹{totalAmount.toLocaleString('en-IN')}</strong>
              </div>
              <p className="c2-drawer-note">
                Taxes calculated at billing. Free trial and custom alterations available at our Surat showroom.
              </p>
              <button
                type="button"
                className="c2-btn-primary c2-drawer-checkout-btn"
                onClick={() => {
                  alert(`Thank you! Our Surat team has reserved your ${cartItems.length} selected pieces.`);
                  onClose();
                }}
              >
                <span>Proceed to WhatsApp Order</span>
                <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
