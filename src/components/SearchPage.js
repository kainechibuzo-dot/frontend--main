import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import CompareView from './CompareView';
import { safeFetch } from '../utils/safeFetch';
import { API_ENDPOINTS } from '../config/api';
import '../styles/SearchPage.css';

/**
 * Search Page Component - Main search interface
 */
function SearchPage() {
  const [activeTab, setActiveTab] = useState('search');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Handle search - Called from SearchBar component
   * Uses safe fetch wrapper to prevent crashes
   */
  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setIsLoading(true);
    setError(null);
    setResults([]);

    // Build URL with encoded query parameter
    const url = `${API_ENDPOINTS.SEARCH}?q=${encodeURIComponent(searchQuery)}`;
    const data = await safeFetch(url);

    // Check response status
    if (!data.ok) {
      setError(data.error || 'Failed to fetch results');
      setResults([]);
    } else {
      // Safely access results, default to empty array
      setResults(data.results || []);
    }

    setIsLoading(false);
  };

  return (
    <div className="search-page-container">
      <div className="app-container">
        {/* Header */}
        <div className="app-header">
          <h1>🛒 Shopping Bot</h1>
          <p>Find and compare products instantly</p>
        </div>

        {/* Search Bar - Always visible */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Tab Navigation */}
        <div className="app-tabs">
          <button
            className={`tab-button ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            Search Results
          </button>
          <button
            className={`tab-button ${activeTab === 'compare' ? 'active' : ''}`}
            onClick={() => setActiveTab('compare')}
            disabled={!query}
          >
            Compare Prices
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'search' && (
            <SearchResults
              results={results}
              isLoading={isLoading}
              error={error}
            />
          )}

          {activeTab === 'compare' && (
            <CompareView query={query} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
