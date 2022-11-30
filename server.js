//Dependencies

const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')

//Model Access
require('dotenv').config()
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI
const db = require('./models')

//Controller Access
const userController = require('./controllers/users.js')
const postController = require('./controllers/posts.js')


//Middleware
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    next();
})
//Routes
app.use('/signup', userController);
app.use('/', postController);



//Listener
app.listen(port, () => {
})

