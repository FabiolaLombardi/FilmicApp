const express = require('express')

let router = express.Router()

router.use('/user', require('./user'));

module.exports = router;