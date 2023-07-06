
const mongoose = require("mongoose");

// Schema Design
const earningsSchema = new mongoose.Schema({
    e_email: {
        required: true,
        type: String
    },
    e_date: {
        required: true,
        type: String
    },
    e_prize: {
        required: true,
        type: String
    },
    e_rental: {
        required: true,
        type: String
    },
}, {
    timestamps: true
}
)


// Model
const Earnings = mongoose.model("earnings", earningsSchema);

module.exports = Earnings;