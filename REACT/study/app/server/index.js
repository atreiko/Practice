const express = require('express')

const app = express()

const PORT = 8085

const fakeEmails = [
    {id: 1, topic: 'email_1', favorite: true},
    {id: 2, topic: 'email_2'},
    {id: 3, topic: 'email_3'},
    {id: 4, topic: 'email_4'},
    {id: 5, topic: 'email_5'}
]

app.get('/api/emails/', (req, res) => {
    res.send(fakeEmails)
})

// app.get('/api/emails/:id', (req, res) => {
//     res.send(fakeEmails.map(element => element.id === element))
// })

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})