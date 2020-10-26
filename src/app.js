const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const port = 8080

const db = require('./data-access/db')
const books = require('./routes/books')

app.use(bodyParser.json()) // application/json parser
app.use(bodyParser.urlencoded({ extended: false})) // For form data parsing

app.use('/books', books)

app.listen(port, 'localhost', function() {
    console.log('Example app listening on port: ' + port)
})
