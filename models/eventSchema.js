const mongoose = require("mongoose");
const { Schema } = mongoose;


const EventSchema = new Schema({
    title: { type: String, required: true },

    hostedBy: { type: String, required: false },
    authorId: { type: String, required: false },

    authorId: { type: String, required: false },

    date: { type: String, required: true },

    time: { type: String, required: true },

    location: { type: String, required: true },

    coordinates: { type: String, required: true },

    imgUrl: { type: String, required: true },

    website: { type: String },

    description: { type: String, required: true },

    createdAt: { type: Date, default: Date.now }


});

module.exports = mongoose.model("Event", EventSchema);