import React, { useState } from 'react';
import '../styles/Contact.css';

/**
 * Contact Page - Contact form and support info
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <section className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </section>

      <div className="contact-content">
        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="form-wrapper">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                ✅ Thank you for your message! We'll get back to you soon.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={loading}
                >
                  <option value="">Select a subject</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-info-section">
          <div className="info-wrapper">
            <h2>Contact Information</h2>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>support@shoppingbot.com</p>
              <small>We'll respond within 24 hours</small>
            </div>

            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available Monday - Friday</p>
              <small>9:00 AM - 6:00 PM EST</small>
            </div>

            <div className="info-card">
              <div className="info-icon">🐦</div>
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>San Francisco, CA</p>
              <small>USA</small>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How quickly do you respond?</h3>
            <p>We aim to respond to all inquiries within 24 hours during business days.</p>
          </div>

          <div className="faq-item">
            <h3>Do you offer phone support?</h3>
            <p>Currently we support via email and live chat. Phone support coming soon!</p>
          </div>

          <div className="faq-item">
            <h3>Can I report a bug?</h3>
            <p>Yes! Please use the contact form and select 'Report a Bug' as the subject.</p>
          </div>

          <div className="faq-item">
            <h3>Do you accept partnership offers?</h3>
            <p>Absolutely! We're always open to collaborations. Select 'Partnership' in the form.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
