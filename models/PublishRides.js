
const mongoose = require("mongoose");

// Schema Design
const publishRidesSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    pub_detail: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    prize: {
        type: Number,
        required: true
    },
   
}, {
    timestamps: true
}
)


// Model
const publishRides = mongoose.model("publishrides", publishRidesSchema);

module.exports = publishRides;