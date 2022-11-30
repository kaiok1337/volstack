const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema (
    {
        volumeLoad: { type: Number, required: true},
        author: { type: String, required: true, default: 'Anonymous' }
    },
    {
        timestamps: true,
    }
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post

