import React, { useState, useEffect } from 'react';
import { DEMO_PRODUCTS } from '../../data/products';
import { CatalogCard } from './CatalogCard';
import { QuickViewModal } from './QuickViewModal';
import './catalog.css';

export const CatalogSection = ({
  selectedCategory,
  onSelectCategory,
  wishlist,
  onToggleWishlist,
}) => {
  const [activeFilter, setActiveFilter] = useState(selectedCategory || 'all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      setActiveFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    if (onSelectCategory) {
      onSelectCategory(filterId === 'all' ? null : filterId);
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All', count: DEMO_PRODUCTS.length },
    { id: 'ethnic-wear', label: 'Ethnic Wear', count: 4 },
    { id: 'shirts-casuals', label: 'Casual Shirts', count: 3 },
    { id: 'festive-group-orders', label: 'Festive & Groups', count: 2 },
  ];

  const displayedProducts =
    activeFilter === 'all'
      ? DEMO_PRODUCTS
      : DEMO_PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section id="catalog" className="mockup-catalog reveal-on-scroll" aria-label="New Arrivals and Catalog">
      <div className="editorial-container">
        
        {/* Section Header matching Mockup */}
        <div className="mockup-catalog__header">
          <span className="mockup-catalog__eyebrow">
            — CURATED SELECTIONS —
          </span>
          <h2 className="mockup-catalog__title">
            New Arrivals &amp; Catalog
          </h2>
          <p className="mockup-catalog__subtitle">
            Handpicked selections available for retail inquiry and wholesale group orders in Surat.
          </p>

          {/* Filter Pills matching Mockup */}
          <div className="mockup-catalog__filter-pills" role="tablist">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.id}
                className={`mockup-catalog__pill ${
                  activeFilter === tab.id ? 'mockup-catalog__pill--active' : ''
                }`}
                onClick={() => handleFilterClick(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="mockup-catalog__pill-count">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid (3 Columns matching Mockup) */}
        <div className="mockup-catalog__grid">
          {displayedProducts.map((product, index) => (
            <CatalogCard
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
