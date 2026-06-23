import React, { useState } from 'react';
import '../styles/Auth.css';

/**
 * Auth Page - Login and Sign Up
 */
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!isLogin && !name) {
      setError('Please enter your name');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (isLogin) {
        alert(`Welcome back, ${email}!`);
        // Redirect to dashboard or search
      } else {
        alert(`Account created for ${name}!`);
        setIsLogin(true);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
      }
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={`auth-tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`auth-tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Name Field (Sign Up Only) */}
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>
          )}

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {/* Confirm Password (Sign Up Only) */}
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          )}

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          {/* Remember Me (Login Only) */}
          {isLogin && (
            <div className="form-group checkbox">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-inline" />
            ) : isLogin ? (
              'Sign In'
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="form-divider">
          <span>OR</span>
        </div>

        {/* Social Auth */}
        <div className="social-auth">
          <button className="social-button google" title="Login with Google">
            <span className="social-icon">G</span>
            Google
          </button>
          <button className="social-button github" title="Login with GitHub">
            <span className="social-icon">⚙️</span>
            GitHub
          </button>
        </div>

        {/* Footer */}
        <div className="auth-footer">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="link-button"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="link-button"
              >
                Login
              </button>
            </p>
          )}
          {isLogin && (
            <p>
              <a href="/forgot-password" className="link-button">
                Forgot password?
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Side Panel */}
      <div className="auth-panel">
        <div className="panel-content">
          <h2>{isLogin ? 'Welcome Back' : 'Join Us Today'}</h2>
          <p>
            {isLogin
              ? 'Sign in to access your shopping history, saved items, and personalized recommendations.'
              : 'Create an account to start comparing products and finding the best deals online.'}
          </p>
          <div className="panel-benefits">
            <div className="benefit">
              <span className="benefit-icon">📚</span>
              <span>Shopping History</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">❤️</span>
              <span>Saved Items</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">🔔</span>
              <span>Price Alerts</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✨</span>
              <span>Personalized Deals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
