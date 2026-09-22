import React, { useState, useEffect } from 'react';
import {
  MagnifyingGlass,
  Heart,
  List,
  X,
  Storefront,
  WhatsappLogo,
  ArrowUpRight,
} from '@phosphor-icons/react';
import './header.css';

export const Header = ({ wishlistCount = 0, onOpenWishlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -70 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'why-us', label: 'Why Us', href: '#why-us' },
    { id: 'categories', label: 'Shop', href: '#categories' },
    { id: 'catalog', label: 'Catalog', href: '#catalog' },
    { id: 'store-info', label: 'Store Info', href: '#store-info' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`editorial-header ${isScrolled ? 'editorial-header--scrolled' : ''}`}
      role="banner"
    >
      <div className="editorial-container editorial-header__inner">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="editorial-header__brand"
          aria-label="Laxmikrupa Emporium Home"
        >
          <span className="editorial-header__brand-main">LAXMIKRUPA</span>
          <span className="editorial-header__brand-sub">EMPORIUM // MEN'S WEAR</span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="editorial-header__nav" aria-label="Main Navigation">
          <ul className="editorial-header__nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="editorial-header__nav-link"
                >
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="editorial-header__actions">
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/919512905629?text=Hello%20Laxmikrupa%20Emporium%2C%20I%20am%20browsing%20your%20website%20collection."
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-header__action-icon editorial-header__wa-btn"
            aria-label="WhatsApp Store Inquiry"
            title="Direct WhatsApp"
          >
            <WhatsappLogo size={19} weight="fill" />
          </a>

          {/* Wishlist Button with Counter */}
          <button
            type="button"
            className="editorial-header__action-icon editorial-header__wishlist-btn"
            onClick={onOpenWishlist}
            aria-label={`Wishlist, ${wishlistCount} saved items`}
            title="View Wishlist"
          >
            <Heart size={19} weight={wishlistCount > 0 ? 'fill' : 'regular'} color={wishlistCount > 0 ? '#B8860B' : 'currentColor'} />
            {wishlistCount > 0 && (
              <span className="editorial-header__badge-count">{wishlistCount}</span>
            )}
          </button>

          {/* Dark Pill CTA Button matching mockup */}
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'store-info')}
            className="editorial-header__cta-pill"
          >
            <Storefront size={15} weight="bold" />
            <span>Visit Store</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="editorial-header__menu-trigger"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`editorial-header__mobile-drawer ${mobileMenuOpen ? 'editorial-header__mobile-drawer--open' : ''}`}>
        <div className="editorial-header__mobile-brand-box">
          <span className="editorial-header__mobile-brand-title">Laxmikrupa Emporium</span>
          <span className="editorial-header__mobile-brand-desc">Cinema Road / Station Road Area, Surat</span>
        </div>

        <ul className="editorial-header__mobile-nav">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="editorial-header__mobile-link"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="editorial-header__mobile-cta-box">
          <a
            href="https://wa.me/919512905629?text=Hello%20Laxmikrupa%20Emporium%2C%20I%20would%20like%20to%20inquire%20about%20your%20collection."
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-button editorial-button--primary"
            style={{ width: '100%' }}
          >
            <WhatsappLogo size={18} weight="fill" />
            <span>WhatsApp Direct Inquiry</span>
          </a>
        </div>
      </div>
    </header>
  );
};
