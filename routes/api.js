const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');

// POST ROUTES //

// POST request to create Post
router.post('/post/create', post_controller.create_post)

// POST request to delete Post
router.post('/post/:id/delete', post_controller.delete_post)

// POST request to update Post
router.post('/post/:id/update', post_controller.update_post);

// GET request for one Post
router.get('/post/:id', post_controller.post_detail);

// GET List of all Post
router.get('/posts', post_controller.post_list);

// COMMENT ROUTES //

// POST request to create comment
router.post('/comment/create', comment_controller.create_comment)

// Post request to delete comment
router.post('/comment/:id/delete', comment_controller.delete_comment)

// POST request to update comment
router.post('/comment/:id/update', comment_controller.update_comment);

// GET request for one comment
router.get('/comment/:id', comment_controller.comment_detail);

// GET List of all comment
router.get('/comments', comment_controller.comment_list);

module.exports = router;