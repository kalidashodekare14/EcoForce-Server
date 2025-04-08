const mongoose = require('mongoose');


const userSchma = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: Number },
    address: { type: String },
    gender: { type: String },
    date_of_birth: { type: String },
    role: { type: String }
}, { timestamps: true });

const User = mongoose.model("User", userSchma)

module.exports = User;