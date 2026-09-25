import React, { useState } from 'react';
import { InstagramLogo, WhatsappLogo, YoutubeLogo, ArrowRight, Check } from '@phosphor-icons/react';
import './footer.css';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="c2-footer">
      <div className="concept2-container">
        {/* 5-Column Grid */}
        <div className="c2-footer-grid">
          {/* Column 1: Brand & Socials */}
          <div className="c2-footer-col c2-brand-col">
            <div className="c2-footer-logo">
              <span className="c2-logo-title">LAXMIKRUPA</span>
              <span className="c2-logo-tag">MEN'S WEAR // SURAT</span>
            </div>
            <p className="c2-footer-about">
              Men's fashion for everyday moments and special occasions.
            </p>
            <div className="c2-social-links">
              <a
                href="https://instagram.com/laxmi_krupa_skt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramLogo size={20} weight="regular" />
              </a>
              <a
                href="https://wa.me/919512705420"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={20} weight="regular" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YoutubeLogo size={20} weight="regular" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div className="c2-footer-col">
            <h4 className="c2-col-title">Shop</h4>
            <ul className="c2-footer-links">
              <li><a href="#new-arrivals" onClick={(e) => handleSmoothScroll(e, 'new-arrivals')}>New Arrivals</a></li>
              <li><a href="#categories" onClick={(e) => handleSmoothScroll(e, 'categories')}>Shirts</a></li>
              <li><a href="#categories" onClick={(e) => handleSmoothScroll(e, 'categories')}>T-Shirts</a></li>
              <li><a href="#categories" onClick={(e) => handleSmoothScroll(e, 'categories')}>Jeans</a></li>
              <li><a href="#categories" onClick={(e) => handleSmoothScroll(e, 'categories')}>Trousers</a></li>
              <li><a href="#categories" onClick={(e) => handleSmoothScroll(e, 'categories')}>Ethnic Wear</a></li>
              <li><a href="#categories" onClick={(e) => handleSmoothScroll(e, 'categories')}>Festive</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="c2-footer-col">
            <h4 className="c2-col-title">Company</h4>
            <ul className="c2-footer-links">
              <li><a href="#who-we-are" onClick={(e) => handleSmoothScroll(e, 'who-we-are')}>About Us</a></li>
              <li><a href="#why-choose-us" onClick={(e) => handleSmoothScroll(e, 'why-choose-us')}>Why Choose Us</a></li>
              <li><a href="#store-locator" onClick={(e) => handleSmoothScroll(e, 'store-locator')}>Our Store</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact Us</a></li>
              <li><a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')}>Blog</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="c2-footer-col">
            <h4 className="c2-col-title">Support</h4>
            <ul className="c2-footer-links">
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>FAQs</a></li>
              <li><a href="#store-locator" onClick={(e) => handleSmoothScroll(e, 'store-locator')}>Size Guide</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Shipping Policy</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Returns &amp; Exchange</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Column 5: Join Our Newsletter */}
          <div className="c2-footer-col c2-newsletter-col">
            <h4 className="c2-col-title">Join Our Newsletter</h4>
            <p className="c2-newsletter-sub">
              Get updates on new arrivals and special offers.
            </p>
            <form className="c2-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="c2-newsletter-btn"
                aria-label="Subscribe"
              >
                {subscribed ? <Check size={16} weight="bold" /> : <ArrowRight size={16} weight="bold" />}
              </button>
            </form>
            {subscribed && (
              <span className="c2-subscribed-msg">Thank you for subscribing!</span>
            )}
          </div>
        </div>

        {/* Bottom Bar with Divider */}
        <div className="c2-footer-bottom">
          <div className="c2-copyright">
            © 2026 Laxmikrupa Men's Wear. All rights reserved.
          </div>
          <div className="c2-crafted">
            Made with <span className="c2-heart-icon">❤️</span> in Surat
          </div>
        </div>
      </div>
    </footer>
  );
}
