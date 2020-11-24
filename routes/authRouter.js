var express = require("express");
var authRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const zxcvbn = require("zxcvbn");

const { isLoggedIn } = require("./../utils/utils");
const saltRound = 10;


// ROUTES

// GET > SIGN UP ROUTE
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

// POST > SIGN UP ROUTE
authRouter.post("/signup", (req, res, next) => {
  const { email, password, repeat } = req.body;

  // REQUIRE DATA INPUT ON ALL FIELDS
  if (email === "" || password === "" || repeat === "") {
    const props = { errorMessage: "Please complete form" };
    res.render("Signup", props);
    return;
  }

  // PASSWORD STRENGTH
  // if (zxcvbn(password).score < 3) {    // TO UNCOMMENT, COMMENTED TO KEEP WORKING WITH CLASSES
  // console.log("Score: ", zxcvbn(password));
  if (zxcvbn(password).score > 0) {
    //TO COMMENT
    const suggestions = zxcvbn(password).feedback.suggestions;
    const props = { errorMessage: suggestions[0] };
    res.render("Signup", props);
    return;
  }

  // ENTER PASSWORD AND REPEAT PASSWORD FIELDS MATCH VALIDATION
  if (password !== repeat) {
    const props = { errorMessage: `Passwords don't match!` };
    res.render("Signup", props);
    return;
  }

  //EMAIL VALIDATION

  // EMAIL SYNTAX VALIDATION
  // const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (emailRegEx.test(email) == 0) {
    // MODIFIED, IT WAS with one = sign, has to be with double
    const props = { errorMessage: `Enter a valid email adress` };
    res.render("Signup", props);
    return;
  }

  //EMAIL AVAILABILITY
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
          const props = { errorMessage: "Error creating User<br>" + err };
          res.render("Signup", props);
        });
    })
    .catch((err) => {
      console.log(err);
      const props = { errorMessage: "Error creating User<br>" + err };
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
    const props = { errorMessage: "Please email and password" };
    res.render("Login", props);
    return;
  }

  //CHECK FOR EMAIL IN DATABASE
  User.findOne({ email }).then((user) => {
    if (!user) {
      const props = { errorMessage: "The email doesn't exist" };
      res.render("Login", props);
      return;
    }

    //CHECK IF PASSWORD USED FOR LOGIN MATCHES THE ONE FOR THE USER SAVED IN THE DATABASE
    const passwordCorrect = bcrypt.compareSync(password, user.password);

    //CREATE COOKIE & SEND TO HOME OR SHOW ERROR INSTEAD
    if (passwordCorrect) {
      req.session.currentUser = user;
      res.redirect("/private/home");
    } else {
      res.render("login", { errorMessage: "Incorrect password" });
    }
  });
});

// GET > LOGOUT ROUTE
authRouter.get("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      res.render("Login", err);
    } else {
      res.redirect("/auth/login");
    }
  });
});
module.exports = authRouter;
