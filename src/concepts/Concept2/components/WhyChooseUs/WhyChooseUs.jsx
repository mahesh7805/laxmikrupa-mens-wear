import React from 'react';
import { Diamond, CoatHanger, UsersThree, ShieldCheck } from '@phosphor-icons/react';
import './whyChooseUs.css';

export function WhyChooseUs() {
  const features = [
    {
      icon: Diamond,
      title: 'Premium Quality',
      description: 'High-grade fabrics, breathable weaves and reinforced stitching.',
    },
    {
      icon: CoatHanger,
      title: 'Wide Range',
      description: 'From everyday t-shirts to royal festive kurtas.',
    },
    {
      icon: UsersThree,
      title: 'Bulk & Group Orders',
      description: 'Special pricing for weddings, events and corporate uniforms.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted In-Store Service',
      description: 'Direct consultation and custom fitting in Surat.',
    },
  ];

  return (
    <section id="why-choose-us" className="c2-why-section">
      <div className="concept2-container">
        {/* Section Header */}
        <div className="c2-why-header">
          <h2 className="c2-why-heading">Why Choose Us</h2>
          <div className="c2-why-subheading">YOUR TRUST, OUR STRENGTH</div>
        </div>

        {/* 4 Feature Pillars Grid with Vertical Dividers */}
        <div className="c2-why-grid">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="c2-why-col">
                <div className="c2-why-icon-wrap">
                  <IconComponent size={34} weight="light" className="c2-why-icon" />
                </div>
                <h3 className="c2-why-col-title">{feature.title}</h3>
                <p className="c2-why-col-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
