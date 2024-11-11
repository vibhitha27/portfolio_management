const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const portfolioRoutes = require('./routes/portfolio');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', portfolioRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
