const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema (
    {
        volumeLoad: { type: Number, required: true},
        message: String,
        author: { type: mongoose.ObjectId, ref: 'User', required: true}
    },
    {
        timestamps: true,
    }
)


module.exports = postSchema

