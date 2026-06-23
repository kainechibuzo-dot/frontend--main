import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

/**
 * Landing Page - Hero section with CTA
 */
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Find & Compare Products
            <span className="hero-highlight"> Instantly</span>
          </h1>
          <p className="hero-subtitle">
            Search millions of products across the web. Compare prices, find the best deals, and save money with one click.
          </p>

          <div className="hero-cta">
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate('/search')}
            >
              Start Shopping Now →
            </button>
            <button
              className="btn btn-secondary btn-large"
              onClick={() => navigate('/about')}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-placeholder">
            🛒
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Shopping Bot?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Get search results in milliseconds. Compare prices instantly across multiple sources.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Save Money</h3>
            <p>Find the best deals and lowest prices automatically. Never overpay again.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Safe & Secure</h3>
            <p>Your searches are private. We never store personal data or track your activity.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Coverage</h3>
            <p>Search products from retailers worldwide. Access the largest shopping database.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>Shop on any device. Responsive design works perfectly on mobile and desktop.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Smart Comparison</h3>
            <p>Advanced algorithms rank products by value. Best deals shown first.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search</h3>
            <p>Enter what you're looking for in the search box. Be specific or general—we'll find it.</p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Compare</h3>
            <p>See all available products sorted by price. View details, availability, and seller info.</p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Save</h3>
            <p>Click on your favorite product to visit the seller. Get the best price without the hassle.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Saving?</h2>
          <p>Join thousands of smart shoppers using Shopping Bot to find the best deals online.</p>
          <button
            className="btn btn-primary btn-large"
            onClick={() => navigate('/search')}
          >
            Search Now →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
