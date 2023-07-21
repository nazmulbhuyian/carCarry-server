
const mongoose = require("mongoose");

// Schema Design
const bookingsSchema = new mongoose.Schema({
    o_name: {
        type: String,
        required: [true, "Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
        lowercase: true
    },
    c_name: {
        type: String,
        required: [true, "Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
        lowercase: true
    },
    prize: {
        required: true,
        type: Number
    },
    o_img: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    time: {
        required: true,
        type: String
    },
    c_email: {
        required: true,
        type: String
    },
    o_email: {
        required: true,
        type: String
    },
    o_id: {
        type: String,
        required: true
    },
    o_phone: {
        required: true,
        type: String
    },
    c_phone: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String
    }
}, {
    timestamps: true
}
)


// Model
const Bookings = mongoose.model("bookings", bookingsSchema);

module.exports = Bookings;