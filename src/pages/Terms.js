import React from 'react';
import '../styles/Legal.css';

/**
 * Terms of Service Page
 */
const Terms = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: June 2026</p>

        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using the Shopping Bot website and services, you accept and agree to be
            bound by the terms and provision of this agreement. If you do not agree to abide by the
            above, please do not use this service.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or
            software) on Shopping Bot's website for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2>3. Disclaimer</h2>
          <p>
            The materials on Shopping Bot's website are provided on an 'as is' basis. Shopping Bot makes
            no warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability, fitness
            for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2>4. Limitations</h2>
          <p>
            In no event shall Shopping Bot or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising out of
            the use or inability to use the materials on Shopping Bot's website.
          </p>
        </section>

        <section>
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Shopping Bot's website could include technical, typographical, or
            photographic errors. Shopping Bot does not warrant that any of the materials on its website are
            accurate, complete, or current. Shopping Bot may make changes to the materials contained on its
            website at any time without notice.
          </p>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
            <br />
            Email: legal@shoppingbot.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
