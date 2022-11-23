const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        username: { type: String, required: true, index: {unique: true} },
        password: { type: String, required: true },
        allTimeVolumeLoad: Number,
        profilePic: type: String,
        posts: [postSchema]
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User