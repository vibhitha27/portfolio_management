import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/Context';

const Login = () => {
    const [email, setEmailInput] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { Email, setEmail } = useUser();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });

            if (response.status==200) {
                setMessage(response.data.message);
                setEmail(email);//context
                console.log(response.data.email);
            }
            else {
                console.log(response.data)
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error logging in');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmailInput(e.target.value)} // Local state for email input
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Local state for password input
                />
                <button type="submit">Login</button>
            </form>
            {message && <div>{message}</div>}
            {/* Debugging: You can add this to see if the Email is updated correctly in the context */}
            <p>Current Email in Context: {Email}</p>
        </div>
    );
};

export default Login;
