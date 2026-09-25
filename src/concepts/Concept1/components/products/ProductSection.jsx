import React, { useState } from 'react';
import { DEMO_PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';
import './products.css';

export const ProductSection = ({
  selectedCategory,
  onSelectCategory,
  wishlist,
  onToggleWishlist,
}) => {
  const [activeTab, setActiveTab] = useState(selectedCategory || 'all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sync with parent category selection if changed
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (onSelectCategory) {
      onSelectCategory(tabId === 'all' ? null : tabId);
    }
  };

  const filteredProducts =
    activeTab === 'all'
      ? DEMO_PRODUCTS
      : DEMO_PRODUCTS.filter((p) => p.category === activeTab);

  const filterTabs = [
    { id: 'all', label: 'All Curations', count: DEMO_PRODUCTS.length },
    {
      id: 'ethnic-wear',
      label: 'Ethnic Wear',
      count: DEMO_PRODUCTS.filter((p) => p.category === 'ethnic-wear').length,
    },
    {
      id: 'shirts-casuals',
      label: 'Shirts & Casuals',
      count: DEMO_PRODUCTS.filter((p) => p.category === 'shirts-casuals').length,
    },
    {
      id: 'festive-group-orders',
      label: 'Festive & Group Runs',
      count: DEMO_PRODUCTS.filter((p) => p.category === 'festive-group-orders').length,
    },
  ];

  return (
    <section id="curated-products" className="editorial-products reveal-on-scroll" aria-label="Curated Products Catalog">
      <div className="editorial-container">
        
        {/* Section Header with Animated Numbering */}
        <div className="editorial-section-header">
          <div className="editorial-section-label">
            <span className="editorial-section-number">02</span>
            <span className="editorial-section-divider-line" aria-hidden="true" />
            <span>CURATED SELECTIONS &amp; SILHOUETTES</span>
          </div>
          <div className="editorial-products__header-flex">
            <div>
              <h2 className="editorial-section-title">
                Festive Kurtas &amp; Tailored Separates
              </h2>
              <p className="editorial-section-subtitle">
                Inspect high-resolution fabric textures, colorways, and size runs (20 to 50). Click any garment for quick view and direct WhatsApp inquiry.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="editorial-products__tabs" role="tablist" aria-label="Filter products by collection">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`editorial-products__tab ${
                    activeTab === tab.id ? 'editorial-products__tab--active' : ''
                  }`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <span>{tab.label}</span>
                  <span className="editorial-products__tab-count">{tab.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="editorial-products__grid">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onQuickView={(p) => setQuickViewProduct(p)}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

        {/* Quick View Modal */}
        {quickViewProduct && (
          <QuickViewModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            isWishlisted={wishlist.includes(quickViewProduct.id)}
            onToggleWishlist={onToggleWishlist}
          />
        )}

      </div>
    </section>
  );
};
