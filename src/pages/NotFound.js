import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

/**
 * 404 Not Found Page
 */
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <div className="error-icon">🔍</div>
        <div className="not-found-actions">
          <button
            className="btn btn-primary btn-large"
            onClick={() => navigate('/')}
          >
            Go Home
          </button>
          <button
            className="btn btn-secondary btn-large"
            onClick={() => navigate('/search')}
          >
            Search Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
