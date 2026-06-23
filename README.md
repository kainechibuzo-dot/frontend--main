# 🛒 Shopping Bot Frontend - Production Ready

A robust React frontend for the Shopping Bot API with safe error handling, responsive design, and production-grade code patterns.

## Features

✅ **Safe Fetch Wrapper** - Prevents "Unexpected token <" errors  
✅ **Search Functionality** - Debounced search with instant results  
✅ **Price Comparison** - Sorted by best deal (cheapest first)  
✅ **Product Details** - Scrape and display product information  
✅ **Responsive Design** - Mobile-first, works on all devices  
✅ **Skeleton Loaders** - Better UX while loading  
✅ **Error Handling** - Graceful error states everywhere  
✅ **Defensive Rendering** - Never assumes fields exist  

## Project Structure

```
src/
├── components/
│   ├── SearchBar.js           # Search input with debouncing
│   ├── SearchResults.js       # Results grid with safe rendering
│   ├── ProductCard.js         # Individual product card
│   ├── CompareView.js         # Price comparison view
│   └── ProductDetail.js       # Product detail modal
├── config/
│   └── api.js                 # API endpoints (define once, use everywhere)
├── utils/
│   └── safeFetch.js           # Safe fetch wrapper (fixes crashes)
├── styles/
│   ├── App.css                # Main app styles
│   ├── SearchBar.css          # Search bar styles
│   ├── ProductCard.css        # Product card styles
│   ├── SearchResults.css      # Results container styles
│   ├── CompareView.css        # Comparison view styles
│   └── ProductDetail.css      # Modal styles
├── App.js                     # Main app component
└── index.js                   # Entry point
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## API Configuration

Edit `src/config/api.js` to change the backend URL:

```javascript
const API_BASE = "https://shopping-bot-assd.onrender.com";
```

**Rule:** Define backend once, use everywhere. Never hardcode endpoints.

## Safe Fetch Wrapper

The `safeFetch()` function prevents crashes from non-JSON responses:

```javascript
import { safeFetch } from './utils/safeFetch';

const data = await safeFetch(url);

if (!data.ok) {
  // Handle error
  console.error(data.error);
} else {
  // Use data safely
  const results = data.results || [];
}
```

## Core Endpoints

### 🔍 Search
```
GET /api/search?q=iphone+15

Response:
{
  "ok": true,
  "results": [
    {
      "title": "Apple iPhone 15",
      "price": "$499",
      "url": "https://...",
      "source": "serpapi"
    }
  ]
}
```

### ⚖️ Compare
```
GET /api/compare?q=iphone+15

Response: Same as search, but results are sorted (cheapest first)
```

### 🔗 Scrape
```
GET /api/scrape?url=https://...

Response:
{
  "ok": true,
  "title": "iPhone 15",
  "price": 499,
  "image": "...",
  "availability": "In Stock"
}
```

## Defensive Rendering Rules

**ALWAYS assume fields might be missing:**

```javascript
// ❌ WRONG - Will crash if field missing
const price = item.price;

// ✅ RIGHT - Safe with default
const price = item.price || 'N/A';
```

**ALWAYS check results exist:**

```javascript
// ✅ RIGHT
const results = data.results || [];
results.map(item => <ProductCard item={item} />);
```

## Component Usage

### SearchBar
```jsx
<SearchBar onSearch={handleSearch} isLoading={isLoading} />
```

### SearchResults
```jsx
<SearchResults 
  results={results} 
  isLoading={isLoading} 
  error={error} 
/>
```

### CompareView
```jsx
<CompareView query={searchQuery} />
```

### ProductDetail
```jsx
<ProductDetail url={productUrl} onClose={closeModal} />
```

## Error Handling

All components handle errors gracefully:

- **Network errors** → "Network error" message
- **Invalid JSON** → "Invalid JSON response" message
- **Empty results** → "No products found" state
- **Missing fields** → Default values (N/A, Unknown, etc.)

## Performance

- **Search debounce**: 300ms
- **Skeleton loaders**: Show while fetching
- **Responsive grid**: Auto-adjusts columns
- **Lazy rendering**: Only renders visible results

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Production Deployment

```bash
# Build for production
npm run build

# Outputs to ./build directory
# Deploy to Netlify, Vercel, or any static host
```

## Troubleshooting

### "Unexpected token <" Error
→ Backend returned HTML instead of JSON  
→ This is fixed by using `safeFetch()`  
→ Check backend is running and responding correctly

### Blank screen or crashes
→ Check browser console for errors  
→ Verify API_BASE URL in `config/api.js`  
→ Ensure backend is accessible

### Missing search results
→ Check backend is running  
→ Verify API response format  
→ Use browser DevTools to inspect network requests

## Future Enhancements

- [ ] Tailwind CSS for styling
- [ ] Animated product cards
- [ ] Instant search (0.3s feel)
- [ ] Advanced filters
- [ ] Wishlist functionality
- [ ] User authentication

## License

MIT
