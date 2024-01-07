const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');

// POST ROUTES //

// GET request to create Post
router.get('/post/create', post_controller.post_create_get)

// POST request to delete Post
router.post('/post/create', post_controller.post_create_post)

// GET request to delete Post
router.get('/post/:id/delete', post_controller.post_delete_get)

// POST request to delete Post
router.post('/post/:id/delete', post_controller.post_delete_post)

// GET request to update Post
router.get('/post/:id/update', post_controller.post_update_get);

// POST request to update Post
router.post('/post/:id/update', post_controller.post_update_post);

// GET request for one Post
router.get('/post/:id', post_controller.post_detail);

// GET List of all Post
router.get('/posts', post_controller.post_list);

// COMMENT ROUTES //

// GET request to create comment
router.get('/comment/create', comment_controller.comment_create_get)

// POST request to delete comment
router.post('/comment/create', comment_controller.comment_create_post)

// GET request to delete comment
router.get('/comment/:id/delete', comment_controller.comment_delete_get)

// Post request to delete comment
router.post('/comment/:id/delete', comment_controller.comment_delete_post)

// GET request to update comment
router.get('/comment/:id/update', comment_controller.comment_update_get);

// POST request to update comment
router.post('/comment/:id/update', comment_controller.comment_update_post);

// GET request for one comment
router.get('/comment/:id', comment_controller.comment_detail);

// GET List of all comment
router.get('/comments', comment_controller.comment_list);

module.exports = router;