const express = require('express');
const cartControllers = require('../controllers/cart');
const isLoggedIn = require('../middlewares/isLogged').isLoggedIn;

let router = express.Router();

router.post('/add', isLoggedIn, cartControllers.add);
router.get('/get', isLoggedIn, cartControllers.getAll);
router.get('/get/:type', isLoggedIn, cartControllers.get);
router.post('/update', isLoggedIn, cartControllers.update);

module.exports = router;