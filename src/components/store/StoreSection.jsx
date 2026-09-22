import React from 'react';
import { MapPin, Clock, Phone, ArrowUpRight, WhatsappLogo } from '@phosphor-icons/react';
import './store.css';

export const StoreSection = () => {
  const directionsUrl = 'https://maps.google.com/?q=Station+Road+Cinema+Road+Surat+Gujarat+India';

  return (
    <section id="store-info" className="mockup-store reveal-on-scroll" aria-label="Visit Our Surat Store">
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="mockup-store__header">
          <span className="editorial-micro-label editorial-micro-label--mono">
            PHYSICAL DESTINATION // GUJARAT
          </span>
          <h2 className="mockup-store__title">
            Visit Our Surat Store
          </h2>
          <p className="mockup-store__subtitle">
            Experience the tactile feel of our fabrics in person. Located in the heart of Surat's celebrated textile and apparel retail district.
          </p>
        </div>

        {/* Map Container with Floating Store Card matching Mockup */}
        <div className="mockup-store__map-wrapper">
          
          {/* Stylized Architectural Map Background */}
          <div className="mockup-store__map-canvas" aria-hidden="true">
            <svg className="mockup-store__map-svg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(26, 18, 11, 0.06)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="#ECEAE3" />
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Stylized Arteries / Streets */}
              <path d="M 0 180 Q 400 220 700 160 T 1200 240" fill="none" stroke="#DCD9CF" strokeWidth="24" />
              <path d="M 0 180 Q 400 220 700 160 T 1200 240" fill="none" stroke="#FFFFFF" strokeWidth="16" />

              <path d="M 300 0 Q 340 250 420 500" fill="none" stroke="#DCD9CF" strokeWidth="20" />
              <path d="M 300 0 Q 340 250 420 500" fill="none" stroke="#FFFFFF" strokeWidth="14" />

              <path d="M 750 0 L 680 500" fill="none" stroke="#DCD9CF" strokeWidth="18" />
              <path d="M 750 0 L 680 500" fill="none" stroke="#FFFFFF" strokeWidth="12" />

              <path d="M 100 450 Q 500 350 900 420 T 1200 380" fill="none" stroke="#E2DFD6" strokeWidth="14" />
              <path d="M 100 450 Q 500 350 900 420 T 1200 380" fill="none" stroke="#FFFFFF" strokeWidth="8" />

              {/* Landmark Pin Indicator */}
              <circle cx="580" cy="210" r="28" fill="rgba(212, 160, 23, 0.25)" />
              <circle cx="580" cy="210" r="14" fill="#D4A017" />
              <circle cx="580" cy="210" r="6" fill="#1A120B" />
            </svg>

            <div className="mockup-store__map-pin-pulse" style={{ left: '48%', top: '42%' }}>
              <span className="mockup-store__pin-label">LAXMIKRUPA EMPORIUM</span>
            </div>
          </div>

          {/* Floating Store Card matching Mockup */}
          <div className="mockup-store__card">
            <div className="live-status-badge">
              <span className="live-status-dot" />
              <span>Surat Flagship Store</span>
            </div>

            <h3 className="mockup-store__card-name">Laxmikrupa Emporium</h3>

            <div className="mockup-store__card-rows">
              <div className="mockup-store__card-row">
                <MapPin size={18} weight="fill" color="#D4A017" />
                <span>Cinema Road / Station Road Area, Surat, Gujarat 395003</span>
              </div>

              <div className="mockup-store__card-row">
                <Clock size={18} weight="regular" color="#D4A017" />
                <span>Monday – Sunday: 10:00 AM – 9:00 PM IST</span>
              </div>

              <div className="mockup-store__card-row">
                <Phone size={18} weight="regular" color="#D4A017" />
                <span>+91 95129 05629 / +91 98254 05629</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mockup-store__card-actions">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-store__btn-directions"
              >
                <span>Get Directions</span>
                <ArrowUpRight size={15} weight="bold" />
              </a>

              <a
                href="https://wa.me/919512905629?text=Hello%20Laxmikrupa%20Emporium%2C%20I%20am%20planning%20to%20visit%20your%20Surat%20store."
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-store__btn-wa"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>Store Chat</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
