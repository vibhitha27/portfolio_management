import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div style={styles.homeContainer}>
    <div style={styles.heroSection}>
      <h1 style={styles.heroTitle}>Create Your Own Portfolio</h1>
      <p style={styles.heroDescription}>
        Discover new opportunities, connect with others, and unlock your potential.
      </p>
      <Link to="/portfoliocreation">
        <button style={styles.heroButton}>Create</button>
      </Link>
    </div>

    <div style={styles.featuresSection}>
      <h2 style={styles.featuresTitle}>Features</h2>
      <div style={styles.featuresList}>
        <div style={styles.featureItem}>
          <Link to="/updateportfolio">
            <h3 style={styles.featureItemTitle}>Update Portfolio</h3>
          </Link>
        </div>
        <div style={styles.featureItem}>
          <Link to="/dashboard">
            <h3 style={styles.featureItemTitle}>View Dashboard</h3>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  homeContainer: {
    fontFamily: 'Arial, sans-serif',
    background: `linear-gradient(135deg, rgba(227, 242, 253, 0.9), rgba(187, 222, 251, 0.9)),
                 url('https://img.freepik.com/free-vector/paper-style-leaves-abstract-background_23-2149119608.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722038400&semt=ais_user') 
                 center/cover no-repeat`,
    minHeight: '100vh',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heroSection: {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
    width: '90%',
    maxWidth: '800px',
    transition: 'transform 0.3s ease-in-out',
  },
  heroTitle: {
    fontSize: '2.5em',
    color: '#1565c0',
    marginBottom: '10px',
  },
  heroDescription: {
    fontSize: '1.2em',
    color: '#666',
    marginBottom: '20px',
  },
  heroButton: {
    background: '#1976d2',
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1em',
    cursor: 'pointer',
    transition: 'background 0.3s, transform 0.3s',
  },
  featuresSection: {
    background: '#f1f8e9',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '800px',
  },
  featuresTitle: {
    fontSize: '2em',
    color: '#388e3c',
    marginBottom: '30px',
  },
  featuresList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  featureItem: {
    background: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '200px',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  },
  featureItemTitle: {
    color: '#388e3c',
    fontSize: '1.3em',
  },
};

export default HomePage;
