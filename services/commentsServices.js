const Comments = require("../models/Comments");

exports.getCommentsService = async () => {
    const comments = await Comments.find({});
    return comments;
}