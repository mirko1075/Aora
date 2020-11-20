var express = require("express");
var siteRouter = express.Router();

// ROUTES

// GET > SIGN UP ROUTE
authRouter.get('/', (req, res, next) => {
    res.render('Signup');
})

module.exports = siteRouter;
