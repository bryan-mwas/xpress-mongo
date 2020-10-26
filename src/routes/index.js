const router = require('express').Router()

router.use((req, res, next) => {
    console.log('/' + req.method)
    next()
})

module.exports = router