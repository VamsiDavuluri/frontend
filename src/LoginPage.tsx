import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" required />
          </div>
          <Link to="/" className="auth-button">Login</Link>
        </form>
        <div className="auth-links">
          <Link to="/signup">Sign Up</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
