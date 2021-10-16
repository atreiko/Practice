const express = require('express')
const path = require('path')


//! declare static path
let staticPath = path.join(__dirname, 'public')

//todo init:
const app = express()

//! middleware
app.use(express.static(staticPath))

//? home route
app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'))
})

//? blog route
app.get('/blog', (req, res) => {
    res.sendFile(path.join(staticPath, 'blog.html'))
})

//? signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, 'signup.html'))
})

//? 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, '404.html'))
})

//? 404 redirect
app.use('/', (req, res) => {
    res.redirect('/404')
})

app.listen(3000, () => {
    console.log('Server running...');
})

