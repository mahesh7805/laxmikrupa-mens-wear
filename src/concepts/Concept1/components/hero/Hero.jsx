import React, { useState, useEffect } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { useRoute } from '../../../../hooks/useRoute';
import { getAssetPath } from '../../../../utils/assetPath';
import './hero.css';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { navigate } = useRoute();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (e, url) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <section
      id="hero"
      className={`mockup-hero ${isLoaded ? 'mockup-hero--loaded' : ''}`}
      aria-label="Laxmikrupa Emporium Featured Collection"
    >
      <div className="editorial-container mockup-hero__container">
        
        {/* Left Column: Headline & Single Editorial Action */}
        <div className="mockup-hero__left">
          
          <div className="mockup-hero__eyebrow-strip hero-anim-1">
            <span className="mockup-hero__number">01</span>
            <span className="mockup-hero__line" aria-hidden="true" />
            <span className="mockup-hero__tag">TRADITION &amp; CRAFT // SURAT</span>
          </div>

          <h1 className="mockup-hero__headline hero-anim-2">
            TRADITION MEETS <br />
            <span>TODAY</span>
          </h1>

          <p className="mockup-hero__description hero-anim-3">
            Laxmikrupa Emporium brings timeless Indian ethnic menswear and modern casuals into effortless harmony. Discover handcrafted kurtas, designer cuts, and tailored fabrics for every celebration.
          </p>

          {/* Single Clear Editorial Action: Explore All Collections */}
          <div className="mockup-hero__action-wrap hero-anim-4">
            <a
              href="/collections"
              onClick={(e) => handleNavigate(e, '/collections')}
              className="editorial-button editorial-button--primary mockup-hero__cta-btn"
              aria-label="Explore All Collections"
            >
              <span>EXPLORE ALL COLLECTIONS</span>
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

        </div>

        {/* Right Column: 2 Side-by-Side Vertical Visuals */}
        <div className="mockup-hero__right hero-anim-visual">
          
          {/* Visual 1: Hanging Fabrics & Kurta */}
          <div className="mockup-hero__photo-card">
            <div className="mockup-hero__photo-frame">
              <img
                src={getAssetPath('/assets/concept-1/hero_hanging_fabrics.jpg')}
                alt="Pure cotton and linen kurta fabric hanging in warm daylight"
                className="mockup-hero__photo"
                loading="eager"
                fetchpriority="high"
                width="360"
                height="480"
              />
            </div>
            <div className="mockup-hero__photo-caption">
              <span>Woven Textures &amp; Linen Silhouettes</span>
            </div>
          </div>

          {/* Visual 2: Store Display & Racks */}
          <div className="mockup-hero__photo-card">
            <div className="mockup-hero__photo-frame">
              <img
                src={getAssetPath('/assets/concept-1/hero_store_display.jpg')}
                alt="Surat store collection display racks and tailored menswear"
                className="mockup-hero__photo"
                loading="eager"
                width="360"
                height="480"
              />
            </div>
            <div className="mockup-hero__photo-caption">
              <span>Surat Flagship Atelier // In-Store Displays</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
