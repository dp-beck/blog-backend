const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    published: { type: Boolean },
}, { timestamps: true });

// Virtual for post's url
PostSchema.virtual("url").get(function () {
    return `/posts/${this._id}`;
});

module.exports = mongoose.model("Post", PostSchema);