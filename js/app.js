// Shopping Intelligence AI - Main Application Script

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when a link is clicked
    if (navMenu) {
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Load saved data from localStorage
    loadFromStorage();
}

// Page Navigation
function navigateTo(pageId) {
    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Search Functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.trim();
    
    if (!query) {
        searchResults.innerHTML = '<p class="empty-state">Please enter a product name</p>';
        return;
    }
    
    // Simulate API call with mock data
    const mockResults = getMockSearchResults(query);
    displaySearchResults(mockResults, searchResults);
}

function getMockSearchResults(query) {
    const mockData = {
        'iphone': [
            { name: 'iPhone 15 Pro', price: 999.99, store: 'Apple', rating: 4.8 },
            { name: 'iPhone 15', price: 799.99, store: 'Best Buy', rating: 4.7 },
            { name: 'iPhone 14 Pro', price: 799.99, store: 'Amazon', rating: 4.6 }
        ],
        'laptop': [
            { name: 'MacBook Pro 14"', price: 1999.99, store: 'Apple', rating: 4.9 },
            { name: 'Dell XPS 13', price: 1299.99, store: 'Dell', rating: 4.7 },
            { name: 'HP Pavilion', price: 649.99, store: 'Best Buy', rating: 4.5 }
        ],
        'shoes': [
            { name: 'Nike Air Max', price: 129.99, store: 'Nike', rating: 4.6 },
            { name: 'Adidas Ultraboost', price: 149.99, store: 'Adidas', rating: 4.7 },
            { name: 'New Balance 990v6', price: 184.99, store: 'New Balance', rating: 4.8 }
        ]
    };
    
    const lowerQuery = query.toLowerCase();
    for (const key in mockData) {
        if (lowerQuery.includes(key)) {
            return mockData[key];
        }
    }
    
    // Return generic results if no exact match
    return [
        { name: query + ' - Product 1', price: 99.99, store: 'Store A', rating: 4.5 },
        { name: query + ' - Product 2', price: 149.99, store: 'Store B', rating: 4.6 },
        { name: query + ' - Product 3', price: 199.99, store: 'Store C', rating: 4.7 }
    ];
}

function displaySearchResults(results, container) {
    if (!results || results.length === 0) {
        container.innerHTML = '<p class="empty-state">No products found. Try a different search.</p>';
        return;
    }
    
    let html = '<div class="products-grid">';
    results.forEach((product, index) => {
        html += `
            <div class="product-card">
                <div class="product-card-body">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <p><strong>Store:</strong> ${product.store}</p>
                    <p><strong>Rating:</strong> ⭐ ${product.rating}/5</p>
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button class="btn-primary" style="flex: 1;" onclick="addToCart(${index})">Add to Cart</button>
                        <button class="btn-secondary" style="flex: 1;" onclick="addToWatchlist(${index})">♡</button>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
    
    // Store results in session for cart/watchlist
    sessionStorage.setItem('lastSearchResults', JSON.stringify(results));
}

// Compare Functionality
function performCompare() {
    const compareInput = document.getElementById('compareInput');
    const compareResults = document.getElementById('compareResults');
    const query = compareInput.value.trim();
    
    if (!query) {
        compareResults.innerHTML = '<p class="empty-state">Please enter a product name</p>';
        return;
    }
    
    const results = getMockSearchResults(query);
    displayComparisonTable(results, compareResults);
}

function displayComparisonTable(products, container) {
    if (!products || products.length === 0) {
        container.innerHTML = '<p class="empty-state">No products found to compare</p>';
        return;
    }
    
    let html = '<table style="width: 100%; border-collapse: collapse;">';
    html += '<thead><tr style="border-bottom: 2px solid var(--border-color);">';
    html += '<th style="padding: 12px; text-align: left;">Product</th>';
    html += '<th style="padding: 12px; text-align: center;">Price</th>';
    html += '<th style="padding: 12px; text-align: center;">Store</th>';
    html += '<th style="padding: 12px; text-align: center;">Rating</th>';
    html += '</tr></thead><tbody>';
    
    products.forEach(product => {
        html += '<tr style="border-bottom: 1px solid var(--border-color);">';
        html += `<td style="padding: 12px;">${product.name}</td>`;
        html += `<td style="padding: 12px; text-align: center; color: var(--primary-color); font-weight: bold;">$${product.price.toFixed(2)}</td>`;
        html += `<td style="padding: 12px; text-align: center;">${product.store}</td>`;
        html += `<td style="padding: 12px; text-align: center;">⭐ ${product.rating}</td>`;
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

// Cart Management
function addToCart(productIndex) {
    const results = JSON.parse(sessionStorage.getItem('lastSearchResults') || '[]');
    const product = results[productIndex];
    
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push({ ...product, id: Date.now() });
        localStorage.setItem('cart', JSON.stringify(cart));
        showNotification('✓ Added to cart');
    }
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-state">Your cart is empty. <a href="#" onclick="navigateTo(\'search\')" class="link">Start shopping</a></p>';
        document.getElementById('cartSummary').style.display = 'none';
        return;
    }
    
    let html = '<div style="padding: 1rem;">';
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        subtotal += item.price;
        html += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid var(--border-light);">
                <div>
                    <div style="font-weight: 600;">${item.name}</div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">${item.store}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="color: var(--primary-color); font-weight: bold;">$${item.price.toFixed(2)}</div>
                    <button onclick="removeFromCart(${index})" style="background: var(--danger-color); color: white; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem;">Remove</button>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    cartItems.innerHTML = html;
    
    // Update cart summary
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
    document.getElementById('cartSummary').style.display = 'block';
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    showNotification('✓ Item removed from cart');
}

// Watchlist Management
function addToWatchlist(productIndex) {
    const results = JSON.parse(sessionStorage.getItem('lastSearchResults') || '[]');
    const product = results[productIndex];
    
    if (product) {
        let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        if (!watchlist.find(item => item.name === product.name)) {
            watchlist.push({ ...product, id: Date.now() });
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            showNotification('✓ Added to watchlist');
        } else {
            showNotification('Already in watchlist');
        }
    }
}

function displayWatchlist() {
    const watchlistItems = document.getElementById('watchlistItems');
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    
    if (watchlist.length === 0) {
        watchlistItems.innerHTML = '<p class="empty-state">No items in your watchlist yet. <a href="#" onclick="navigateTo(\'search\')" class="link">Add products</a></p>';
        return;
    }
    
    let html = '<div class="products-grid">';
    watchlist.forEach((product, index) => {
        html += `
            <div class="product-card">
                <div class="product-card-body">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <p><strong>Store:</strong> ${product.store}</p>
                    <p><strong>Rating:</strong> ⭐ ${product.rating}/5</p>
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button class="btn-primary" style="flex: 1;" onclick="addToCart(${index})">Buy Now</button>
                        <button class="btn-secondary" style="flex: 1;" onclick="removeFromWatchlist(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    watchlistItems.innerHTML = html;
}

function removeFromWatchlist(index) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    watchlist.splice(index, 1);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    displayWatchlist();
    showNotification('✓ Removed from watchlist');
}

// Alerts Management
function toggleAlertForm() {
    const alertForm = document.getElementById('alertForm');
    alertForm.style.display = alertForm.style.display === 'none' ? 'block' : 'none';
}

function createAlert() {
    const product = document.getElementById('alertProduct').value.trim();
    const price = parseFloat(document.getElementById('alertPrice').value);
    
    if (!product || !price || price <= 0) {
        showNotification('Please fill in all fields correctly');
        return;
    }
    
    let alerts = JSON.parse(localStorage.getItem('alerts') || '[]');
    alerts.push({
        id: Date.now(),
        product: product,
        targetPrice: price,
        createdAt: new Date().toLocaleDateString()
    });
    localStorage.setItem('alerts', JSON.stringify(alerts));
    
    document.getElementById('alertProduct').value = '';
    document.getElementById('alertPrice').value = '';
    toggleAlertForm();
    displayAlerts();
    showNotification('✓ Price alert created');
}

function displayAlerts() {
    const alertsList = document.getElementById('alertsList');
    const alerts = JSON.parse(localStorage.getItem('alerts') || '[]');
    
    if (alerts.length === 0) {
        alertsList.innerHTML = '<p class="empty-state">No alerts set yet</p>';
        return;
    }
    
    let html = '';
    alerts.forEach((alert, index) => {
        html += `
            <div class="alert-item">
                <div>
                    <div style="font-weight: 600;">${alert.product}</div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">Target price: <strong>$${alert.targetPrice.toFixed(2)}</strong></div>
                    <div style="color: var(--text-secondary); font-size: 0.75rem;">Created: ${alert.createdAt}</div>
                </div>
                <button onclick="deleteAlert(${index})" style="background: var(--danger-color); color: white; padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem;">Delete</button>
            </div>
        `;
    });
    alertsList.innerHTML = html;
}

function deleteAlert(index) {
    let alerts = JSON.parse(localStorage.getItem('alerts') || '[]');
    alerts.splice(index, 1);
    localStorage.setItem('alerts', JSON.stringify(alerts));
    displayAlerts();
    showNotification('✓ Alert deleted');
}

// Notification System
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        animation: slideIn 0.3s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Page Navigation Observers
const pageObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.id === 'cart' && mutation.target.classList.contains('active')) {
            displayCart();
        } else if (mutation.target.id === 'watchlist' && mutation.target.classList.contains('active')) {
            displayWatchlist();
        } else if (mutation.target.id === 'alerts' && mutation.target.classList.contains('active')) {
            displayAlerts();
        }
    });
});

const pages = document.querySelectorAll('.page');
pages.forEach(page => {
    pageObserver.observe(page, { attributes: true, attributeFilter: ['class'] });
});

// Storage Functions
function loadFromStorage() {
    // Initialize data from localStorage if needed
    if (!localStorage.getItem('cart')) localStorage.setItem('cart', '[]');
    if (!localStorage.getItem('watchlist')) localStorage.setItem('watchlist', '[]');
    if (!localStorage.getItem('alerts')) localStorage.setItem('alerts', '[]');
}

// Initialize on page load
window.addEventListener('load', () => {
    loadFromStorage();
});