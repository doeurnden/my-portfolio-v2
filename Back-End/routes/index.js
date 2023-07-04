const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello From Route Page')
})

router.get('/login', (req, res) => {
    res.send('Login')
})

module.exports = router