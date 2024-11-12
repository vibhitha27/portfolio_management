import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = () => {
    navigate('/register'); // Navigate to the register page when clicking the Sign Up button
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page when clicking the Login button
  };

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={styles.signupContainer}>
      <div style={styles.signupBackgroundImage}></div>
      <div style={styles.content} data-aos="fade-up">
        <div style={styles.card}>
          <button style={styles.signupBtn} onClick={handleSignUp}>Sign Up</button>
          <button style={styles.loginBtn} onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  signupContainer: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  signupBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'url(https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg) no-repeat center center/cover',
    zIndex: -1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
    color: 'white',
  },
  card: {
    padding: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background for the card
    borderRadius: '16px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)', // Frosted glass effect
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signupBtn: {
    padding: '15px 40px',
    fontSize: '1.5rem',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.7)',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    marginBottom: '20px',
    transition: 'background-color 0.3s',
  },
  loginBtn: {
    padding: '15px 40px',
    fontSize: '1.5rem',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.7)',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    marginBottom: '20px',
    transition: 'background-color 0.3s',
  },
  signupBtnHover: {
    background: 'rgba(0, 0, 0, 0.9)',
  },
  loginBtnHover: {
    background: 'rgba(0, 0, 0, 0.9)',
  },
};

export default SignUpPage;
