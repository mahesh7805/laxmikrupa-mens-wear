import React, { useState } from 'react';
import './styles/concept2.css';

import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { WhoWeAre } from './components/WhoWeAre/WhoWeAre';
import { WhyChooseUs } from './components/WhyChooseUs/WhyChooseUs';
import { ShopByCategory } from './components/ShopByCategory/ShopByCategory';
import { NewArrivals } from './components/NewArrivals/NewArrivals';
import { FestiveEdit } from './components/FestiveEdit/FestiveEdit';
import { StoreLocator } from './components/StoreLocator/StoreLocator';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

import { QuickViewModal } from './components/QuickView/QuickViewModal';
import { CartDrawer } from './components/CartDrawer/CartDrawer';
import { getAssetPath } from '../../utils/assetPath';

export function Concept2App() {
  const [wishlist, setWishlist] = useState(['c2-prod-1', 'c2-prod-5']);
  const [cartItems, setCartItems] = useState([
    {
      id: 'c2-prod-1',
      name: 'Classic Oxford Shirt',
      priceDemo: '₹1,499',
      priceNumeric: 1499,
      image: getAssetPath('/assets/concept-2/shirts_casuals_category.jpg'),
      selectedSize: '40',
      selectedColor: 'Olive Green',
      quantity: 1,
    },
  ]);

  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product, selectedSize, selectedColor) => {
    setCartItems((prev) => [
      ...prev,
      {
        ...product,
        selectedSize: selectedSize || '38',
        selectedColor: selectedColor || 'Default',
        quantity: 1,
      },
    ]);
    setIsCartOpen(true);
  };

  const handleRemoveCartItem = (index) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleOpenWishlist = () => {
    const el = document.getElementById('new-arrivals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (query) => {
    if (query) {
      const el = document.getElementById('new-arrivals');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="concept2-root">
      {/* 1. Top Bar & Main Navigation Header */}
      <Header
        wishlistCount={wishlist.length}
        cartCount={cartItems.length}
        onOpenWishlist={handleOpenWishlist}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={handleSearch}
      />

      <main id="concept2-main">
        {/* 2. Hero Section: For Every Occasion */}
        <Hero />

        {/* 3. Section 01: Who We Are */}
        <WhoWeAre />

        {/* 4. Section 02: Why Choose Us (Dark Espresso) */}
        <WhyChooseUs />

        {/* 5. Section: Shop By Category */}
        <ShopByCategory
          onSelectCategory={(slug) => {
            const el = document.getElementById('new-arrivals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6. Section: New Arrivals (Product Grid) */}
        <NewArrivals
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(prod) => setActiveQuickViewProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* 7. Section: The Festive Edit (Royal Palace Banner) */}
        <FestiveEdit />

        {/* 8. Section 04: Visit Our Store */}
        <StoreLocator />

        {/* 9. Section 05: Reach Out To Us */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Quick View Modal */}
      {activeQuickViewProduct && (
        <QuickViewModal
          product={activeQuickViewProduct}
          onClose={() => setActiveQuickViewProduct(null)}
          isWishlisted={wishlist.includes(activeQuickViewProduct.id)}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Interactive Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
      />
    </div>
  );
}

export default Concept2App;
