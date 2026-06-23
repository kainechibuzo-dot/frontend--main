import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import SearchPage from './components/SearchPage';
import About from './pages/About';
import Auth from './pages/Auth';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import './styles/App.css';

/**
 * Main App Component with Routing
 */
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<Landing />} />

            {/* Search Page */}
            <Route path="/search" element={<SearchPage />} />

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* Auth Page */}
            <Route path="/auth" element={<Auth />} />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
