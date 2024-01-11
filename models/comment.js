const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    published: { type: Boolean },
    authorName: { type: String, required: true },
    authorEmail: { type: String, required: true },
    post: [{ type: Schema.Types.ObjectId, ref: "Post" }],
}, { timestamps: true });

// Virtual for post's url
CommentSchema.virtual("url").get(function () {
    return `/comments/${this._id}`;
});

module.exports = mongoose.model("Comment", CommentSchema);