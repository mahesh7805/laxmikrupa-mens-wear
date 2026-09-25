import React from 'react';
import { MapPin, Clock, ArrowRight, ArrowSquareOut } from '@phosphor-icons/react';
import './storeLocator.css';

export function StoreLocator() {
  const handleOpenGoogleMaps = () => {
    window.open(
      'https://maps.google.com/?q=Laxmikrupa+Mens+Wear+Surat+Station+Road',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="store-locator" className="c2-store-section">
      <div className="concept2-container c2-store-container">
        {/* Left Column: Store Information */}
        <div className="c2-store-left">
          <div className="c2-numbered-header">
            <h2 className="c2-heading">Visit Our Store</h2>
            <div className="c2-subtitle">COME SAY HELLO</div>
          </div>

          <p className="c2-store-intro">
            Experience our collection in person at our Surat store. We'd love to welcome you!
          </p>

          <button
            type="button"
            className="c2-btn-outline c2-directions-btn"
            onClick={handleOpenGoogleMaps}
          >
            <span>Get Directions</span>
            <ArrowRight size={15} weight="bold" />
          </button>

          {/* Store Info Box */}
          <div className="c2-store-infobox">
            <div className="c2-info-row">
              <div className="c2-info-icon">
                <MapPin size={22} weight="regular" />
              </div>
              <div className="c2-info-content">
                <strong>Laxmikrupa Men's Wear</strong>
                <span>Kinkhab Road, Station Road Area, Surat, Gujarat, India</span>
              </div>
            </div>

            <div className="c2-info-row">
              <div className="c2-info-icon">
                <Clock size={22} weight="regular" />
              </div>
              <div className="c2-info-content">
                <strong>Store Hours</strong>
                <span>Mon – Sat | 10:00 AM – 8:30 PM</span>
              </div>
            </div>

            <div className="c2-open-badge">
              <span className="c2-badge-dot">●</span>
              <span>Open Now</span>
            </div>
          </div>
        </div>

        {/* Right Column: Styled Map */}
        <div className="c2-store-right">
          <div className="c2-map-frame" onClick={handleOpenGoogleMaps}>
            {/* SVG Stylized Map of Surat */}
            <svg
              viewBox="0 0 700 400"
              className="c2-map-svg"
              aria-label="Map location of Laxmikrupa Men's Wear in Surat"
            >
              {/* Land Background */}
              <rect width="700" height="400" fill="#E8ECEF" />
              
              {/* Tapi River Path */}
              <path
                d="M -20,250 C 150,220 220,310 380,260 C 500,220 620,280 720,240 L 720,400 L -20,400 Z"
                fill="#C6DBE8"
              />
              
              {/* Major Roads Grid */}
              <path
                d="M 50,0 L 280,400 M 200,0 L 450,400 M 400,0 L 650,400 M 0,150 L 700,100 M 0,220 L 700,200 M 150,0 L 150,400 M 550,0 L 550,400"
                stroke="#FFFFFF"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 50,0 L 280,400 M 200,0 L 450,400 M 400,0 L 650,400 M 0,150 L 700,100 M 0,220 L 700,200"
                stroke="#F9E2AF"
                strokeWidth="4"
                fill="none"
              />
              
              {/* Surat Landmarks Labels */}
              <text x="180" y="80" fill="#788896" fontSize="11" fontFamily="sans-serif" fontWeight="600">Katargam</text>
              <text x="520" y="90" fill="#788896" fontSize="11" fontFamily="sans-serif" fontWeight="600">Nana Varachha</text>
              <text x="440" y="320" fill="#788896" fontSize="11" fontFamily="sans-serif" fontWeight="600">Varachha</text>
              <text x="120" y="300" fill="#788896" fontSize="11" fontFamily="sans-serif" fontWeight="600">Surat Railway Station</text>
              
              {/* Pin Marker with Pulsing Glow */}
              <g transform="translate(360, 180)">
                <circle cx="0" cy="0" r="14" fill="#C2410C" opacity="0.25">
                  <animate attributeName="r" values="10;22;10" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="9" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2.5" />
                <rect x="18" y="-14" width="170" height="26" rx="4" fill="#FFFFFF" stroke="#E2DCD5" strokeWidth="1" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.1))" />
                <text x="26" y="3" fill="#1A120B" fontSize="11" fontWeight="700" fontFamily="sans-serif">Laxmikrupa Men's Wear</text>
              </g>
            </svg>

            {/* View Larger Map Overlay Button */}
            <button
              type="button"
              className="c2-larger-map-btn"
              onClick={handleOpenGoogleMaps}
            >
              <span>View Larger Map</span>
              <ArrowSquareOut size={13} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
