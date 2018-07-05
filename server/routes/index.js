const express = require('express')

let router = express.Router()

router.use('/user', require('./users'));
router.use('/cart', require('./carts'));

module.exports = router;