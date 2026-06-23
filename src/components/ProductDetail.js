import React, { useState } from 'react';
import { safeFetch } from '../utils/safeFetch';
import { API_ENDPOINTS } from '../config/api';
import '../styles/ProductDetail.css';

/**
 * ProductDetail Component - Shows detailed product info from scrape endpoint
 * Treats as product detail page, not a list
 */
const ProductDetail = ({ url, onClose }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    if (!url) return;

    const fetchProductDetail = async () => {
      setIsLoading(true);
      setError(null);

      const scrapeUrl = `${API_ENDPOINTS.SCRAPE}?url=${encodeURIComponent(url)}`;
      const data = await safeFetch(scrapeUrl);

      if (!data.ok) {
        setError(data.error || 'Failed to load product details');
        setProduct(null);
      } else {
        setProduct(data);
      }

      setIsLoading(false);
    };

    fetchProductDetail();
  }, [url]);

  if (isLoading) {
    return (
      <div className="product-detail-modal">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
          <div className="spinner">Loading product details...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-detail-modal">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
          <div className="error-box">⚠️ {error}</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-modal">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
          <p>No product details available</p>
        </div>
      </div>
    );
  }

  const title = product?.title || 'Unknown Product';
  const price = product?.price || 'N/A';
  const image = product?.image;
  const availability = product?.availability || 'Unknown';

  return (
    <div className="product-detail-modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {image && (
          <div className="detail-image">
            <img src={image} alt={title} />
          </div>
        )}

        <div className="detail-info">
          <h2>{title}</h2>
          <p className="detail-price">${price}</p>
          <p className="detail-availability">
            Status: <strong>{availability}</strong>
          </p>
        </div>

        <div className="detail-actions">
          <button onClick={onClose} className="btn btn-secondary">
            Close
          </button>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Full Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
