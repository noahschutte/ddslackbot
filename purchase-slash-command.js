const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/purchase', async (req, res) => {
    console.log(req.body)
    res.json({
        text: 'Thanks for the request.'
    })
})

const PORT = 9647
app.listen(PORT, () => {
    console.log(`ddslackbot has started on port: ${PORT}`)
})