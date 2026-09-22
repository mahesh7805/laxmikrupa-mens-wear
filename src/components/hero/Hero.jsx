import React from 'react';
import { ArrowUpRight, WhatsappLogo } from '@phosphor-icons/react';
import './hero.css';

export const Hero = () => {
  return (
    <section className="editorial-hero" aria-label="Laxmikrupa Emporium Featured Collection">
      <div className="editorial-container">
        <div className="editorial-hero__grid">
          
          {/* Column 1: Typographic & Action Block */}
          <div className="editorial-hero__content">
            <div className="editorial-hero__header-group">
              <span className="editorial-micro-label">
                LAXMIKRUPA EMPORIUM // MEN'S WEAR • SURAT
              </span>

              <h1 className="editorial-hero__headline">
                Festive Ethnic Wear &amp; <em>Tailored Silhouettes</em>
              </h1>

              <p className="editorial-hero__narrative">
                Curated solid and designer kurtas, kurta pajama sets, casual prints, and coordinated festive group orders.
              </p>
            </div>

            <div className="editorial-hero__actions">
              <a href="#ethnic-wear" className="editorial-button editorial-button--primary">
                <span>Explore Ethnic Wear</span>
                <ArrowUpRight size={16} weight="bold" />
              </a>

              <a
                href="https://wa.me/919512905629?text=Hello%20Laxmikrupa%20Emporium%2C%20I%20would%20like%20to%20inquire%20about%20group%20and%20festive%20kurtas."
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-button editorial-button--secondary editorial-hero__group-cta"
              >
                <WhatsappLogo size={18} weight="regular" />
                <span>Group / Bulk Inquiry</span>
              </a>
            </div>

            {/* Factual Category Highlight Strip supported by PRODUCT.md */}
            <div className="editorial-hero__spec-strip">
              <div className="editorial-hero__spec-item">
                <span className="editorial-hero__spec-label">Ethnic &amp; Casuals</span>
                <span className="editorial-hero__spec-value">Kurtas, Sets &amp; Shirts</span>
              </div>
              <div className="editorial-hero__spec-item">
                <span className="editorial-hero__spec-label">Group Orders</span>
                <span className="editorial-hero__spec-value">Festivals &amp; Celebrations</span>
              </div>
            </div>
          </div>

          {/* Column 2: Primary Campaign Portrait Showcase */}
          <div className="editorial-hero__visual-frame">
            <img
              src="/assets/images/hero_campaign.jpg"
              alt="Editorial presentation of tailored mustard yellow and maroon festive Kurta"
              className="editorial-hero__campaign-image"
              loading="eager"
              fetchpriority="high"
              width="600"
              height="800"
            />
            <div className="editorial-hero__campaign-tag">
              <span className="editorial-hero__tag-dot" aria-hidden="true" />
              <span className="editorial-hero__tag-text">Festive Kurta // Mandarin Collar</span>
            </div>
          </div>

          {/* Column 3: Offset Tactile Inset (Macro Kurta Textile Detail) */}
          <div className="editorial-hero__inset-column">
            <div className="editorial-hero__macro-card">
              <div className="editorial-hero__macro-frame">
                <img
                  src="/assets/images/fabric_macro.jpg"
                  alt="Close-up macro detail of festive cotton kurta placket and mother-of-pearl buttons"
                  className="editorial-hero__macro-image"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
              <div className="editorial-hero__macro-meta">
                <span className="editorial-hero__macro-title">Textile &amp; Placket Craft</span>
                <span className="editorial-hero__macro-desc">Woven cotton texture &amp; button detail</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
