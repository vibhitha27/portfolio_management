import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../context/Context'; // Assuming useUser context is set up
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const Login = () => {
    const navigate = useNavigate();  // Use useNavigate hook to navigate after successful login
    const [email, setEmailInput] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setEmail } = useUser();  // Assuming setEmail updates the global user context

    const [passwordVisible, setPasswordVisible] = useState(false); // For toggling password visibility

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); // Toggle password visibility
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });

            if (response.status === 200) {
                setMessage(response.data.message);
                setEmail(email);  // Update the global user context with the email

                // Navigate to /homepage after successful login
                navigate('/homepage');
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error logging in');
        }
    };

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #F7B7A3, #FF6D73)', // New gradient: soft coral to pink
        }}>
            <div
                data-aos="fade-up" // AOS animation
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly lighter background for the form
                    padding: '40px',
                    borderRadius: '16px', // Increased radius for more rounded corners
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    width: '350px',
                    backdropFilter: 'blur(10px)', // Frosted glass effect
                    border: '1px solid rgba(255, 255, 255, 0.3)', // Light border to emphasize frosted effect
                }}
            >
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '20px',
                    color: '#333', // Dark text for contrast
                }}>Login</h2>

                {message && <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p>}

                <form onSubmit={handleLogin} style={{ display: 'grid', gap: '15px' }}>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmailInput(e.target.value)}
                            required
                            style={{
                                padding: '10px',
                                width: '100%',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                boxSizing: 'border-box',
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                padding: '10px',
                                width: '100%',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                boxSizing: 'border-box',
                            }}
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: '12px',
                            backgroundColor: '#FF6D73', // Using a color from the gradient
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            width: '100%',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s',
                        }}
                    >
                        Login
                    </button>
                </form>
                <p style={{ marginTop: '20px' }}>
                    Not a User? <a href='/register' style={{ color: '#FF6D73' }}>Register</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
