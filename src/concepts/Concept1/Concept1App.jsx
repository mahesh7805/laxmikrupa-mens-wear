import React, { useState } from 'react';
import './styles/base.css';
import './styles/primitives.css';
import { useLenis } from '../../hooks/useLenis';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useRoute } from '../../hooks/useRoute';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { HomePage } from './pages/Home/HomePage';
import { CollectionPage } from './pages/Collection/CollectionPage';
import { CollectionsIndex } from './pages/Collection/CollectionsIndex';

export function Concept1App() {
  const { currentPath, route, params, navigate } = useRoute();

  // Initialize Lenis smooth scroll
  useLenis();

  // Re-run and observe scroll reveals on view/route changes
  useScrollReveal(currentPath);

  const [wishlist, setWishlist] = useState(['lk-eth-01', 'lk-grp-01']);

  const handleToggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleOpenWishlist = () => {
    if (route !== 'home') {
      navigate('/concept-1');
      setTimeout(() => {
        const featEl = document.getElementById('featured-pieces');
        if (featEl) {
          if (window.__lenis) {
            window.__lenis.scrollTo(featEl, { offset: -70 });
          } else {
            featEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    } else {
      const featEl = document.getElementById('featured-pieces');
      if (featEl) {
        if (window.__lenis) {
          window.__lenis.scrollTo(featEl, { offset: -70 });
        } else {
          featEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="concept1-root">
      <a href="#concept1-main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Subtle Viewport Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Header with Collections Dropdown & Navigation */}
      <Header
        wishlistCount={wishlist.length}
        onOpenWishlist={handleOpenWishlist}
      />

      <main id="concept1-main-content">
        {route === 'home' && (
          <HomePage
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {route === 'collection' && (
          <CollectionPage
            categorySlug={params.categorySlug}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {route === 'collections-index' && (
          <CollectionsIndex />
        )}
      </main>

      {/* 4-Column Deep Espresso Footer */}
      <Footer />
    </div>
  );
}

export default Concept1App;
