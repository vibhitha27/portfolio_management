const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Register a user
router.post('/register', async (req, res) => {
    const { email, password, name, dob } = req.body;

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ message: 'User already exists' });

    // Create a new user with portfolio data
    const newUser = new User({
        email,
        password,
        portfolio: { name, dob }
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    // Send email along with success message
    res.status(200).json({
        message: 'Login successful',
        email: user.email // Include the email in the response
    });
});


// Create or update portfolio (one time per user)
router.post('/portfolio', async (req, res) => {
    const { email, portfolioData } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Update the portfolio
    user.portfolio = { ...user.portfolio, ...portfolioData };
    await user.save();

    res.status(200).json({ message: 'Portfolio updated successfully' });
});

// Get portfolio using POST (changed to POST and new route)
router.post('/getportfolio', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.portfolio);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
