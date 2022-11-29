const db = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    db.User.find({}, (err, posts) => {
        console.log(posts)
        res.render('index.ejs', {
            posts: posts
        })
    })
})

router.post('/', (req, res) => {
    db.User.findByIdAndUpdate(
        req.body.userId,
        {$push: {posts: req.body}},
        {new: true},
        (err, user) => {
            res.json(user)
        }
    )
})

module.exports = router