import React from 'react';
import { ArrowLeft, ArrowUpRight, Sparkle } from '@phosphor-icons/react';
import { getAllCategories } from '../../data/categories';
import { useRoute } from '../../hooks/useRoute';
import './collection.css';

export const CollectionsIndex = () => {
  const { navigate } = useRoute();
  const categories = getAllCategories();

  return (
    <div className="collection-index-page">
      
      {/* Breadcrumb Bar */}
      <div className="collection-breadcrumb-bar">
        <div className="editorial-container collection-breadcrumb-bar__inner">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="collection-breadcrumb-link"
          >
            <ArrowLeft size={15} weight="bold" />
            <span>Home</span>
          </button>
          <span className="collection-breadcrumb-separator">/</span>
          <span className="collection-breadcrumb-current">All Collections</span>
        </div>
      </div>

      {/* Hero */}
      <section className="collection-index-hero">
        <div className="editorial-container">
          <div className="collection-index-hero__content">
            <span className="editorial-micro-label editorial-micro-label--mono">
              TAXONOMY &amp; SELECTIONS // SURAT
            </span>
            <h1 className="collection-index-hero__title">
              Our Collections &amp; Disciplines
            </h1>
            <p className="collection-index-hero__subtitle">
              Explore the full catalog of handcrafted Indian ethnic menswear, tailored casuals, boys sets, and specialized mandali runs.
            </p>
          </div>
        </div>
      </section>

      {/* Category List */}
      <section className="collection-index-grid-section">
        <div className="editorial-container">
          <div className="collection-index-grid">
            {categories.map((cat, index) => (
              <article
                key={cat.slug}
                className="collection-index-card"
                onClick={() => navigate(`/collections/${cat.slug}`)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(`/collections/${cat.slug}`);
                  }
                }}
                aria-label={`View ${cat.name} collection`}
              >
                <div className="collection-index-card__image-frame">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="collection-index-card__image"
                    loading="lazy"
                  />
                  <div className="collection-index-card__overlay" />
                  <span className="collection-index-card__badge">{cat.count}</span>
                </div>

                <div className="collection-index-card__content">
                  <div className="collection-index-card__header">
                    <span className="collection-index-card__eyebrow">
                      COLLECTION 0{index + 1}
                    </span>
                    <h2 className="collection-index-card__name">{cat.name}</h2>
                  </div>

                  <p className="collection-index-card__tagline">{cat.tagline}</p>
                  <p className="collection-index-card__desc">{cat.description}</p>

                  <div className="collection-index-card__cta">
                    <span>Explore Collection</span>
                    <ArrowUpRight size={16} weight="bold" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
