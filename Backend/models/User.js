const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Portfolio Schema embedded in User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    // Portfolio fields
    portfolio: {
        name: { type: String, required: true },
        dob: { type: Date, required: true },
        interests: [String],
        hobbies: [String],
        careerSummary: String,
        skills: [String],
        workSamples: [String],
        awards: [String],
        honors: [String],
        services: [String]
    }
});

// Hash password before saving the user
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Method to check password validity
userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
