const db = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    db.User.find({}, (err, users) => {
        res.json(users)
    })
})

router.post('/', (req, res) => {
    db.User.create(req.body, (err, users) => {
        res.json(users)
    })
})

module.exports = router