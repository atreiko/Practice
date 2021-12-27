import { Router } from "express";
import path from "path";
const router = new Router()
// import controller from "./authController.js";

const __dirname = path.resolve();
let staticPath = path.join(__dirname, 'public')

//? home route
router.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'))
})

//? signup route
router.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, '/signup.html'))
})

router.post('/signup', async (req, res) => {
    console.log(res.body);
    console.log('Connected');
})

//? blog route
router.get('/blog', (req, res) => {
    res.sendFile(path.join(staticPath, 'blog.html'))
})

//? 404 route
router.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, '404.html'))
})

//? 404 redirect
router.use('/*', (req, res) => {
    res.redirect('/404')
})





export default router