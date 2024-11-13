const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb+srv://vibhitha:mypass@cluster0.magac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));
};

module.exports = connectDB;
