//Dependencies

const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')

//Model Access
const db = require('./models')

//Controller Access
const userController = require('./controllers/users.js')



//Middleware
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    console.log('im runnin bro')
    next();
})


//Routes
app.use('/users', userController)


//Listener
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})