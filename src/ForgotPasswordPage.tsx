import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="auth-page">
        <div className="auth-container">
      <h2>Forgot Password</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" required />
        </div>
        <button type="submit" className="auth-button">Reset Password</button>
      </form>
      <div className="auth-links1">
        <Link to="/login">Back to Login</Link>
      </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
