import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  SlidersHorizontal,
  ArrowUpRight,
  WhatsappLogo,
  CheckCircle,
  Sparkle,
  ShieldCheck,
  Funnel,
} from '@phosphor-icons/react';
import { getCategoryBySlug, getAllCategories } from '../../data/categories';
import { getProductsByCategory } from '../../data/products';
import { ProductCard } from '../../components/products/ProductCard';
import { QuickViewModal } from '../../components/products/QuickViewModal';
import { useRoute } from '../../hooks/useRoute';
import './collection.css';

export const CollectionPage = ({ categorySlug, wishlist = [], onToggleWishlist }) => {
  const { navigate } = useRoute();
  const category = getCategoryBySlug(categorySlug);
  const allProducts = useMemo(() => getProductsByCategory(categorySlug), [categorySlug]);

  // Filter & Sort State
  const [activeSubcategory, setActiveSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Group Order Builder State for special category
  const [groupQuantity, setGroupQuantity] = useState('25-50');
  const [groupEventType, setGroupEventType] = useState('Ganesh Utsav / Festival Mandali');
  const [groupNotes, setGroupNotes] = useState('');

  if (!category) {
    return (
      <div className="collection-not-found editorial-container">
        <div className="collection-not-found__card">
          <span className="editorial-micro-label editorial-micro-label--mono">404 // COLLECTION</span>
          <h1 className="collection-not-found__title">Collection Not Found</h1>
          <p className="collection-not-found__desc">
            The collection you are looking for is currently being curated at our Surat store.
          </p>
          <button
            type="button"
            onClick={() => navigate('/collections')}
            className="editorial-button editorial-button--primary"
          >
            <ArrowLeft size={16} weight="bold" />
            <span>View All Collections</span>
          </button>
        </div>
      </div>
    );
  }

  // Filter products by subcategory and availability
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Subcategory filter
      if (activeSubcategory !== 'all' && product.subcategorySlug !== activeSubcategory) {
        return false;
      }
      // Availability filter
      if (availabilityFilter === 'in-stock' && product.availability !== 'in-stock') {
        return false;
      }
      if (availabilityFilter === 'group-available' && !product.groupOrderAvailable) {
        return false;
      }
      return true;
    });
  }, [allProducts, activeSubcategory, availabilityFilter]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-low') {
      return list.sort((a, b) => a.priceNumeric - b.priceNumeric);
    }
    if (sortBy === 'price-high') {
      return list.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }
    if (sortBy === 'newest') {
      return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return list; // 'featured' as default
  }, [filteredProducts, sortBy]);

  const handleGroupInquiry = (e) => {
    e.preventDefault();
    const msg = `Hello Laxmikrupa Emporium,

*Bulk / Group Order Inquiry:*
• *Event Type:* ${groupEventType}
• *Estimated Quantity:* ${groupQuantity} pieces
• *Collection:* ${category.name}
• *Requirements:* ${groupNotes || 'Requesting size breakdown and quotation.'}

Could you please share quotation and delivery timelines for Surat / shipping?`;
    
    window.open(`https://wa.me/919825405629?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="collection-page">
      
      {/* Breadcrumb Navigation */}
      <div className="collection-breadcrumb-bar">
        <div className="editorial-container collection-breadcrumb-bar__inner">
          <button
            type="button"
            onClick={() => navigate('/collections')}
            className="collection-breadcrumb-link"
          >
            <ArrowLeft size={15} weight="bold" />
            <span>All Collections</span>
          </button>
          <span className="collection-breadcrumb-separator">/</span>
          <span className="collection-breadcrumb-current">{category.name}</span>
        </div>
      </div>

      {/* 1. CATEGORY HERO */}
      <section className="collection-hero" aria-label={`${category.name} Collection Hero`}>
        <div className="editorial-container collection-hero__grid">
          
          {/* Left Hero Details */}
          <div className="collection-hero__left">
            <div className="collection-hero__eyebrow-tag">
              <span className="collection-hero__number">01</span>
              <span className="collection-hero__line" aria-hidden="true" />
              <span>{category.eyebrow}</span>
            </div>

            <h1 className="collection-hero__title">{category.name}</h1>
            
            <p className="collection-hero__tagline">{category.tagline}</p>
            
            <p className="collection-hero__description">{category.description}</p>

            <div className="collection-hero__meta-pills">
              <span className="collection-hero__meta-pill">
                <Sparkle size={14} weight="fill" color="#D4A017" />
                <span>{category.count}</span>
              </span>
              <span className="collection-hero__meta-pill">
                <ShieldCheck size={14} weight="fill" color="#D4A017" />
                <span>Surat Atelier Handcrafted</span>
              </span>
            </div>
          </div>

          {/* Right Hero Image Frame */}
          <div className="collection-hero__right">
            <div className="collection-hero__image-frame">
              <img
                src={category.heroImage || category.image}
                alt={`${category.name} editorial showcase`}
                className="collection-hero__image"
                loading="eager"
                fetchpriority="high"
                width="560"
                height="680"
              />
              <div className="collection-hero__image-caption">
                <span>Laxmikrupa Emporium // Surat Flagship Selection</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHAT MAKES THIS COLLECTION SPECIAL */}
      {category.specialties && category.specialties.length > 0 && (
        <section className="collection-specialties" aria-label="What Makes This Collection Special">
          <div className="editorial-container">
            
            <div className="collection-specialties__header">
              <span className="editorial-micro-label editorial-micro-label--mono">
                DISCIPLINE &amp; CRAFTSMANSHIP
              </span>
              <h2 className="collection-specialties__title">
                What Makes This Collection Special
              </h2>
            </div>

            <div className="collection-specialties__grid">
              {category.specialties.map((item) => (
                <div key={item.number} className="collection-specialty-card">
                  <div className="collection-specialty-card__index">{item.number}</div>
                  <h3 className="collection-specialty-card__title">{item.title}</h3>
                  <p className="collection-specialty-card__desc">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 3. SPECIAL GROUP ORDER INQUIRY EXPERIENCE (If category is group-orders) */}
      {category.isSpecialInquiry && (
        <section className="collection-group-builder" aria-label="Group and Bulk Order Consultation">
          <div className="editorial-container">
            <div className="collection-group-builder__card">
              <div className="collection-group-builder__left">
                <span className="editorial-micro-label editorial-micro-label--mono" style={{ color: '#D4A017' }}>
                  DIRECT SURAT ATELIER RUNS
                </span>
                <h2 className="collection-group-builder__title">
                  {category.specialInquiryDetails?.headline || 'Plan Your Group Order'}
                </h2>
                <p className="collection-group-builder__desc">
                  {category.specialInquiryDetails?.subheadline || 'Coordinate uniform colors, multiple size ranges (32–50), and custom quantities with our master tailors.'}
                </p>

                <div className="collection-group-builder__features">
                  <div className="collection-group-builder__feature">
                    <CheckCircle size={18} weight="fill" color="#D4A017" />
                    <span>Exact color matching across 10 to 500+ pieces</span>
                  </div>
                  <div className="collection-group-builder__feature">
                    <CheckCircle size={18} weight="fill" color="#D4A017" />
                    <span>Complete adult and youth size distributions</span>
                  </div>
                  <div className="collection-group-builder__feature">
                    <CheckCircle size={18} weight="fill" color="#D4A017" />
                    <span>Specialized bulk wholesale pricing</span>
                  </div>
                </div>
              </div>

              <div className="collection-group-builder__right">
                <form onSubmit={handleGroupInquiry} className="collection-group-builder__form">
                  <h3 className="collection-group-builder__form-title">Request Bulk Quotation</h3>
                  
                  <div className="collection-group-builder__field">
                    <label className="collection-group-builder__label">Event / Occasion</label>
                    <select
                      className="collection-group-builder__select"
                      value={groupEventType}
                      onChange={(e) => setGroupEventType(e.target.value)}
                    >
                      <option value="Ganesh Utsav / Festival Mandali">Ganesh Utsav / Festival Mandali</option>
                      <option value="Wedding Baraat & Groom Squad">Wedding Baraat &amp; Groom Squad</option>
                      <option value="Kavad Yatra / Bol Bam Devotional">Kavad Yatra / Bol Bam Devotional</option>
                      <option value="Corporate / Institution Celebration">Corporate / Institution Celebration</option>
                    </select>
                  </div>

                  <div className="collection-group-builder__field">
                    <label className="collection-group-builder__label">Estimated Quantity</label>
                    <select
                      className="collection-group-builder__select"
                      value={groupQuantity}
                      onChange={(e) => setGroupQuantity(e.target.value)}
                    >
                      <option value="10 - 25">10 – 25 pieces</option>
                      <option value="25 - 50">25 – 50 pieces</option>
                      <option value="50 - 100">50 – 100 pieces</option>
                      <option value="100 - 250">100 – 250 pieces</option>
                      <option value="250 - 500+">250 – 500+ pieces (Workshop Run)</option>
                    </select>
                  </div>

                  <div className="collection-group-builder__field">
                    <label className="collection-group-builder__label">Color / Requirements</label>
                    <input
                      type="text"
                      className="collection-group-builder__input"
                      placeholder="e.g. Saffron / Bhagwa kurtas for 35 members"
                      value={groupNotes}
                      onChange={(e) => setGroupNotes(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="editorial-button editorial-button--primary" style={{ width: '100%', marginTop: '8px' }}>
                    <WhatsappLogo size={18} weight="fill" />
                    <span>Inquire Bulk Order on WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. CATALOGUE SECTION */}
      <section className="collection-catalogue" aria-label="Collection Product Catalogue">
        <div className="editorial-container">
          
          {/* Catalogue Control Bar */}
          <div className="collection-catalogue__header">
            <div className="collection-catalogue__title-group">
              <span className="collection-catalogue__eyebrow">
                {category.name.toUpperCase()} CATALOGUE
              </span>
              <h2 className="collection-catalogue__title">
                {category.name}
              </h2>
              <span className="collection-catalogue__count">
                Showing {sortedProducts.length} styles
              </span>
            </div>

            {/* Sorting & Availability Toolbar */}
            <div className="collection-catalogue__controls">
              
              {/* Availability Filter */}
              <div className="collection-catalogue__control-group">
                <label htmlFor="avail-filter" className="collection-catalogue__control-label">
                  Stock:
                </label>
                <select
                  id="avail-filter"
                  className="collection-catalogue__select"
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value)}
                >
                  <option value="all">All Items</option>
                  <option value="in-stock">In Stock Only</option>
                  <option value="group-available">Group Orders</option>
                </select>
              </div>

              {/* Sort By Dropdown */}
              <div className="collection-catalogue__control-group">
                <label htmlFor="sort-filter" className="collection-catalogue__control-label">
                  Sort:
                </label>
                <select
                  id="sort-filter"
                  className="collection-catalogue__select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>

            </div>
          </div>

          {/* Subcategory Pills Bar */}
          {category.subcategories && category.subcategories.length > 1 && (
            <div className="collection-catalogue__pills-strip" role="tablist">
              {category.subcategories.map((sub) => (
                <button
                  key={sub.slug}
                  type="button"
                  role="tab"
                  aria-selected={activeSubcategory === sub.slug}
                  className={`collection-catalogue__pill ${
                    activeSubcategory === sub.slug ? 'collection-catalogue__pill--active' : ''
                  }`}
                  onClick={() => setActiveSubcategory(sub.slug)}
                >
                  <span>{sub.name}</span>
                </button>
              ))}
            </div>
          )}

          {/* Product Grid */}
          {sortedProducts.length > 0 ? (
            <div className="collection-catalogue__grid">
              {sortedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="collection-catalogue__empty">
              <p>No products match the selected filters for this collection.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveSubcategory('all');
                  setAvailabilityFilter('all');
                }}
                className="editorial-button editorial-button--secondary"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          isWishlisted={wishlist.includes(quickViewProduct.id)}
          onToggleWishlist={onToggleWishlist}
        />
      )}

    </div>
  );
};
