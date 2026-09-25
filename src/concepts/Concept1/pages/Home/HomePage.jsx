import React from 'react';
import { Hero } from '../../components/hero/Hero';
import { WhyUsSection } from '../../components/whyus/WhyUsSection';
import { ShopByCategory } from '../../components/categories/ShopByCategory';
import { FestiveBanner } from '../../components/festive/FestiveBanner';
import { StoreSection } from '../../components/store/StoreSection';
import { ContactSection } from '../../components/contact/ContactSection';
import { useRoute } from '../../../../hooks/useRoute';

export const HomePage = () => {
  const { navigate } = useRoute();

  return (
    <>
      {/* 1. Hero: Tradition Meets Today */}
      <Hero />

      {/* 2. Why Choose Laxmikrupa? (Dark Espresso 4-Card Grid) */}
      <WhyUsSection />

      {/* 3. Curated Collections & Disciplines (Shop By Category Grid) */}
      <ShopByCategory />

      {/* 4. The Festive Edit Highlight Banner */}
      <FestiveBanner
        onExploreFestive={() => navigate('/collections/festive-wear')}
      />

      {/* 5. Visit Our Surat Store (Interactive Map Canvas & Floating Store Info) */}
      <StoreSection />

      {/* 6. Let's Stay Connected / Direct Message Form */}
      <ContactSection />
    </>
  );
};
