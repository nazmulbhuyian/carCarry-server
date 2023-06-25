

const mongoose = require("mongoose");

// Schema Design
const wishListSchema = new mongoose.Schema({
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
    u_name: {
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
    c_img: {
        required: true,
        type: String
    },
    u_email: {
        required: true,
        type: String
    },
    detail_id: {
        type: String,
        required: true
    },
    o_phone: {
        required: true,
        type: String
    }
}, {
    timestamps: true
}
)


// Model
const WishList = mongoose.model("wishlists", wishListSchema);

module.exports = WishList;