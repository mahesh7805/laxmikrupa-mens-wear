import React, { useState } from 'react';
import {
  WhatsappLogo,
  InstagramLogo,
  PaperPlaneTilt,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
} from '@phosphor-icons/react';
import './contact.css';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Festive & Group Order');
  const [message, setMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  // Verified Business Contact Details
  const WA_LINE_1 = '919512905629';
  const WA_LINE_1_FORMATTED = '+91 95129 05629';

  const WA_LINE_2 = '919825405629';
  const WA_LINE_2_FORMATTED = '+91 98254 05629';

  const INSTAGRAM_HANDLE = 'laxmi_krupa.541';
  const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/laxmi_krupa.541/';

  // Quick inquiry templates
  const topics = [
    { label: 'Festive Group Kurta', text: 'Inquiring about group kurtas for an upcoming festive celebration.' },
    { label: 'Wholesale / Bulk', text: 'Interested in placing a wholesale order for retail kurtas.' },
    { label: 'Size & Stock Availability', text: 'Checking size availability for festive kurta sets.' },
    { label: 'Store Visit Hours', text: 'Planning to visit your Surat store this week.' },
  ];

  const handleSelectTopic = (topic) => {
    if (selectedTopic === topic.label) {
      setSelectedTopic('');
      setMessage('');
    } else {
      setSelectedTopic(topic.label);
      setMessage(topic.text);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const customerName = name.trim() || 'Valued Customer';
    const customerPhone = phone.trim() || 'Not Provided';
    const customerMsg = message.trim() || 'I would like to inquire about your collection.';

    const formattedMsg = `Hello Laxmikrupa Emporium,

*New Website Inquiry:*
• *Name:* ${customerName}
• *Phone:* ${customerPhone}
• *Category:* ${inquiryType}

*Message:*
${customerMsg}`;

    const waUrl = `https://wa.me/${WA_LINE_1}?text=${encodeURIComponent(formattedMsg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="mockup-contact reveal-on-scroll" aria-label="Contact and Inquiries">
      <div className="editorial-container">
        
        <div className="mockup-contact__grid">
          
          {/* Left Column: Direct Reach Out */}
          <div className="mockup-contact__left">
            <div className="editorial-micro-label editorial-micro-label--mono">
              05 — GET IN TOUCH
            </div>
            
            <h2 className="mockup-contact__title">
              Let's Stay Connected.
            </h2>
            
            <p className="mockup-contact__desc">
              Have questions about sizes, fabric availability, or custom group orders? Reach out directly to our Surat team.
            </p>

            {/* Direct Channel Cards matching Mockup */}
            <div className="mockup-contact__channels">
              {/* Channel 1: Primary WhatsApp */}
              <a
                href={`https://wa.me/${WA_LINE_1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-contact__channel-card"
                aria-label={`WhatsApp Primary ${WA_LINE_1_FORMATTED}`}
              >
                <div className="mockup-contact__channel-icon mockup-contact__channel-icon--wa">
                  <WhatsappLogo size={22} weight="fill" />
                </div>
                <div className="mockup-contact__channel-info">
                  <span className="mockup-contact__channel-title">WhatsApp Primary Line</span>
                  <span className="mockup-contact__channel-value">{WA_LINE_1_FORMATTED}</span>
                </div>
                <span className="mockup-contact__channel-arrow">Chat ↗</span>
              </a>

              {/* Channel 2: Wholesale WhatsApp */}
              <a
                href={`https://wa.me/${WA_LINE_2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-contact__channel-card"
                aria-label={`WhatsApp Wholesale ${WA_LINE_2_FORMATTED}`}
              >
                <div className="mockup-contact__channel-icon mockup-contact__channel-icon--wa">
                  <WhatsappLogo size={22} weight="fill" />
                </div>
                <div className="mockup-contact__channel-info">
                  <span className="mockup-contact__channel-title">Wholesale &amp; Bulk Orders</span>
                  <span className="mockup-contact__channel-value">{WA_LINE_2_FORMATTED}</span>
                </div>
                <span className="mockup-contact__channel-arrow">Chat ↗</span>
              </a>

              {/* Channel 3: Instagram */}
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mockup-contact__channel-card"
                aria-label={`Instagram Profile @${INSTAGRAM_HANDLE}`}
              >
                <div className="mockup-contact__channel-icon mockup-contact__channel-icon--ig">
                  <InstagramLogo size={22} weight="fill" />
                </div>
                <div className="mockup-contact__channel-info">
                  <span className="mockup-contact__channel-title">Official Instagram</span>
                  <span className="mockup-contact__channel-value">@{INSTAGRAM_HANDLE}</span>
                </div>
                <span className="mockup-contact__channel-arrow">Open ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Send Us A Direct Message Form matching Mockup */}
          <div className="mockup-contact__right">
            <div className="mockup-contact__form-card">
              <h3 className="mockup-contact__form-title">
                Send Us A Direct Message
              </h3>
              <p className="mockup-contact__form-desc">
                Fill your details to start an instant inquiry directly on WhatsApp.
              </p>

              <form onSubmit={handleFormSubmit} className="mockup-contact__form">
                
                <div className="mockup-contact__form-row">
                  <div className="mockup-contact__field">
                    <label htmlFor="contact-name" className="mockup-contact__label">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="mockup-contact__input"
                      placeholder="e.g. Rajesh Shah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mockup-contact__field">
                    <label htmlFor="contact-phone" className="mockup-contact__label">
                      WhatsApp Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="mockup-contact__input"
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mockup-contact__field">
                  <label htmlFor="contact-inquiry-type" className="mockup-contact__label">
                    Inquiry Category
                  </label>
                  <select
                    id="contact-inquiry-type"
                    className="mockup-contact__select"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                  >
                    <option value="Festive & Group Order">Festive &amp; Group Orders (Baraat / Mandali)</option>
                    <option value="Ethnic Wear Retail">Solid / Designer Ethnic Kurtas</option>
                    <option value="Casual Shirts & Trousers">Casual Shirts &amp; Trousers</option>
                    <option value="Wholesale Inquiry">Wholesale Run Inquiry</option>
                    <option value="Store Visit">Surat Store Visit Assistance</option>
                  </select>
                </div>

                {/* Quick Topic Chips */}
                <div className="mockup-contact__topic-chips">
                  {topics.map((t) => (
                    <button
                      key={t.label}
                      type="button"
                      className={`mockup-contact__chip ${
                        selectedTopic === t.label ? 'mockup-contact__chip--active' : ''
                      }`}
                      onClick={() => handleSelectTopic(t)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="mockup-contact__field">
                  <label htmlFor="contact-message" className="mockup-contact__label">
                    Your Message / Requirements
                  </label>
                  <textarea
                    id="contact-message"
                    className="mockup-contact__textarea"
                    placeholder="Describe your desired sizes, quantity, colors, or event date..."
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setSelectedTopic('');
                    }}
                  />
                </div>

                {/* Submit Action matching Mockup */}
                <button
                  type="submit"
                  className="mockup-contact__submit-btn"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  <span>Send Inquiry Via WhatsApp</span>
                  <ArrowRight size={16} weight="bold" />
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
