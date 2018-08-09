const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize()); 
app.use(passport.session()); 
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.use(function (req, res, next) {
    console.log(req)
    res.header("Access-Control-Allow-Origin",req.headers.origin );
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Credentials", true);
    // res.header('Content-Type','application/json')
    next();
});

app.use('/', require('./routes'));
app.use(express.static('public'));

app.listen(10036, function () {
    console.log('Example app listening on port 10036!');
});