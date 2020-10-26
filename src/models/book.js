const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Book = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book', Book)