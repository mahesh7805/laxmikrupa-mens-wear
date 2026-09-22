import React, { useState } from 'react';
import './styles/base.css';
import './styles/primitives.css';
import { useLenis } from './hooks/useLenis';
import { useScrollReveal } from './hooks/useScrollReveal';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { WhyUsSection } from './components/whyus/WhyUsSection';
import { ShopByCategory } from './components/categories/ShopByCategory';
import { CatalogSection } from './components/catalog/CatalogSection';
import { FestiveBanner } from './components/festive/FestiveBanner';
import { StoreSection } from './components/store/StoreSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';

export function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Initialize IntersectionObserver scroll reveals
  useScrollReveal();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [wishlist, setWishlist] = useState(['lk-eth-01', 'lk-grp-01']);

  const handleToggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleOpenWishlist = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(catalogEl, { offset: -70 });
      } else {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Subtle Viewport Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Header */}
      <Header
        wishlistCount={wishlist.length}
        onOpenWishlist={handleOpenWishlist}
      />

      <main id="main-content">
        {/* 1. Hero: Tradition Meets Today */}
        <Hero />

        {/* 2. Why Choose Laxmikrupa? (Dark Espresso Theme) */}
        <WhyUsSection />

        {/* 3. Shop By Category (6-Card Grid) */}
        <ShopByCategory
          onSelectCategory={(catKey) => setSelectedCategory(catKey)}
        />

        {/* 4. New Arrivals & Catalog (Curated Grid + Filter Pills + Quick View) */}
        <CatalogSection
          selectedCategory={selectedCategory}
          onSelectCategory={(catKey) => setSelectedCategory(catKey)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* 5. The Festive Edit (Highlight Banner) */}
        <FestiveBanner
          onExploreFestive={(catKey) => setSelectedCategory(catKey)}
        />

        {/* 6. Visit Our Surat Store (Interactive Map Canvas & Floating Store Info) */}
        <StoreSection />

        {/* 7. Let's Stay Connected / Send Us A Direct Message */}
        <ContactSection />
      </main>

      {/* 8. 4-Column Deep Espresso Footer */}
      <Footer />
    </>
  );
}

export default App;
