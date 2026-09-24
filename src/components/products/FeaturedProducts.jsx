import React, { useState } from 'react';
import { ArrowUpRight, Sparkle } from '@phosphor-icons/react';
import { getFeaturedProducts } from '../../data/products';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';
import { useRoute } from '../../hooks/useRoute';
import './products.css';

export const FeaturedProducts = ({ wishlist = [], onToggleWishlist }) => {
  const { navigate } = useRoute();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const featuredProducts = getFeaturedProducts(6); // Curated 6 products maximum for discovery

  return (
    <section
      id="featured-pieces"
      className="editorial-products reveal-on-scroll"
      aria-label="Selected Pieces & Curated Collection"
    >
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-section-label">
            <span className="editorial-section-number">03</span>
            <span className="editorial-section-divider-line" aria-hidden="true" />
            <span>CURATED HIGHLIGHTS // PROVISIONAL CATALOGUE</span>
          </div>

          <div className="editorial-products__header-flex">
            <div>
              <h2 className="editorial-section-title">
                Selected Pieces &amp; Key Silhouettes
              </h2>
              <p className="editorial-section-subtitle">
                A preview of our finest tailored kurtas, coordinated sets, and printed cottons. Explore our dedicated category routes for the complete inventory.
              </p>
            </div>

            {/* View All Collections Link */}
            <button
              type="button"
              onClick={() => navigate('/collections')}
              className="editorial-button editorial-button--secondary"
            >
              <span>VIEW ALL COLLECTIONS</span>
              <ArrowUpRight size={16} weight="bold" />
            </button>
          </div>
        </div>

        {/* Curated 6-Item Product Grid */}
        <div className="editorial-products__grid">
          {featuredProducts.map((product, index) => (
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
