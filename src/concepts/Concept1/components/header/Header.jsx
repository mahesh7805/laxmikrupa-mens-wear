import React, { useState, useEffect } from 'react';
import {
  Heart,
  List,
  X,
  Storefront,
  WhatsappLogo,
  CaretDown,
} from '@phosphor-icons/react';
import { useRoute } from '../../../../hooks/useRoute';
import { CATEGORIES } from '../../data/categories';
import './header.css';

export const Header = ({ wishlistCount = 0, onOpenWishlist }) => {
  const { currentPath, route, navigate } = useRoute();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or navigation
  useEffect(() => {
    setCollectionsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [currentPath]);

  const handleNavClick = (e, pathOrAnchor) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setCollectionsDropdownOpen(false);

    if (pathOrAnchor.startsWith('#')) {
      if (route === 'home') {
        const target = document.getElementById(pathOrAnchor.replace('#', ''));
        if (target) {
          if (window.__lenis) {
            window.__lenis.scrollTo(target, { offset: -70 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const target = document.getElementById(pathOrAnchor.replace('#', ''));
          if (target) {
            if (window.__lenis) {
              window.__lenis.scrollTo(target, { offset: -70 });
            } else {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 100);
      }
    } else {
      navigate(pathOrAnchor);
    }
  };

  return (
    <header
      className={`editorial-header ${isScrolled ? 'editorial-header--scrolled' : ''}`}
      role="banner"
    >
      <div className="editorial-container editorial-header__inner">
        
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="editorial-header__brand"
          aria-label="Laxmikrupa Emporium Home"
        >
          <span className="editorial-header__brand-main">LAXMIKRUPA</span>
          <span className="editorial-header__brand-sub">EMPORIUM</span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="editorial-header__nav" aria-label="Main Navigation">
          <ul className="editorial-header__nav-list">
            <li>
              <a
                href="/"
                onClick={(e) => handleNavClick(e, '/')}
                className={`editorial-header__nav-link ${route === 'home' ? 'editorial-header__nav-link--active' : ''}`}
              >
                <span>Home</span>
              </a>
            </li>

            {/* Collections Dropdown */}
            <li
              className="editorial-header__nav-item--dropdown"
              onMouseEnter={() => setCollectionsDropdownOpen(true)}
              onMouseLeave={() => setCollectionsDropdownOpen(false)}
            >
              <a
                href="/collections"
                onClick={(e) => handleNavClick(e, '/collections')}
                className={`editorial-header__nav-link ${route === 'collection' || route === 'collections-index' ? 'editorial-header__nav-link--active' : ''}`}
                aria-expanded={collectionsDropdownOpen}
              >
                <span>Collections</span>
                <CaretDown size={12} weight="bold" />
              </a>

              {collectionsDropdownOpen && (
                <div className="editorial-header__dropdown-menu" role="menu">
                  <div className="editorial-header__dropdown-header">
                    <span className="editorial-micro-label editorial-micro-label--mono">
                      CATEGORIES // SURAT ATELIER
                    </span>
                  </div>
                  <ul className="editorial-header__dropdown-list">
                    {CATEGORIES.map((cat) => (
                      <li key={cat.slug} role="none">
                        <a
                          href={`/collections/${cat.slug}`}
                          onClick={(e) => handleNavClick(e, `/collections/${cat.slug}`)}
                          className="editorial-header__dropdown-item"
                          role="menuitem"
                        >
                          <span className="editorial-header__dropdown-item-name">{cat.name}</span>
                          <span className="editorial-header__dropdown-item-count">{cat.count}</span>
                        </a>
                      </li>
                    ))}
                    <li role="none" className="editorial-header__dropdown-divider" />
                    <li role="none">
                      <a
                        href="/collections"
                        onClick={(e) => handleNavClick(e, '/collections')}
                        className="editorial-header__dropdown-item editorial-header__dropdown-item--all"
                        role="menuitem"
                      >
                        <span>View All Collections</span>
                        <span>↗</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a
                href="#why-us"
                onClick={(e) => handleNavClick(e, '#why-us')}
                className="editorial-header__nav-link"
              >
                <span>Why Us</span>
              </a>
            </li>

            <li>
              <a
                href="#store-info"
                onClick={(e) => handleNavClick(e, '#store-info')}
                className="editorial-header__nav-link"
              >
                <span>Store Info</span>
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="editorial-header__nav-link"
              >
                <span>Contact</span>
              </a>
            </li>
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
            <Heart size={19} weight={wishlistCount > 0 ? 'fill' : 'regular'} color={wishlistCount > 0 ? '#D4A017' : 'currentColor'} />
            {wishlistCount > 0 && (
              <span className="editorial-header__badge-count">{wishlistCount}</span>
            )}
          </button>

          {/* Dark Pill CTA Button */}
          <button
            type="button"
            onClick={(e) => handleNavClick(e, '#store-info')}
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
          <span className="editorial-header__mobile-brand-desc">Zampa Bazaar, Begampura, Surat</span>
        </div>

        <ul className="editorial-header__mobile-nav">
          <li>
            <a
              href="/"
              className="editorial-header__mobile-link"
              onClick={(e) => handleNavClick(e, '/')}
            >
              Home
            </a>
          </li>

          <li>
            <div className="editorial-header__mobile-section-title">
              Collections
            </div>
            <div className="editorial-header__mobile-cat-grid">
              {CATEGORIES.map((cat) => (
                <a
                  key={cat.slug}
                  href={`/collections/${cat.slug}`}
                  className="editorial-header__mobile-cat-link"
                  onClick={(e) => handleNavClick(e, `/collections/${cat.slug}`)}
                >
                  <span>{cat.name}</span>
                </a>
              ))}
            </div>
          </li>

          <li>
            <a
              href="#why-us"
              className="editorial-header__mobile-link"
              onClick={(e) => handleNavClick(e, '#why-us')}
            >
              Why Us
            </a>
          </li>

          <li>
            <a
              href="#store-info"
              className="editorial-header__mobile-link"
              onClick={(e) => handleNavClick(e, '#store-info')}
            >
              Store Info
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="editorial-header__mobile-link"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact
            </a>
          </li>
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
