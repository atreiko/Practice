const express = require('express')
const admin = require('firebase-admin')
const bcrypt = require('bcrypt')
const path = require('path')

let staticPath = path.join(__dirname, '/public/')

console.log(__dirname);

const app = express()

app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'src/index.html'))
})

app.listen(3000, () => {
    console.log('listening on port 3000...');
})