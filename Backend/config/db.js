const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/portfolioDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));
};

module.exports = connectDB;
