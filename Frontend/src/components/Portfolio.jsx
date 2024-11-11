import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../context/Context'; // Import the AuthContext to get the email from the context

const Portfolio = () => {
    const { Email } = useUser(); // Get email from context
    const [portfolioData, setPortfolioData] = useState({
        name: '',
        dob: '',
        interests: [],
        hobbies: [],
        careerSummary: '',
        skills: [],
        workSamples: [],
        awards: [],
        honors: [],
        services: [],
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch the user's current portfolio when the component mounts (if needed)
        if (Email) {
            axios
                .post('http://localhost:5000/getportfolio', { email: Email }) // Fix: sending 'email' as 'Email'
                .then((response) => {
                    setPortfolioData(response.data);
                })
                .catch((error) => {
                    setMessage('Error fetching portfolio data');
                });
        }
    }, [Email]);

    // Handle input changes for different fields
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'dob') {
            setPortfolioData({ ...portfolioData, [name]: value });
        } else if (['interests', 'hobbies', 'skills', 'workSamples', 'awards', 'honors', 'services'].includes(name)) {
            // Handle comma-separated input (splitting into arrays)
            const updatedArray = value.split(',').map(item => item.trim()); // Split by commas and trim spaces
            setPortfolioData({ ...portfolioData, [name]: updatedArray });
        } else {
            setPortfolioData({ ...portfolioData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!Email) {
            setMessage('You need to be logged in to update your portfolio');
            return;
        }

        try {
            // Sending the updated portfolio data to the server
            const response = await axios.post('http://localhost:5000/portfolio', {
                email: Email, // Correct: sending email from context
                portfolioData,
            });
            setMessage('Portfolio updated successfully!');
        } catch (error) {
            setMessage('Error updating portfolio');
        }
    };

    return (
        <div>
            <h2>Update Portfolio</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={portfolioData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dob"
                        value={portfolioData.dob}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Interests (comma-separated):</label>
                    <input
                        type="text"
                        name="interests"
                        value={portfolioData.interests.join(', ')} // Join array into a string
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Hobbies (comma-separated):</label>
                    <input
                        type="text"
                        name="hobbies"
                        value={portfolioData.hobbies.join(', ')}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Career Summary:</label>
                    <textarea
                        name="careerSummary"
                        value={portfolioData.careerSummary}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Skills (comma-separated):</label>
                    <input
                        type="text"
                        name="skills"
                        value={portfolioData.skills.join(', ')}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Work Samples (comma-separated URLs):</label>
                    <input
                        type="text"
                        name="workSamples"
                        value={portfolioData.workSamples.join(', ')}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Awards (comma-separated):</label>
                    <input
                        type="text"
                        name="awards"
                        value={portfolioData.awards.join(', ')}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Honors (comma-separated):</label>
                    <input
                        type="text"
                        name="honors"
                        value={portfolioData.honors.join(', ')}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Services (comma-separated):</label>
                    <input
                        type="text"
                        name="services"
                        value={portfolioData.services.join(', ')}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button type="submit">Update Portfolio</button>
                </div>
            </form>

            {message && <div>{message}</div>}
        </div>
    );
};

export default Portfolio;
