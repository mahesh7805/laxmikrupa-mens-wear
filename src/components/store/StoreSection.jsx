import React from 'react';
import { MapPin, Clock, Phone, ArrowUpRight, WhatsappLogo } from '@phosphor-icons/react';
import './store.css';

export const StoreSection = () => {
  // Exact coordinates: 21.1981862, 72.8365281
  const LAT = 21.1981862;
  const LNG = 72.8365281;
  const MAP_EMBED_URL = `https://maps.google.com/maps?q=${LAT},${LNG}&hl=en&z=18&output=embed`;
  const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

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

        {/* Map Container with Floating Store Card */}
        <div className="mockup-store__map-wrapper">
          
          {/* Interactive Map centered on exact coordinates 21.1981862, 72.8365281 */}
          <div className="mockup-store__map-canvas">
            <iframe
              title="Laxmikrupa Emporium Exact Location"
              src={MAP_EMBED_URL}
              className="mockup-store__map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map centered on Laxmikrupa Emporium at 21.1981862, 72.8365281"
            />
          </div>

          {/* Floating Store Card */}
          <div className="mockup-store__card">
            <div className="live-status-badge">
              <span className="live-status-dot" />
              <span>Surat Flagship Store</span>
            </div>

            <h3 className="mockup-store__card-name">Laxmikrupa Emporium</h3>

            <div className="mockup-store__card-rows">
              <div className="mockup-store__card-row">
                <MapPin size={18} weight="fill" color="#D4A017" />
                <span>
                  11, 12, Moti Super Market, U-10, Danapith Rd,<br />
                  Opp. State Bank of India, Zampa Bazaar,<br />
                  Begampura, Surat, Gujarat 395003
                </span>
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
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-store__btn-directions"
                aria-label="Get Directions to Laxmikrupa Emporium (21.1981862, 72.8365281)"
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
