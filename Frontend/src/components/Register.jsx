import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', {
                email,
                password,
                name,
                dob
            });
            setMessage(response.data.message);

            // Navigate to the signup page after successful registration
            if (response.data.success) {  // Assuming 'success' is part of the response
                navigate('/SignUpPage');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error registering user');
        }
    };

    const handleBack = () => {
        navigate('/SignUpPage');  // Navigate to the SignUpPage when back is clicked
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundImage: `url('https://www.shutterstock.com/image-photo/abstract-image-dark-room-concrete-600nw-2503384889.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#fff'
        }}>
            <h2 style={{
                fontSize: '2rem',
                color: '#fff',
                marginBottom: '1rem'
            }}>Sign Up</h2>

            <form onSubmit={handleRegister} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent overlay
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                width: '300px'
            }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        margin: '10px 0',
                        padding: '10px',
                        width: '100%',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        margin: '10px 0',
                        padding: '10px',
                        width: '100%',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                    }}
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        margin: '10px 0',
                        padding: '10px',
                        width: '100%',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                    }}
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    style={{
                        margin: '10px 0',
                        padding: '10px',
                        width: '100%',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                    }}
                />
                <button type="submit" style={{
                    marginTop: '10px',
                    padding: '10px 20px',
                    width: '100%',
                    backgroundColor: '#00bfff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                }}>
                    Register
                </button>
                <button type="button" onClick={handleBack} style={{
                    marginTop: '10px',
                    padding: '10px 20px',
                    width: '100%',
                    backgroundColor: '#ff6347',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                }}>
                    Back
                </button>
            </form>

            {message && (
                <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    color: message.includes('Error') ? 'red' : 'green',
                    fontWeight: 'bold'
                }}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default Register;
