const db = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    db.Post.find({}, (err, posts) => {
        res.render('index.ejs', {
            posts: posts
        })
    })
})



router.get('/newpost', (req, res) => {
    db.Post.find({}, (err, posts) => {
        res.render('addpost.ejs')
    })
})



router.post('/newpost', (req, res) => {
    db.Post.create(req.body, (err, post) => {
        res.redirect('/')
    })
})

router.delete('/:id', (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, post) => {
        res.redirect('/')
    })
})



router.get('/:id', (req, res) => {
    db.Post.findById(req.params.id, (err, post) => {
        res.render('viewpost.ejs', {
            post: post
        })
    })
})

router.put('/:id', (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, post) => {
        res.redirect('/')
    })
})

router.get('/:id/edit', (req, res) => {
    db.Post.findById(req.params.id, (err, post) => {
        res.render('editpost.ejs', {
            post: post
        })
    })
})





module.exports = router