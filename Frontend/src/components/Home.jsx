import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-background-image1"></div>
      <div className="content">
        <h1 className="quote">It takes courage to grow up and become who you really are.</h1>
        <Link to="/signup">
          <button className="get-started-btn">
            Get Started →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
