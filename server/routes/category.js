const express = require('express');
const categoryControllers = require('./../controllers/category');

let router = express.Router();

router.get('/get', categoryControllers.get);
router.get('/get/:cat', categoryControllers.find);

module.exports = router;