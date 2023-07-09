
const mongoose = require("mongoose");

// Schema Design
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        required: true,
        type: String
    },
    role: {
        required: true,
        type: String
    },
    img: {
        required: false,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    balance: {
        required: true,
        type: Number
    },
}, {
    timestamps: true
}
)


// Model
const Users = mongoose.model("users", usersSchema);

module.exports = Users;