import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, Sparkle } from '@phosphor-icons/react';
import './hero.css';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -70 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className={`mockup-hero ${isLoaded ? 'mockup-hero--loaded' : ''}`}
      aria-label="Laxmikrupa Emporium Featured Collection"
    >
      <div className="editorial-container mockup-hero__container">
        
        {/* Left Column: Headline & Action Box */}
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

          {/* Dark Espresso Highlight Action Box matching mockup */}
          <div className="mockup-hero__cta-box hero-anim-4">
            <a
              href="#festive-edit"
              onClick={(e) => handleScrollTo(e, 'festive-edit')}
              className="mockup-hero__cta-box-inner"
            >
              <div className="mockup-hero__cta-box-text">
                <span className="mockup-hero__cta-box-label">Festive &amp; Group Orders</span>
                <span className="mockup-hero__cta-box-title">Explore Our Festive &amp; Bridal Collection</span>
              </div>
              <div className="mockup-hero__cta-box-arrow" aria-hidden="true">
                <ArrowUpRight size={18} weight="bold" />
              </div>
            </a>
          </div>

          {/* Secondary Link */}
          <div className="mockup-hero__secondary-link-wrap hero-anim-5">
            <a
              href="#categories"
              onClick={(e) => handleScrollTo(e, 'categories')}
              className="mockup-hero__secondary-link"
            >
              <span>EXPLORE ETHNIC MENSWEAR</span>
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
                src="/assets/images/hero_hanging_fabrics.jpg"
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
                src="/assets/images/hero_store_display.jpg"
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
