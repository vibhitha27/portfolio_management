import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div className="home-container">
      <div className="home-background-image1"></div>
      <div className="content">
        <h1 className="quote">It takes courage to grow up and become who you really are.</h1>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default Home;
