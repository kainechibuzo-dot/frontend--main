import React, { useState, useCallback } from 'react';
import '../styles/SearchBar.css';

/**
 * SearchBar Component - Handles search input with debouncing
 */
const SearchBar = ({ onSearch, isLoading = false }) => {
  const [query, setQuery] = useState('');
  const [debounceTimer, setDebounceTimer] = useState(null);

  // Debounce search - 300ms delay before calling API
  const handleInputChange = useCallback(
    (e) => {
      const value = e.target.value;
      setQuery(value);

      // Clear previous timer
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      // Set new timer
      const timer = setTimeout(() => {
        if (value.trim()) {
          onSearch(value);
        }
      }, 300);

      setDebounceTimer(timer);
    },
    [debounceTimer, onSearch]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search for products... (e.g., iPhone 15, laptop)"
          value={query}
          onChange={handleInputChange}
          disabled={isLoading}
          className="search-input"
        />
        {isLoading && <div className="spinner-mini" />}
      </div>
      <button
        type="submit"
        disabled={isLoading || !query.trim()}
        className="btn btn-primary"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchBar;
