import React from 'react';
import { ArrowRight, Sparkle, Storefront } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import './conceptSelector.css';

export function ConceptSelector() {
  const navigate = useNavigate();

  return (
    <div className="concept-selector-root">
      <div className="concept-selector-container">
        <header className="concept-selector-header">
          <span className="selector-eyebrow">CLIENT PRESENTATION PORTAL</span>
          <h1 className="selector-brand-title">LAXMIKRUPA MEN'S WEAR</h1>
          <p className="selector-subtitle">
            Select a design concept below to explore the interactive storefront experience.
          </p>
        </header>

        <div className="concept-cards-grid">
          {/* Concept 1 Card */}
          <div
            className="concept-card concept-card-1"
            onClick={() => navigate('/concept-1')}
          >
            <div className="concept-card-tag">CONCEPT 01</div>
            <div className="concept-card-icon">
              <Storefront size={32} weight="light" />
            </div>
            <h2 className="concept-card-title">Editorial Flagship &amp; Complete Catalogue</h2>
            <p className="concept-card-desc">
              The full multi-page catalogue with dedicated collection filters, group order builder, and category indexes.
            </p>
            <div className="concept-card-action">
              <span>View Concept 01</span>
              <ArrowRight size={18} weight="bold" />
            </div>
          </div>

          {/* Concept 2 Card */}
          <div
            className="concept-card concept-card-2"
            onClick={() => navigate('/concept-2')}
          >
            <div className="concept-card-tag concept-card-tag-gold">CONCEPT 02</div>
            <div className="concept-card-icon">
              <Sparkle size={32} weight="light" />
            </div>
            <h2 className="concept-card-title">Luxury Lookbook &amp; Editorial Homepage</h2>
            <p className="concept-card-desc">
              High-density luxury fashion lookbook featuring the split hero collage, Why Choose Us dark banner, and heritage story.
            </p>
            <div className="concept-card-action">
              <span>View Concept 02</span>
              <ArrowRight size={18} weight="bold" />
            </div>
          </div>
        </div>

        <footer className="concept-selector-footer">
          <span>Both concepts deployed live from a single React + Vite architecture.</span>
        </footer>
      </div>
    </div>
  );
}

export default ConceptSelector;
