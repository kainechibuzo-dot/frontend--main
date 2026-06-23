import React from 'react';
import ProductCard from './ProductCard';
import '../styles/SearchResults.css';

/**
 * SearchResults Component - Renders product list with safe defaults
 */
const SearchResults = ({ results = [], isLoading = false, error = null }) => {
  // Error state
  if (error) {
    return (
      <div className="error-container">
        <div className="error-box">
          ⚠️ <strong>{error || 'Something went wrong'}</strong>
        </div>
      </div>
    );
  }

  // Loading state with skeleton loaders
  if (isLoading) {
    return (
      <div className="results-container">
        <div className="skeleton-loader">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-card" />
          ))}
        </div>
      </div>
    );
  }

  // Empty state
  if (results.length === 0) {
    return (
      <div className="empty-container">
        <div className="empty-box">
          <p>🔍 No products found</p>
          <small>Try another search term</small>
        </div>
      </div>
    );
  }

  // Results grid
  return (
    <div className="results-container">
      <div className="results-header">
        <h2>Found {results.length} product{results.length !== 1 ? 's' : ''}</h2>
      </div>

      <div className="products-grid">
        {results.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
            isBestDeal={index === 0} // First item is best deal
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
