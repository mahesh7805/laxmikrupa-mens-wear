import React from 'react';
import './styles/base.css';
import './styles/primitives.css';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { ContactSection } from './components/contact/ContactSection';

export function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
