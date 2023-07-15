
const mongoose = require("mongoose");

// Schema Design
const publishRidesBookingsSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    pub_email: {
        type: String,
        required: true
    },
    b_email: {
        type: String,
        required: true
    },
    b_name: {
        type: String,
        required: true
    },
    b_phone: {
        type: String,
        required: true
    },
    pub_phone: {
        type: String,
        required: true
    }
   
}, {
    timestamps: true
}
)


// Model
const publishRidesBookings = mongoose.model("pubridesbookings", publishRidesBookingsSchema);

module.exports = publishRidesBookings;