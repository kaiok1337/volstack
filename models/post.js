const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema (
    {
        volumeLoad: { type: Number, required: true},
        message: String,
        timestamps: true,
        author: { type: mongoose.ObjectId, ref: 'User', required: true}
    }
)

module.exports = postSchema