import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { safeFetch } from '../utils/safeFetch';
import { API_ENDPOINTS } from '../config/api';
import '../styles/CompareView.css';

/**
 * CompareView Component - Shows sorted products with best deal highlighted
 * Results are already ranked (cheapest first) - DO NOT re-sort
 */
const CompareView = ({ query }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCompare = async () => {
    setIsLoading(true);
    setError(null);

    const url = `${API_ENDPOINTS.COMPARE}?q=${encodeURIComponent(query)}`;
    const data = await safeFetch(url);

    if (!data.ok) {
      setError(data.error || 'Failed to load comparison');
      setResults([]);
    } else {
      setResults(data.results || []);
    }

    setIsLoading(false);
  };

  if (!query) {
    return (
      <div className="compare-container">
        <p>Enter a search query to compare products</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="compare-container">
        <div className="spinner">Loading comparison...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="compare-container">
        <div className="error-box">⚠️ {error}</div>
        <button onClick={handleCompare} className="btn btn-secondary">
          Try Again
        </button>
      </div>
    );
  }

  if (results.length === 0 && !isLoading) {
    return (
      <div className="compare-container">
        <button onClick={handleCompare} className="btn btn-primary">
          Compare Prices
        </button>
      </div>
    );
  }

  return (
    <div className="compare-container">
      <div className="compare-header">
        <h2>Price Comparison - Sorted by Best Deal</h2>
        <button onClick={handleCompare} className="btn btn-secondary">
          Refresh
        </button>
      </div>

      <div className="comparison-list">
        {results.map((item, index) => (
          <div key={index} className={`comparison-row ${index === 0 ? 'best-deal-row' : ''}`}>
            <ProductCard item={item} isBestDeal={index === 0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareView;
