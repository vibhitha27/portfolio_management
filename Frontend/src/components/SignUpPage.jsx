import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './signUp.css';  // Import the CSS

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = () => {
    navigate('/Register'); // Navigate to the register page when clicking the Sign Up button
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page when clicking the Login button
  };

  return (
    <div className="signup-container">
      <div className="signup-background-image"></div> {/* Background Image */}
      <div className="content1">
        <button className="signup-btn" onClick={handleSignUp}>Sign Up</button> {/* Add onClick handler for Sign Up */}
        <p className="login-text">Already a user?</p>
        <button className="login-btn" onClick={handleLogin}>Login</button> {/* Add onClick handler for Login */}
      </div>
    </div>
  );
};

export default SignUpPage;
