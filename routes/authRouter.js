var express = require("express");
var authRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const zxcvbn = require("zxcvbn");

const isLoggedIn = require("./../utils/isLoggedIn");
const saltRound = 10;

// ROUTES

// GET > SIGN UP ROUTE
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

// POST > SIGN UP ROUTE
authRouter.post("/signup", (req, res, next) => {
  const { email, password, repeat } = req.body;

  // POST > SIGN UP EMAIL AND PASSWORD
  if (email === "" || password === "" || repeat === "") {
    const props = { errorMessage: "Please complete form" };
    res.render("Signup", props);
    return;
  }
  if (password !== repeat) {
    const props = { errorMessage: `Passwords don't match!` };
    res.render("Signup", props);
    return;
  }

  //email validation

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        const props = { errorMessage: "The email already exist" };
        res.render("Signup", props);
        return;
      }

      const salt = bcrypt.genSaltSync(saltRound);
      const hashedPassword = bcrypt.hashSync(password, salt);

      User.create({ email: email, password: hashedPassword })
        .then((createdUser) => {
          res.redirect("/private/Calendar/");
        })
        .catch((err) => {
          console.log(err);
          const props = { errorMessage: "IError creating User<br>" + err };
          res.render("Signup", props);
        });
    })
    .catch((err) => {
      console.log(err);
      const props = { errorMessage: "IError creating User<br>" + err };
      res.render("Signup", props);
    });
});

// GET > LOGIN ROUTE
authRouter.get("/login", (req, res, next) => {
  res.render("Login");
});

// POST > LOGIN ROUTE
authRouter.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    const props = { errorMessage: "Indicate email and password" };
    res.render("Login", props);
    return;
  }
  console.log("1");
  User.findOne({ email }).then((user) => {
    if (!user) {
      console.log("2");
      const props = { errorMessage: "The email doesn't exist" };
      res.render("Login", props);
      return;
    }
    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (passwordCorrect) {
      console.log("3");
      req.session.currentUser = user;
      res.redirect("/private/home");
    } else {
      console.log("4");
      res.render("login", { errorMessage: "Incorrect password" });
    }
  });
});

// GET > LOGOUT ROUTE
authRouter.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      res.render("Login", err);
    } else {
      res.redirect("/auth/login");
    }
  });
});
module.exports = authRouter;
