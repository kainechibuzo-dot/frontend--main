import React from 'react';
import '../styles/Legal.css';

/**
 * Privacy Policy Page
 */
const Privacy = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: June 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Shopping Bot ("we", "us", "our", or "Company") operates the Shopping Bot website and
            mobile application (collectively, the "Service"). This page informs you of our policies
            regarding the collection, use, and disclosure of personal data when you use our Service.
          </p>
        </section>

        <section>
          <h2>2. Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and
            improve our Service to you.</p>
          <h3>Types of Data Collected:</h3>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, phone number, cookies, and usage data</li>
            <li><strong>Usage Data:</strong> Browser type, pages visited, time and date of visits</li>
            <li><strong>Location Data:</strong> With permission, precise location information</li>
          </ul>
        </section>

        <section>
          <h2>3. Use of Data</h2>
          <p>Shopping Bot uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our Service</li>
            <li>To monitor the usage of our Service</li>
          </ul>
        </section>

        <section>
          <h2>4. Security of Data</h2>
          <p>
            The security of your data is important to us but remember that no method of transmission
            over the Internet or method of electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Data, we cannot guarantee its
            absolute security.
          </p>
        </section>

        <section>
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@shoppingbot.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
