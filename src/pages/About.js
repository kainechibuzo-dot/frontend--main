import React from 'react';
import '../styles/About.css';

/**
 * About Page - Company info and mission
 */
const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <section className="about-header">
        <h1>About Shopping Bot</h1>
        <p>Making online shopping smarter, faster, and more affordable</p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="section-content">
          <div className="section-text">
            <h2>Our Mission</h2>
            <p>
              Shopping Bot was created with a simple mission: to help people find the best products
              at the best prices without the hassle of visiting dozens of websites.
            </p>
            <p>
              We believe that shopping should be easy, transparent, and rewarding. Our AI-powered
              platform aggregates data from thousands of retailers worldwide, making price comparison
              effortless and instant.
            </p>
          </div>
          <div className="section-icon">🎯</div>
        </div>
      </section>

      {/* Why We Built It */}
      <section className="about-section alternate">
        <div className="section-content">
          <div className="section-icon">💡</div>
          <div className="section-text">
            <h2>Why We Built This</h2>
            <p>
              We noticed people spend hours comparing prices across different websites. Many miss
              out on better deals simply because finding them is too time-consuming.
            </p>
            <p>
              Shopping Bot changes that. With one search, you get all available options, sorted by
              price and value. What used to take hours now takes seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Transparency</h3>
            <p>We believe in honest pricing. No hidden fees, no tricks—just real prices from real retailers.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">⚙️</div>
            <h3>Innovation</h3>
            <p>We constantly improve our technology to deliver faster, smarter results.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">👥</div>
            <h3>User First</h3>
            <p>Everything we do is centered around making your experience better and easier.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🔒</div>
            <h3>Privacy</h3>
            <p>Your data is yours. We never sell or share your personal information with anyone.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat">
          <div className="stat-number">50M+</div>
          <p>Products Indexed</p>
        </div>
        <div className="stat">
          <div className="stat-number">1000+</div>
          <p>Retailers Connected</p>
        </div>
        <div className="stat">
          <div className="stat-number">100K+</div>
          <p>Active Users</p>
        </div>
        <div className="stat">
          <div className="stat-number">$50M+</div>
          <p>Saved by Users</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Our Team</h2>
        <p className="team-intro">
          We're a passionate team of engineers, designers, and product experts dedicated to
          revolutionizing online shopping.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍💼</div>
            <h3>John Smith</h3>
            <p>CEO & Founder</p>
            <small>15+ years in e-commerce</small>
          </div>

          <div className="team-member">
            <div className="member-avatar">👩‍💻</div>
            <h3>Sarah Chen</h3>
            <p>CTO & Co-Founder</p>
            <small>ML & Data Expert</small>
          </div>

          <div className="team-member">
            <div className="member-avatar">👨‍🎨</div>
            <h3>Mike Johnson</h3>
            <p>Design Lead</p>
            <small>UX/UI Specialist</small>
          </div>

          <div className="team-member">
            <div className="member-avatar">👩‍🔬</div>
            <h3>Emma Davis</h3>
            <p>Product Manager</p>
            <small>Growth & Analytics</small>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <h2>Get in Touch</h2>
        <p>Have questions? We'd love to hear from you!</p>
        <a href="/contact" className="btn btn-primary btn-large">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
