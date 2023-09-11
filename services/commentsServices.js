const Comments = require("../models/Comments");

exports.getCommentsService = async (query) => {
    const comments = await Comments.find({type: query});
    return comments;
}

exports.postCommentService = async (data) => {
    const comment = await Comments.create(data);
    return comment;
}

exports.deleteCommentService = async (id) => {
    const comment = await Comments.deleteOne({_id: id});
    return comment;
}