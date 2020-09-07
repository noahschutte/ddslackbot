const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./routes/purchase')(app)
require('./routes/action')(app)

const PORT = 9647
app.listen(PORT, () => {
    console.log(`ddslackbot has started on port: ${PORT}`)
})