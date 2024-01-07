const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

// Get list of all comments
exports.comment_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: List of Comments");
});

// Get a single comment
exports.comment_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Single comment with ID: ${req.params.id}`)
})

// Display comment Create Form on GET
exports.comment_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: comment create GET");
});

// Handle comment create on POST
exports.comment_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: comment create POST");
});

// Display comment Delete Form on GET
exports.comment_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: comment delete GET");
});

// Handle comment Delete on POST
exports.comment_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: comment delete POST");
});

// Display comment Update Form on GET
exports.comment_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: comment update GET");
});

// Handle comment Update on POST
exports.comment_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: comment update POST");
});

