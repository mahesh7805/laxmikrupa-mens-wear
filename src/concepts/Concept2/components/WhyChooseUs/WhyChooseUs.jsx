import React from 'react';
import { Diamond, CoatHanger, UsersThree, ShieldCheck } from '@phosphor-icons/react';
import { getAssetPath } from '../../../../utils/assetPath';
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
      {/* Background with subtle fabric texture */}
      <div
        className="c2-why-bg-texture"
        style={{ backgroundImage: `url(${getAssetPath('/assets/concept-2/fabric_macro.jpg')})` }}
      />
      <div className="c2-why-bg-gradient" />

      <div className="concept2-container c2-why-container">
        {/* Left Column: Heading */}
        <div className="c2-why-left-header">
          <h2 className="c2-why-heading">Why Choose Us</h2>
          <span className="c2-why-subheading">YOUR TRUST, OUR STRENGTH</span>
        </div>

        {/* Vertical Divider Line */}
        <div className="c2-why-main-divider" />

        {/* Right Columns: 4 Horizontal Features with Dividers */}
        <div className="c2-why-features-row">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <React.Fragment key={feature.title}>
                {idx > 0 && <div className="c2-why-col-divider" />}
                <div className="c2-why-col">
                  <div className="c2-why-icon-wrap">
                    <IconComponent size={34} weight="light" className="c2-why-icon" />
                  </div>
                  <h3 className="c2-why-col-title">{feature.title}</h3>
                  <p className="c2-why-col-desc">{feature.description}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
