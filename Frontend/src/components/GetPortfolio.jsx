import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/Context';


const GetPortfolio = () => {
    const [portfolioData, setPortfolioData] = useState(null);
    const [message, setMessage] = useState('');
    const { Email } = useUser();

    const handleGetPortfolio = async () => {
        if (!Email) {
            setMessage('Please login to retrieve your portfolio');
            return;
        }
        try {
            const response = await axios.post('https://portfolio-management-h11w.onrender.com/getportfolio', { email: Email });
            setPortfolioData(response.data);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error retrieving portfolio');
        }
    };

    return (
        <div>
            <h2>Get Portfolio</h2>
            <p>email: {Email}</p>
            <p>{Email ? `Logged in as: ${Email}` : 'Not logged in'}</p>
            <button onClick={handleGetPortfolio}>Retrieve Portfolio</button>
            {message && <div>{message}</div>}
            {portfolioData && (
                <div>
                    <h3>Portfolio:</h3>
                    <pre>{JSON.stringify(portfolioData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default GetPortfolio;
