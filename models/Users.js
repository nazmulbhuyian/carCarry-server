
const mongoose = require("mongoose");

// Schema Design
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
        lowercase: true
    },
    email: {
        required: true,
        type: String
    },
    role: {
        required: true,
        type: String
    },
    // img: {
    //     required: true,
    //     type: String
    // },
    password: {
        required: true,
        type: String
    },
}, {
    timestamps: true
}
)


// Model
const Users = mongoose.model("users", usersSchema);

module.exports = Users;