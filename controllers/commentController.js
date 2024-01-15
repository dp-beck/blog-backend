const Comment = require('../models/comment');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

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
exports.create_comment = [ 
    body("title")
        .trim()
        .isLength({ min: 1})
        .escape()
        .withMessage("Must provide a title."),
    body("text")
        .trim()
        .isLength({ min: 1})
        .escape()
        .withMessage("Must provide blog text."),
    body("authorName")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage('Must provide a name'),
    body('authorEmail')
        .trim()
        .isLength({ min: 1})
        .escape()
        .withMessage("Must provide an email")
        .isEmail()
        .withMessage('Not a valid email address'),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const comment = new Comment({
            title: req.body.title,
            text: req.body.text,
            authorName: req.body.authorName,
            authorEmail: req.body.authorEmail,
            published: true,
            post: req.body.post,
        });

        // NOTE TO SELF -- NOT SURE IF THIS IS RIGHT BE SURE TO TEST IT
        if (!errors.isEmpty()) {
            res.json([comment, errors.array()]);
            return;
        } else {
            await comment.save();
            res.json(comment);
        }
    }),
];

// Handle comment Delete on POST
exports.delete_comment = asyncHandler(async (req, res, next) => {
    const comment = await Comment.findById(req.body.commentid);
    await Comment.findByIdAndDelete(req.body.commentid);
    res.json(comment);
});

// NOT WRITNG OR INCLUDING ABILITY TO UPDATE A COMMENT VIA API

