const mongoose = require('mongoose');

const eventsModel = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    date_and_time: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true }
}, { timestamps: true });


const Events = mongoose.model("Events", eventsModel);
module.exports = Events;