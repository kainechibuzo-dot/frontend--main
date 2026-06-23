import React from 'react';
import '../styles/ProductCard.css';

/**
 * ProductCard Component - Renders individual product with safe defaults
 */
const ProductCard = ({ item, isBestDeal = false }) => {
  // Defensive rendering - never assume fields exist
  const title = item?.title || 'Unknown Product';
  const price = item?.price || 'Price unavailable';
  const source = item?.source || 'Unknown source';
  const url = item?.url;

  return (
    <div className={`product-card ${isBestDeal ? 'best-deal' : ''}`}>
      {isBestDeal && (
        <div className="best-deal-badge">
          🔥 Best Deal
        </div>
      )}

      <div className="card-content">
        <h3 className="product-title">{title}</h3>

        <p className="product-price">
          <strong>{price}</strong>
        </p>

        <small className="product-source">Source: {source}</small>
      </div>

      <div className="card-actions">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Product →
          </a>
        ) : (
          <button className="btn btn-disabled" disabled>
            No Link Available
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
