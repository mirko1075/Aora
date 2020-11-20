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

module.exports = authRouter;
