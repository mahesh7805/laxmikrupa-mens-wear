import React from 'react';
import { Sparkle, ShieldCheck, Ruler, UsersThree, ChatCircleDots } from '@phosphor-icons/react';
import './whyus.css';

export const WhyUsSection = () => {
  const features = [
    {
      number: '01',
      icon: <Sparkle size={24} weight="regular" />,
      title: 'Premium Quality Fabrics',
      description:
        'Handpicked pure cottons, rich brocades, and linen blends engineered for breathability and festive elegance.',
    },
    {
      number: '02',
      icon: <Ruler size={24} weight="regular" />,
      title: 'Versatile Range',
      description:
        'Complete size runs from Boys ethnic wear (20–30) to Men’s kurtas & shirts (32–50) with precision tailoring.',
    },
    {
      number: '03',
      icon: <UsersThree size={24} weight="regular" />,
      title: 'Bulk & Group Orders',
      description:
        'Coordinated matching kurtas and festive dress codes for Ganesh Utsav, wedding baraats, and devotional yatras.',
    },
    {
      number: '04',
      icon: <ChatCircleDots size={24} weight="regular" />,
      title: 'Direct Artisan Service',
      description:
        'Personalized Surat store consultation, custom fittings, and prompt direct WhatsApp order assistance.',
    },
  ];

  return (
    <section id="why-us" className="mockup-whyus reveal-on-scroll" aria-label="Why Choose Laxmikrupa">
      <div className="editorial-container">
        
        {/* Header */}
        <div className="mockup-whyus__header">
          <span className="mockup-whyus__eyebrow">
            — REASONS TO CHOOSE US —
          </span>
          <h2 className="mockup-whyus__title">
            Why Choose Laxmikrupa?
          </h2>
          <p className="mockup-whyus__subtitle">
            Over 35 years of trusted craftsmanship, authentic fabrics, and personalized tailoring in Surat.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mockup-whyus__grid">
          {features.map((item, index) => (
            <div
              key={item.number}
              className="mockup-whyus__card reveal-stagger-child"
              style={{ '--stagger': index }}
            >
              <div className="mockup-whyus__card-top">
                <div className="mockup-whyus__card-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <span className="mockup-whyus__card-number">{item.number}</span>
              </div>

              <h3 className="mockup-whyus__card-title">{item.title}</h3>
              <p className="mockup-whyus__card-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
