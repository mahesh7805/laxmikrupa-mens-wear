import React from 'react';
import { Storefront, Clock, UsersThree, Scissors, ArrowUpRight } from '@phosphor-icons/react';
import './about.css';

export const AboutSection = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact-us');
    if (contactEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(contactEl, { offset: -70 });
      } else {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="atelier" className="editorial-about reveal-on-scroll" aria-label="About Laxmikrupa Emporium Surat Store">
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-section-label">
            <span className="editorial-section-number">03</span>
            <span className="editorial-section-divider-line" aria-hidden="true" />
            <span>ATELIER &amp; SURAT STORE CRAFT</span>
          </div>
          <h2 className="editorial-section-title">
            The Surat Menswear Destination
          </h2>
          <p className="editorial-section-subtitle">
            Rooted in Gujarat's textile capital, Laxmikrupa Emporium caters to individual festive attire, complete family coordination, and grand event mandali runs.
          </p>
        </div>

        {/* Asymmetric Storytelling Layout */}
        <div className="editorial-about__grid">
          
          {/* Left Column: Architectural Photo with Tag */}
          <div className="editorial-about__visual-frame reveal-stagger-child" style={{ '--stagger': 0 }}>
            <img
              src="/assets/images/store_atelier.jpg"
              alt="Laxmikrupa Emporium Surat Store Interior showcasing textiles and tailored ethnic wear"
              className="editorial-about__image"
              loading="lazy"
              width="640"
              height="420"
            />
            
            {/* Live Service Availability Card */}
            <div className="editorial-about__status-card">
              <div className="live-status-badge">
                <span className="live-status-dot" aria-hidden="true" />
                <span>Open Today • 10:00 AM – 9:00 PM IST</span>
              </div>
              <span className="editorial-about__status-meta">
                Cinema / Station Road Area • Surat, Gujarat
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Factual Features */}
          <div className="editorial-about__content reveal-stagger-child" style={{ '--stagger': 1 }}>
            
            <div className="editorial-about__text-block">
              <h3 className="editorial-about__heading">
                Celebratory Tradition &amp; Bulk Mandali Scale
              </h3>
              <p className="editorial-about__paragraph">
                Whether selecting a single solid Mandarin kurta for Ganesh Utsav or outfitting an entire 50-person wedding baraat with matching motifs, our Surat atelier provides tailored consistency across every size category.
              </p>
            </div>

            {/* Factual Value Highlights */}
            <div className="editorial-about__features">
              <div className="editorial-about__feature-item">
                <div className="editorial-about__feature-icon">
                  <Scissors size={20} weight="regular" />
                </div>
                <div>
                  <h4 className="editorial-about__feature-title">Size Runs: 20 to 50</h4>
                  <p className="editorial-about__feature-desc">
                    Comprehensive sizing across boys ethnic sets (20–30) to men's festive kurtas (32–50).
                  </p>
                </div>
              </div>

              <div className="editorial-about__feature-item">
                <div className="editorial-about__feature-icon">
                  <UsersThree size={20} weight="regular" />
                </div>
                <div>
                  <h4 className="editorial-about__feature-title">Group &amp; Family Matching</h4>
                  <p className="editorial-about__feature-desc">
                    Harmonized fabric tones and patterns across festivals, wedding mandalis, and devotional yatras.
                  </p>
                </div>
              </div>

              <div className="editorial-about__feature-item">
                <div className="editorial-about__feature-icon">
                  <Storefront size={20} weight="regular" />
                </div>
                <div>
                  <h4 className="editorial-about__feature-title">Direct Store Assistance</h4>
                  <p className="editorial-about__feature-desc">
                    Dedicated WhatsApp support directly with our Surat store team for stock verification and bulk quotes.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="editorial-about__cta-strip">
              <a
                href="#contact-us"
                onClick={handleScrollToContact}
                className="editorial-button editorial-button--secondary"
              >
                <span>Plan Store Visit or Inquiry</span>
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
