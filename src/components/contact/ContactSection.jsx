import React, { useState } from 'react';
import {
  WhatsappLogo,
  InstagramLogo,
  PaperPlaneTilt,
  MapPin,
  Clock,
  ArrowUpRight,
  ChatCircleDots,
} from '@phosphor-icons/react';
import './contact.css';

export const ContactSection = () => {
  const [message, setMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  // Verified Business Contact Details
  const WA_LINE_1 = '919512905629';
  const WA_LINE_1_FORMATTED = '+91 95129 05629';

  const WA_LINE_2 = '919825405629';
  const WA_LINE_2_FORMATTED = '+91 98254 05629';

  const INSTAGRAM_HANDLE = 'laxmi_krupa.541';
  const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/laxmi_krupa.541/';
  const INSTAGRAM_DM_URL = 'https://ig.me/m/laxmi_krupa.541';

  // Quick inquiry templates
  const topics = [
    { label: 'Festive / Group Kurtas', text: 'Hello Laxmikrupa Emporium, I would like to inquire about festive group kurtas for an upcoming event.' },
    { label: 'Wholesale / Bulk Order', text: 'Hello, I am interested in placing a wholesale / bulk order for your ethnic kurta collection.' },
    { label: 'Size & Stock Availability', text: 'Hello, I want to check size availability for your festive kurta sets.' },
    { label: 'Store Visit / Location', text: 'Hello, I plan to visit your Surat store and would like to confirm store hours and location details.' },
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

  // Safe URL encoding for WhatsApp links
  const defaultText = 'Hello Laxmikrupa Emporium, I am browsing your online collection and have an inquiry.';
  const messageToSend = message.trim() || defaultText;
  const encodedText = encodeURIComponent(messageToSend);

  const waLine1Link = `https://wa.me/${WA_LINE_1}?text=${encodedText}`;
  const waLine2Link = `https://wa.me/${WA_LINE_2}?text=${encodedText}`;

  return (
    <section id="contact-us" className="editorial-contact" aria-label="Contact and Inquiries">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="editorial-contact__header">
          <span className="editorial-micro-label">
            DIRECT ASSISTANCE // SURAT STORE
          </span>
          <h2 className="editorial-contact__title">
            Connect With Laxmikrupa
          </h2>
          <p className="editorial-contact__subtitle">
            Draft a message to connect instantly via WhatsApp, or reach out to our Surat team directly for retail and bulk event orders.
          </p>
        </div>

        <div className="editorial-contact__layout">
          {/* Left Column: Interactive Message Composer */}
          <div className="editorial-contact__composer-card">
            <div className="editorial-contact__composer-heading">
              <span className="editorial-contact__composer-title">Compose Your Inquiry</span>
              <span className="editorial-contact__composer-desc">
                Type your message below and choose your preferred destination.
              </span>
            </div>

            {/* Quick Topic Chips */}
            <div className="editorial-contact__topic-chips" role="group" aria-label="Common inquiry topics">
              {topics.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  className={`editorial-contact__chip ${
                    selectedTopic === t.label ? 'editorial-contact__chip--active' : ''
                  }`}
                  onClick={() => handleSelectTopic(t)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Text Area */}
            <div className="editorial-contact__textarea-wrapper">
              <label htmlFor="inquiry-message" className="editorial-contact__textarea-label">
                Your Message
              </label>
              <textarea
                id="inquiry-message"
                className="editorial-contact__textarea"
                placeholder="Type your question about kurtas, group orders, colors, sizes, or wholesale..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setSelectedTopic('');
                }}
                rows={4}
              />
            </div>

            {/* 3 Send Options Destinations */}
            <div className="editorial-contact__send-group">
              <span className="editorial-contact__send-label">
                Send Message Directly To:
              </span>

              <div className="editorial-contact__destinations">
                {/* Destination 1: WhatsApp Line 1 */}
                <a
                  href={waLine1Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-contact__send-btn editorial-contact__send-btn--wa1"
                  aria-label="Send message to WhatsApp Line 1"
                >
                  <WhatsappLogo size={24} weight="fill" />
                  <span className="editorial-contact__send-btn-title">WhatsApp Line 1</span>
                  <span className="editorial-contact__send-btn-sub">{WA_LINE_1_FORMATTED}</span>
                </a>

                {/* Destination 2: WhatsApp Line 2 */}
                <a
                  href={waLine2Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-contact__send-btn editorial-contact__send-btn--wa2"
                  aria-label="Send message to WhatsApp Line 2"
                >
                  <WhatsappLogo size={24} weight="fill" />
                  <span className="editorial-contact__send-btn-title">WhatsApp Line 2</span>
                  <span className="editorial-contact__send-btn-sub">{WA_LINE_2_FORMATTED}</span>
                </a>

                {/* Destination 3: Instagram DM */}
                <a
                  href={INSTAGRAM_DM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-contact__send-btn editorial-contact__send-btn--ig"
                  aria-label="Send message via Instagram Direct Message"
                >
                  <InstagramLogo size={24} weight="fill" />
                  <span className="editorial-contact__send-btn-title">Instagram DM</span>
                  <span className="editorial-contact__send-btn-sub">@{INSTAGRAM_HANDLE}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Fallback Channels & Store Info */}
          <div className="editorial-contact__info-card">
            <div className="editorial-contact__info-heading">
              <span className="editorial-contact__info-title">Direct Reach Out</span>
              <span className="editorial-contact__info-desc">
                Prefer to chat or call immediately without drafting? Click any channel below.
              </span>
            </div>

            {/* Direct Contact List with Clickable Brand Icons */}
            <div className="editorial-contact__channel-list">
              {/* Channel 1: WhatsApp Primary */}
              <a
                href={`https://wa.me/${WA_LINE_1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-contact__channel-item"
                aria-label={`Direct WhatsApp chat with ${WA_LINE_1_FORMATTED}`}
              >
                <div className="editorial-contact__channel-left">
                  <div className="editorial-contact__channel-icon editorial-contact__channel-icon--wa">
                    <WhatsappLogo size={20} weight="fill" />
                  </div>
                  <div className="editorial-contact__channel-details">
                    <span className="editorial-contact__channel-name">Primary Store Line</span>
                    <span className="editorial-contact__channel-meta">{WA_LINE_1_FORMATTED}</span>
                  </div>
                </div>
                <div className="editorial-contact__channel-badge">
                  <span>Chat Direct ↗</span>
                </div>
              </a>

              {/* Channel 2: WhatsApp Secondary */}
              <a
                href={`https://wa.me/${WA_LINE_2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-contact__channel-item"
                aria-label={`Direct WhatsApp chat with ${WA_LINE_2_FORMATTED}`}
              >
                <div className="editorial-contact__channel-left">
                  <div className="editorial-contact__channel-icon editorial-contact__channel-icon--wa">
                    <WhatsappLogo size={20} weight="fill" />
                  </div>
                  <div className="editorial-contact__channel-details">
                    <span className="editorial-contact__channel-name">Wholesale &amp; Orders</span>
                    <span className="editorial-contact__channel-meta">{WA_LINE_2_FORMATTED}</span>
                  </div>
                </div>
                <div className="editorial-contact__channel-badge">
                  <span>Chat Direct ↗</span>
                </div>
              </a>

              {/* Channel 3: Instagram Direct Profile */}
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-contact__channel-item"
                aria-label={`Visit official Instagram page @${INSTAGRAM_HANDLE}`}
              >
                <div className="editorial-contact__channel-left">
                  <div className="editorial-contact__channel-icon editorial-contact__channel-icon--ig">
                    <InstagramLogo size={20} weight="fill" />
                  </div>
                  <div className="editorial-contact__channel-details">
                    <span className="editorial-contact__channel-name">Official Instagram</span>
                    <span className="editorial-contact__channel-meta">@{INSTAGRAM_HANDLE}</span>
                  </div>
                </div>
                <div className="editorial-contact__channel-badge">
                  <span>Open App ↗</span>
                </div>
              </a>
            </div>

            {/* Store Physical Location Details */}
            <div className="editorial-contact__location-strip">
              <div className="editorial-contact__location-item">
                <MapPin size={20} weight="regular" className="text-secondary" />
                <div className="editorial-contact__location-text">
                  <strong>Store Location</strong>
                  Cinema Road / Station Road Area, Surat, Gujarat, India
                </div>
              </div>

              <div className="editorial-contact__location-item">
                <Clock size={20} weight="regular" className="text-secondary" />
                <div className="editorial-contact__location-text">
                  <strong>Store Hours</strong>
                  Monday – Sunday: 10:00 AM – 9:00 PM IST
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
