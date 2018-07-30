const express = require('express');
const productControllers = require('./../controllers/product');
const fileUpload = require('../middlewares/fileUpload');
const isLoggedIn = require('./../middlewares/isLogged').isLoggedIn;

let router = express.Router();

router.post('/add', isLoggedIn, fileUpload, productControllers.add);
router.get('/find/:title', productControllers.find);

module.exports = router;