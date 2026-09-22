import React, { useState, useEffect } from 'react';
import { MagnifyingGlass, Bag, List, X, WhatsappLogo, ChatCircleDots } from '@phosphor-icons/react';
import './header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById('contact-us');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Authoritative taxonomy links from PRODUCT.md
  const primaryNavItems = [
    { label: 'Ethnic Wear', href: '#ethnic-wear' },
    { label: 'Shirts & Casuals', href: '#shirts-casuals' },
    { label: 'Festive & Group Orders', href: '#festive-group-orders' },
  ];

  return (
    <header
      className={`editorial-header ${isScrolled ? 'editorial-header--scrolled' : ''}`}
      role="banner"
    >
      <div className="editorial-container editorial-header__inner">
        {/* Brand Identity */}
        <a href="#" className="editorial-header__brand" aria-label="Laxmikrupa Emporium Home">
          <span className="editorial-header__brand-main">LAXMIKRUPA</span>
          <span className="editorial-header__brand-sub">MEN'S WEAR // SURAT</span>
        </a>

        {/* Primary Desktop Navigation */}
        <nav className="editorial-header__nav" aria-label="Main Store Navigation">
          <ul className="editorial-header__nav-list">
            {primaryNavItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="editorial-header__nav-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="editorial-header__nav-separator" aria-hidden="true">|</li>
            <li>
              <a href="#contact-us" onClick={scrollToContact} className="editorial-header__nav-link editorial-header__nav-link--service">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Utility Actions */}
        <div className="editorial-header__actions">
          {/* Header Contact Us CTA with Smooth Scroll */}
          <button
            type="button"
            onClick={scrollToContact}
            className="editorial-header__contact-cta"
            aria-label="Scroll to Contact Us section"
          >
            <ChatCircleDots size={16} weight="regular" />
            <span>Contact Us</span>
          </button>

          <a
            href="https://wa.me/919512905629"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-header__action-btn editorial-header__whatsapp-btn"
            aria-label="Direct WhatsApp Inquiry (+91 95129 05629)"
            title="Direct WhatsApp Assistance"
          >
            <WhatsappLogo size={20} weight="regular" />
            <span className="editorial-header__action-label">WhatsApp</span>
          </a>

          <button
            type="button"
            className="editorial-header__action-btn"
            aria-label="Search Collections"
          >
            <MagnifyingGlass size={20} weight="regular" />
          </button>

          <button
            type="button"
            className="editorial-header__action-btn"
            aria-label="Saved Items / Bag, 0 items"
          >
            <Bag size={20} weight="regular" />
            <span className="editorial-header__bag-count">0</span>
          </button>

          <button
            type="button"
            className="editorial-header__action-btn editorial-header__menu-trigger"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`editorial-header__mobile-menu ${
          mobileMenuOpen ? 'editorial-header__mobile-menu--open' : ''
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="editorial-header__mobile-brand-strip">
          <span className="editorial-header__mobile-store-name">Laxmikrupa Emporium</span>
          <span className="editorial-header__mobile-location">Surat, Gujarat</span>
        </div>

        <ul className="editorial-header__mobile-nav-list">
          {primaryNavItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="editorial-header__mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="editorial-header__mobile-divider" aria-hidden="true" />

          <li>
            <a
              href="#contact-us"
              className="editorial-header__mobile-nav-link editorial-header__mobile-nav-link--service"
              onClick={scrollToContact}
            >
              Contact Us / Store Reach Out
            </a>
          </li>

          <li className="editorial-header__mobile-contact-item">
            <a
              href="https://wa.me/919512905629"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-button editorial-button--secondary editorial-header__mobile-whatsapp-cta"
            >
              <WhatsappLogo size={18} weight="fill" />
              <span>WhatsApp Store Chat</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
