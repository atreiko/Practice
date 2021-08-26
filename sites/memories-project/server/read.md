
SERVER
 ---> npm i body-parser cors express mongoose nodemon

server/index.js
    import express from 'express';
    import bodyParser from 'body-parser';
    import mongoose from 'mongoose';
    import cors from 'cors';

server/package.json
    "type": "module"
    "start": "nodemon index.js"

CLIENT
 ---> npm i axios moment react-file-base64 redux redux-thunk react-redux
    delete src
    create src

client/src/index.js
    import React from 'react';
    import ReactDOM from 'react-dom'
    import App from './App';
    ReactDOM.render(<App />, document.getElementById('root'))

client/src/App.js       - create file


SERVER
create database
server/index.js
    import express from 'express';
    import mongoose from 'mongoose';
    import cors from 'cors';
    const app = express()

    express.json({ limit: "30mb", extended: true })
    express.urlencoded({ limit: "30mb", extended: true })
    app.use(cors())

    Копируем URL с Cluster и меняем <password>
    const CONNECTION_URL = 'mongodb+srv://bolocode:3131@cluster0.6r0wn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const PORT = process.env.PORT || 5000;

    mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

    mongoose.set('useFindAndModify', false)

server/routes/posts.js      - Создаем папку routes и файл posts.js
    import express from 'express';
    const router = express.Router()
    router.get('/', (req, res) => {
        res.send('THIS WORKS')
    })
    export default router

server/index.js
    import postRoutes from './routes/posts.js'
    app.use('/posts', postRoutes)    - создали роут localhost:5000/posts

server/controllers/posts.js     - создаем папку controllers и файл posts.js 
                                Файл будет содержать в себе handlers
    export const getPosts = (req, res) => {         - экспортируем функцию и ипортируем в routes/posts.js
        res.send('THIS WORKS')
    }

server/routes/posts.js 
    import express from 'express';
    import { getPosts } from '../controllers/posts.js';    - импортировали
    const router = express.Router()

    router.get('/', getPosts)       - вставили

    export default router

server/models/postMessage.js        - создаем папку models и файл postMessage.js  
    import mongoose from 'mongoose';
    const postSchema = mongoose.Schema({
        title: String,
        message: String,
        creator: String,
        tags: [String],
        selectedFile: String,
        likeCount: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    })
    const PostMessage = mongoose.model('PostMessage', postSchema)
    export default PostMessage

server/routes/posts.js
    import { getPosts, createPost } from '../controllers/posts.js';
    router.post('/', createPost)           - импортируем и создаем новый роут

server/controllers/posts.js         - переходим в conrollers, чтоб написать createPost
    Добавляем models/postMessage.js в блок trycatch в getPosts и createPost

    import PostMessage from '../models/postMessage.js'

    export const getPosts = async (req, res) => {
        try {
            const postMessages = await PostMessage.find()
            console.log(postMessages);

            res.status(200).json(postMessages)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
    export const createPost = async (req, res) => {
        const post = req.body
        const newPost = new PostMessage(post)

        try {
            await newPost.save()
            //! https://restapitutorial.com/httpstatuscodes.html   

            res.status(201).json(newPost)
        } catch (error) {
            res.status(409).json({ message: error.message })
        }
        res.send('Post Creation')
    }

 
CLIENT      28.58
 ---> npm i @material-ui/core

    Create structure:
    client/src/components/Form
        client/src/components/Form/Form.js
        client/src/components/Form/styles.js
    client/src/components/Posts
        client/src/components/Posts/Posts.js
        client/src/components/Posts/styles.js
            client/src/components/Posts/Post
                client/src/components/Posts/Post/Post.js
                client/src/components/Posts/Post/styles.js
    client/src/components/images

client/src/App.js
    import React from 'react'
    import { Container, Typography, Grid, Grow, AppBar } from '@material-ui/core'
    import memories from './images/memories.png'
    import Posts from './components/Posts/Posts'
    import Form from './components/Form/Form'

    const App = () => {
        return (
            <Container maxWidth="lg">
                <AppBar position="static" color="inherit">
                    <Typography variant="h2" align="center">Memories</Typography>
                    <img src={memories} alt="memories" height="60" width="60" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        )
    }
    export default App

client/src/styles.js
    import { makeStyles } from "@material-ui/core/styles";
    export default makeStyles(() => ({
        appBar: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '30px 0',
            borderRadius: 15,
        },
        heading: {
            color: 'rgba(0, 183, 255, 1)'
        },
        image: {
            marginLeft: '15px'
        }
    }))

client/src/App.js
client/src/components/Posts/Posts.js'
client/src/components/Posts/Post/Post.js'
client/src/components/Form/Form.js'
    import useStyles from './styles'
    const classes = useStyles()

client/src/api/index.js     - create folder "api" and file "index.js"
    import axios from 'axios';
    const url = 'http://localhost:5000/posts'
    export const fetchPosts = () => axios.get(url)

client/src/actions/posts.js         create structure
client/src/reducers/posts.js
client/src/reducers/index.js

CLIENT
client/src/index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Provider } from 'react-redux';
    import { createStore, applyMiddleware, compose } from 'redux';
    import  thunk from 'redux-thunk';
    import reducers from './reducers';
    import App from './App';
    const store = createStore(reducers, compose(applyMiddleware(thunk)))
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root'))

client/src/reducers/index.js
    import { combineReducers } from "redux";
    import posts from './posts'
    export default combineReducers({
        posts,
    })

client/src/reducers/posts.js
    export default (posts = [], action) => {
     switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
     
        default:
            return posts;
     }
} 

client/src/App.js
    import { useEffect } from 'react'
    import { useDispatch } from 'react-redux'
    import { getPosts } from './actions/posts'
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

client/src/actions/posts.js
    import * as api from '../api'
    export const getPosts = () => async (dispatch) => {
        try {
            // response:
            const { data } = await api.fetchPosts()
            dispatch({ type: 'FETCH_ALL', payload: data })
        } catch (error) {
            console.log(error.message)
        }
    }

client/src/components/Posts/Posts.js
    import { useSelector } from 'react-redux';
    const posts = useSelector((state) => state.posts) 

client/package.json
    "proxy": "http://localhost:5000",       - remove the error

client/src/components/Form/Form.js
    import React, { useState } from 'react'
    import useStyles from './styles'
    import { Typography, Paper, TextField, Button } from '@material-ui/core'
    import FileBase from 'react-file-base64'
    const Form = () => {
        const [postData, setPostData] = useState({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '' 
        })
        const classes = useStyles()
        const handleSubmit = () => {}
        const clear = () => {}
        return (
            <Paper className={classes.paper}>
            <form noValidate autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Memory </Typography>
                <TextField 
                    name='creator' 
                    label='Creator' 
                    variant='outlined' 
                    fullWidth 
                    value={postData.creator }
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })} 
                />  
                <TextField 
                    name='title' 
                    label='Title' 
                    variant='outlined' 
                    fullWidth 
                    value={postData.title }
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
                />
                <TextField 
                    name='message' 
                    label='Message' 
                    variant='outlined' 
                    fullWidth 
                    value={postData.message }
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
                /> 
                <TextField 
                    name='tags' 
                    label='Tags' 
                    variant='outlined' 
                    fullWidth 
                    value={postData.tags }
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })} 
                />  
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                </div> 
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
            </Paper>
        )
    }
    export default Form

CREATING POST
client/src/api/index.js
    export const createPost = (newPost) => axios.get(url, newPost) 

client/src/actions/posts.js
    export const createPost = (post) => async(dispatch) => {
        try {
            const { data } = await api.createPost(post)
            dispatch({ type: 'CREATE_POST', payload: data })
        } catch (error) {
            console.log(error)
        }
    } 
    
client/src/components/Form/Form.js
    import { useDispatch } from 'react-redux'
    import { createPost } from '../../actions/posts'
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(postData))
    }

client/src/reducers/posts.js
    case 'CREATE':
            return [ ...posts, action.payload ];






