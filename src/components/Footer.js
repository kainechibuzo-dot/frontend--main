import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

/**
 * Footer Component - Site-wide footer with links and info
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: About */}
        <div className="footer-column">
          <h4>About Shopping Bot</h4>
          <p>
            We help millions of shoppers find the best products at the best prices. Compare,
            save, and shop smart with Shopping Bot.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="GitHub">⚙️</a>
          </div>
          <div className="newsletter">
            <h4 style={{ marginTop: '20px' }}>Newsletter</h4>
            <p>Get deals and updates in your inbox</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button className="btn btn-primary btn-small">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Shopping Bot. All rights reserved.</p>
        <p>Made with ❤️ for smarter shopping</p>
      </div>
    </footer>
  );
};

export default Footer;
