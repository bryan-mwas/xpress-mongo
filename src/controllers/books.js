const Book = require('../models/book')

exports.create = (req, res) => {
    const newBook = new Book(req.body)
    console.log(req.body)
    newBook.save(function(err) {
        if(err) {
            console.error(err)
            res.status(400).send('Unable to save book to db')
        }
        else {
            res.json('Saved')
        }
    })
}

exports.list = (req, res) => {
    Book.find({}).exec((err, books) => {
        if(err) return res.send(500, err)
        res.json(books)
    })
}

exports.update = async (req, res) => {
    const {_id, ...fields} = req.body
    try {
        const result = await Book.updateOne({_id: _id}, {...fields})
        res.json(result)
    } catch (error) {
        console.error(error)
    }
}