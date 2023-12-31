
const mongoose = require("mongoose");

// Schema Design
const commentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name must be required"],
      minLength: [3, "At least 3 caracted must be provide"],
      maxLength: [30, "Name is to large"],
      lowercase: true
    },
    type: {
        required: true,
        type: String
      },
      img: {
        required: true,
        type: String
      },
    comment: {
      required: true,
      type: String
    },
    e_mail: {
      required: true,
      type: String
    },
    ratting: {
      type: Number,
      required: true,
      min: 0
    },
  }, {
    timestamps: true
  }
  )
  
  
  // Model
  const Comments = mongoose.model("comments", commentSchema);

  module.exports = Comments;