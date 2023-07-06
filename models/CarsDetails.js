
const mongoose = require("mongoose");

// Schema Design
const carsDetailsSchema = new mongoose.Schema({
    u_email: {
        required: true,
        type: String
    },
    c_img: {
        required: true,
        type: String
    },
    c_name: {
        type: String,
        required: [true, "Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
        lowercase: true
    },
    c_prize: {
        required: true,
        type: Number
    },
    c_heading: {
        required: true,
        type: String
    },
    u_img: {
        required: true,
        type: String
    },
    u_name: {
        type: String,
        required: [true, "Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
        lowercase: true
    },
    u_ratting: {
        required: true,
        type: Number
    },
    u_phone: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    },
    model: {
        type: String,
        required: [true, "Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
        lowercase: true
    },
    year: {
        required: true,
        type: Number
    },
    fuel: {
        type: String,
        required: true
    },
    km: {
        type: String,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    insurance: {
        type: String,
        required: true
    },
    
    abs: {
        type: String,
        required: true
    },
    cruise: {
        type: String,
        required: true
    },
    remote: {
        type: String,
        required: true
    },
    electric_door: {
        type: String,
        required: true
    },
    bluetooth: {
        type: String,
        required: true
    },
    airbag: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
   
}, {
    timestamps: true
}
)


// Model
const CarsDetails = mongoose.model("carsdetails", carsDetailsSchema);

module.exports = CarsDetails;