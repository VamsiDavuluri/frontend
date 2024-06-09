import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

const SignUpPage: React.FC = () => {
  return (
    <div className="auth-page">
        <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" required />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" required />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <div className="auth-links1">
        <Link to="/login">Login</Link>
      </div>
      </div>
    </div>
  );
};

export default SignUpPage;
