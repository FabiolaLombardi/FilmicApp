const express = require('express');
const cartControllers = require('../controllers/cart');
const isLoggedIn = require('../middlewares/isLogged').isLoggedIn;

let router = express.Router();

router.post('/add', isLoggedIn, cartControllers.add);

module.exports = router;