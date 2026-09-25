import React, { useState } from 'react';
import { PhoneCall, WhatsappLogo, InstagramLogo, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import './contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setFormState({ isSubmitting: false, isSuccess: false, error: 'Please fill in the required fields.' });
      return;
    }

    setFormState({ isSubmitting: true, isSuccess: false, error: '' });

    setTimeout(() => {
      setFormState({
        isSubmitting: false,
        isSuccess: true,
        error: '',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="c2-contact-section">
      <div className="concept2-container">
        {/* Section Header */}
        <div className="c2-numbered-header">
          <h2 className="c2-heading">Reach Out To Us</h2>
          <div className="c2-subtitle">LET'S STAY CONNECTED</div>
        </div>

        <p className="c2-contact-intro">
          Have a query, need help, or want to place a bulk order? We're just a message away.
        </p>

        {/* 2-Column Contact Container */}
        <div className="c2-contact-grid">
          {/* Left Column: Direct Channels */}
          <div className="c2-contact-channels">
            {/* Phone */}
            <a href="tel:+919512705420" className="c2-channel-card">
              <div className="c2-channel-icon">
                <PhoneCall size={26} weight="regular" />
              </div>
              <div className="c2-channel-details">
                <strong>+91 95127 05420</strong>
                <span>Mon – Sat | 10:00 AM – 8:00 PM</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919512705420?text=Hello%20Laxmikrupa,%20I%20would%20like%20to%20inquire%20about%20your%20collection"
              target="_blank"
              rel="noopener noreferrer"
              className="c2-channel-card"
            >
              <div className="c2-channel-icon c2-wa-icon">
                <WhatsappLogo size={26} weight="fill" />
              </div>
              <div className="c2-channel-details">
                <strong>Chat on WhatsApp</strong>
                <span>Quick support &amp; bulk inquiries.</span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/laxmi_krupa_skt"
              target="_blank"
              rel="noopener noreferrer"
              className="c2-channel-card"
            >
              <div className="c2-channel-icon c2-ig-icon">
                <InstagramLogo size={26} weight="regular" />
              </div>
              <div className="c2-channel-details">
                <strong>@laxmi_krupa_skt</strong>
                <span>Follow for latest collections.</span>
              </div>
            </a>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="c2-contact-form-wrap">
            {formState.isSuccess ? (
              <div className="c2-form-success">
                <CheckCircle size={44} weight="fill" color="#16A34A" />
                <h3>Thank You!</h3>
                <p>Your message has been received. Our Surat store team will connect with you shortly.</p>
                <button
                  type="button"
                  className="c2-btn-outline"
                  onClick={() => setFormState({ isSubmitting: false, isSuccess: false, error: '' })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="c2-contact-form" onSubmit={handleSubmit}>
                {formState.error && (
                  <div className="c2-form-error-banner">{formState.error}</div>
                )}

                <div className="c2-form-row">
                  <div className="c2-form-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="c2-form-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="c2-form-row">
                  <div className="c2-form-field">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="c2-form-field">
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                    >
                      <option value="general">Select Inquiry Type</option>
                      <option value="wedding">Wedding / Baraat Order</option>
                      <option value="mandali">Festival / Mandali Bulk</option>
                      <option value="size">Size &amp; Fit Consultation</option>
                      <option value="store">Store Visit &amp; Tailoring</option>
                    </select>
                  </div>
                </div>

                <div className="c2-form-field c2-form-field-full">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="c2-btn-primary c2-form-submit-btn"
                  disabled={formState.isSubmitting}
                >
                  <span>{formState.isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight size={15} weight="bold" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
