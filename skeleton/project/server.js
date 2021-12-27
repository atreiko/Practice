import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
// import authRouter from './routes/authRouter.js'

const PORT = process.env.PORT || 5000

//! ReferenceError: __dirname is not defined in ES module scope:
const __dirname = path.resolve();

const client = new MongoClient('mongodb+srv://bolocode:1234@cluster0.wdnri.mongodb.net/')

//! declare static path
let staticPath = path.join(__dirname, 'public')

//todo init:
const app = express()

//! middleware
app.use(express.static(staticPath))
app.use(express.json())  //* распознаем данные в post запросе
// app.use('/', authRouter)
app.use(express.urlencoded({extended: true}));


//? ROUTES ====================================================
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

app.post('/signup', async (req, res) => {
    console.log(req.body);
    console.log('Connected');
    let { email, username, password, confirmPassword, tac } = req.body   

    if(!email.length) {
        res.json({'alert': 'enter your email'})
    } else if (!username.length) {
        res.json({'alert': 'enter your username'})
    } else if (password.length < 6) {
        res.json({'alert': 'password should be 6 letters long'})
    } else if (password !== confirmPassword) {
        res.json({'alert': 'passwords must match. try again'})
    } else if(!tac) {
        res.json({'alert': 'you must agree to our terms and conditions'})
    }

    //? store user in db
    await client.connect()
    const users = client.db().collection('users')
    const user = await users.insertOne({
        email,
        username,
        password,
        confirmPassword,
        tac
    })
})

//? 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, '404.html'))
})

//? 404 redirect
app.use('/*', (req, res) => {
    res.redirect('/404')
})
//? ROUTES ====================================================



async function start() {
    await client.connect()
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    } catch(e) {
        console.log('ERROR -->', e);
    }
}

start()



