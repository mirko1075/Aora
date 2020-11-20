var express = require("express");
var authRouter = express.Router();

const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const zxcvbn = require('zxcvbn');


const isLoggedIn = require('./../utils/isLoggedIn');
const saltRound = 10;

// ROUTES

// GET > SIGN UP ROUTE
authRouter.get('/signup', (req, res, next) => {
    res.render('Signup');
})

// POST > SIGN UP ROUTE
authRouter.post('/signup', (req, res, next) => {
    const { username, password } = req.body;

    if ( username === '' || password === '') {
        const props = { errorMessage: 'Enter username and password'};
        res.render('Signup', props);
        return;
    }
    
    User.findOne( { username: username })
    .then( (user) => {
        if (user) {
            const props = { errorMessage: 'The username already exist'};
            res.render('Signup', props);
            return;
        }

        const salt = bcrypt.genSaltSync( saltRound );
        const hashedPassword = bcrypt.hashSync( password, salt );

        User.create( {username: username, password: hashedPassword })
        .then( (createdUser) => {
            res.redirect('/');

        })
        .catch( (err) => console.log(err))
    })
    .catch( (err) => console.log(err))
})

// GET > LOGIN ROUTE
authRouter.get('/login', (req, res, next) => {
    res.render('Login');
})

// POST > LOGIN ROUTE
authRouter.post('/login', (req, res, next) => {
    const {username, password} = req.body;

    if (username === '' || password === '') {
        const props = { errorMessage: 'Indicate username and password'}
        res.render('Login', props);
        return;
    }

    User.findOne( { username } )
    .then( (user) => {
        if (!user) {
            const props = {errorMessage: "The username doesn't exist"}
            res.render('Login', props);
            return;
        }
        const passwordCorrect = bcrypt.compareSync(password, user.password);

        if (passwordCorrect) {
            req.session.currentUser = user;
            res.redirect('/');
        } else {
            res.redirect('/auth/login');
        }
    })
})
module.exports = authRouter;
