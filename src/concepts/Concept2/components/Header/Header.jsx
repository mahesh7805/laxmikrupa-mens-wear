import React, { useState, useEffect } from 'react';
import { MagnifyingGlass, User, Heart, Bag, List, X } from '@phosphor-icons/react';
import './header.css';

export function Header({
  wishlistCount = 0,
  cartCount = 0,
  onOpenWishlist,
  onOpenCart,
  onOpenSearch,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#who-we-are' },
    { label: 'Category', href: '#categories' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Location', href: '#store-locator' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onOpenSearch) {
      onOpenSearch(searchValue);
    }
  };

  return (
    <header className={`c2-header-wrapper ${isScrolled ? 'is-sticky' : ''}`}>
      {/* Top Announcement Bar */}
      <div className="c2-topbar">
        <div className="c2-topbar-container">
          <div className="c2-topbar-left">
            <span>PREMIUM MEN'S WEAR // SURAT • EVERYDAY TO FESTIVE</span>
          </div>
          <div className="c2-topbar-right">
            <a href="#store-locator" onClick={(e) => handleNavClick(e, '#store-locator')}>
              Visit Our Store
            </a>
            <span className="c2-topbar-divider">|</span>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              Bulk & Group Orders
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="c2-navbar" aria-label="Main Navigation">
        <div className="c2-navbar-container">
          {/* Brand Logo */}
          <a href="#hero" className="c2-brand-logo" onClick={(e) => handleNavClick(e, '#hero')}>
            <span className="c2-brand-name">LAXMIKRUPA</span>
            <span className="c2-brand-tagline">MEN'S WEAR // SURAT</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="c2-nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="c2-nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Icons & Search */}
          <div className="c2-nav-actions">
            <form className="c2-search-form" onSubmit={handleSearchSubmit}>
              <MagnifyingGlass size={16} weight="bold" className="c2-search-icon" />
              <input
                type="text"
                className="c2-search-input"
                placeholder="Search for shirts, jeans, kurtas..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>

            <div className="c2-action-buttons">
              <button
                type="button"
                className="c2-icon-btn"
                aria-label="My Account"
                title="Account"
                onClick={() => alert('Account login / customer profile available in store.')}
              >
                <User size={20} weight="regular" />
              </button>

              <button
                type="button"
                className="c2-icon-btn"
                aria-label="Wishlist"
                title="Wishlist"
                onClick={onOpenWishlist}
              >
                <Heart size={20} weight={wishlistCount > 0 ? 'fill' : 'regular'} />
                {wishlistCount > 0 && <span className="c2-badge">{wishlistCount}</span>}
              </button>

              <button
                type="button"
                className="c2-icon-btn"
                aria-label="Cart"
                title="Cart"
                onClick={onOpenCart}
              >
                <Bag size={20} weight="regular" />
                {cartCount > 0 && <span className="c2-badge">{cartCount}</span>}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className="c2-mobile-toggle-btn"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="c2-mobile-menu">
          <div className="c2-mobile-menu-inner">
            <form className="c2-mobile-search-form" onSubmit={handleSearchSubmit}>
              <MagnifyingGlass size={16} weight="bold" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
            <ul className="c2-mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="c2-mobile-nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="c2-mobile-menu-footer">
              <a href="#store-locator" onClick={(e) => handleNavClick(e, '#store-locator')}>
                📍 Visit Surat Store
              </a>
              <a href="tel:+919512705420">📞 +91 95127 05420</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
