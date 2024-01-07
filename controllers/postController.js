const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

// Get list of all posts
exports.post_list = asyncHandler(async (req, res, next) => {
    const allPosts = await Post.find({});
    res.json(allPosts);
});

// Get a single post
exports.post_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Single Post with ID: ${req.params.id}`)
})

// Display Post Create Form on GET
exports.post_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Post create GET");
});

// Handle Post create on POST
exports.post_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Post create POST");
});

// Display Post Delete Form on GET
exports.post_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Post delete GET");
});

// Handle Post Delete on POST
exports.post_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Post delete POST");
});

// Display Post Update Form on GET
exports.post_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Post update GET");
});

// Handle Post Update on POST
exports.post_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Post update POST");
});

