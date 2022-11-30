const db = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('adduser.ejs')
})

router.post('/', (req, res) => {
    db.User.create(req.body, (err, users) => {
        res.render('betapage.ejs')
    })
})

module.exports = router