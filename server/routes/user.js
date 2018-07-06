const express = require('express');
// Middlewares
const isNew = require('./../middlewares/isNew').isNew;
const isLogged = require('./../middlewares/isLogged');
// Controllers
const userControllers = require('./../controllers/user');

let router = express.Router();

router.post('/signup', isLogged.isLoggedOut, isNew, userControllers.signup);
router.post('/login', isLogged.isLoggedOut, userControllers.login);
router.get('/logout', isLogged.isLoggedIn, userControllers.logout);
router.get('/auth', userControllers.auth);

router.get('/test', userControllers.test);

module.exports = router;