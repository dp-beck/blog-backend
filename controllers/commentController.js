const Comment = require('../models/comment');
const asyncHandler = require('express-async-handler');

// Get list of all comments
exports.comment_list = asyncHandler(async (req, res, next) => {
    const allComments = await Comment.find();
    res.json(allComments);
});

// Get a single comment
exports.comment_detail = asyncHandler(async (req, res, next) => {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
})

// Handle comment create on POST
exports.create_comment = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: comment create POST");
});

// Handle comment Delete on POST
exports.delete_comment = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: comment delete POST");
});

// Handle comment Update on POST
exports.update_comment = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: comment update POST");
});

