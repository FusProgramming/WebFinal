const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = mongoose.Schema({

    RegisterPage: Schema.Types.ObjectId,

    content: String
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;
