# Shopping Intelligence AI - Frontend

A modern, responsive web application for intelligent shopping and price comparison powered by AI.

## Features

- **Smart Search**: Find products across multiple stores instantly
- **Price Comparison**: Compare prices and find the best deals
- **Price Alerts**: Get notified when prices drop
- **Watchlist**: Save your favorite products for later
- **Shopping Cart**: Manage your items before checkout
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Comfortable viewing in any lighting condition

## Project Structure

```
frontend/
├── index.html              # Main HTML file
├── styles/
│   ├── reset.css          # CSS reset and base styles
│   ├── variables.css      # CSS custom properties (colors, spacing, etc.)
│   ├── navbar.css         # Navigation bar styles
│   ├── main.css           # Main component styles
│   └── responsive.css     # Responsive design breakpoints
├── js/
│   └── app.js             # Main JavaScript application
└── README.md              # This file
```

## Pages

### Home
Welcome page with feature highlights and quick navigation to main sections.

### Search
Search for products across multiple stores with real-time results.

### Compare
Compare prices and specifications of similar products side by side.

### Cart
View and manage items in your shopping cart with summary calculations.

### Watchlist
Save favorite products and monitor their prices over time.

### Alerts
Create price drop alerts for products you're interested in.

### About
Learn more about the Shopping Intelligence AI platform and its mission.

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables and Grid/Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **localStorage**: Client-side data persistence

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/chibuzokaine-ui/frontend-.git
cd frontend-
```

2. Open `index.html` in your web browser:
```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js (if you have http-server installed)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Features in Detail

### Hamburger Navigation
The mobile-friendly hamburger menu provides easy navigation on smaller screens with smooth animations.

### Local Storage
All user data (cart, watchlist, alerts) is stored locally and persists across browser sessions.

### Responsive Grid System
The design uses CSS Grid and Flexbox for flexible, responsive layouts that work on all screen sizes.

### Interactive Notifications
User actions trigger brief, non-intrusive notifications for feedback.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## CSS Custom Properties

### Colors
- `--primary-color`: #6366f1
- `--secondary-color`: #10b981
- `--accent-color`: #f59e0b

### Spacing
- `--spacing-xs` to `--spacing-2xl`
- Base unit: 0.25rem

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: < 480px

## JavaScript API

### Navigation
- `navigateTo(pageId)` - Navigate to a specific page

### Search & Compare
- `performSearch()` - Execute product search
- `performCompare()` - Compare products

### Cart Management
- `addToCart(productIndex)` - Add item to cart
- `removeFromCart(index)` - Remove item from cart
- `displayCart()` - Display cart contents

### Watchlist Management
- `addToWatchlist(productIndex)` - Add item to watchlist
- `removeFromWatchlist(index)` - Remove item from watchlist
- `displayWatchlist()` - Display watchlist items

### Alerts
- `createAlert()` - Create a new price alert
- `deleteAlert(index)` - Delete a price alert
- `displayAlerts()` - Display all alerts

### Utilities
- `showNotification(message)` - Display a notification

## Performance Optimizations

- Minimal external dependencies
- CSS-based animations for smooth performance
- Efficient event delegation
- localStorage for instant data loading

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Advanced filtering and sorting
- [ ] Product recommendations
- [ ] Email notifications for price drops
- [ ] PWA support
- [ ] Dark mode toggle
- [ ] Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue on GitHub or contact us at hello@shoppingai.com
