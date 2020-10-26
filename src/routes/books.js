const router = require('express').Router()
const booksController = require('../controllers/books')

router.use((req, res, next) => {
    console.log('/' + req.method)
    next()
})

router.get('/', (req, res) => {
    booksController.list(req, res)
})

router.post('/', (req, res) => {
    booksController.update(req, res)
})

module.exports = router