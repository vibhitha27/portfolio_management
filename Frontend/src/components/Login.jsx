import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/Context';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [email, setEmailInput] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { Email, setEmail } = useUser();

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
                setEmail(email); // Update context with email
                console.log(response.data.email);
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error logging in');
        }
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'url(https://i.pinimg.com/originals/cf/88/99/cf889965c8db4cace0467ba17cbab3f6.gif) no-repeat center center/cover',
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                width: '350px',
            }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '20px',
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
                            backgroundColor: '#8ca262',
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

                <p style={{ marginTop: '10px', color: '#555' }}>Current Email in Context: {Email}</p>
            </div>
        </div>
    );
};

export default Login;