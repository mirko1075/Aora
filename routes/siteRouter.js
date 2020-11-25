var express = require("express");
const fetch = require("node-fetch");
var siteRouter = express.Router();

const bcrypt = require("bcrypt");
const zxcvbn = require("zxcvbn");
const {
  getUserBySession,
  isLoggedIn,
  isBooked,
  isOnline,
} = require("../utils/utils");

//LOADING
const Class = require("./../models/Class.model");
const User = require("./../models/User.model");

// ROUTES

// GET > CALENDAR HOME
siteRouter.get("/", isLoggedIn, (req, res, next) => {
  res.redirect("/private/Calendar");
});
siteRouter.get("/home", isLoggedIn, (req, res, next) => {
  res.redirect("/private/Calendar");
});

siteRouter.get("/calendar", isLoggedIn, (req, res, next) => {
  const { classType, trainer, duration, difficulty, equipment } = req.query;
  let queryObj = {};
  // console.log("Params:", classType, trainer, duration, difficulty, equipment);
  classType ? (queryObj.classType = classType) : null;
  trainer ? (queryObj.trainer = trainer) : null;
  duration ? (queryObj.duration = duration) : null;
  difficulty ? (queryObj.difficulty = difficulty) : null;
  equipment ? (queryObj.equipment = equipment) : null;

  const pr = Class.find(queryObj)
    .populate("trainer")
    .sort("scheduled")
    .then((foundClasses) => {
      console.log("foundClasses", foundClasses);
      const props = { foundClasses };
      res.render("Calendar", props);
      return pr;
    })
    .catch((error) =>
      console.log("Something went wrong when retrieving an access token", error)
    );
});
// NOT NEEDED
// siteRouter.get("/my-schedule", (req, res, next) => {
//   res.render("Calendar");
// });

// ROUTE FOR CLASS DETAILS SHOW
siteRouter.get("/classDetail/:idClass", isLoggedIn, (req, res, next) => {
  const idCLass = req.params.idClass;
  const idUser = req.session.currentUser._id;
  let isOnLineRes = null;
  let isBookedRes = null;
  const pr = User.findById(idUser)
    .populate([
      {
        path: "scheduledClasses",
        populate: {
          path: "trainer",
        },
      },
    ])
    .then((foundUser) => {
      // console.log(
      //   "idCLass:",
      //   idCLass,
      //   "foundUser.scheduledClasses",
      //   foundUser.scheduledClasses
      // );
      if (isBooked(foundUser.scheduledClasses, idCLass)) {
        console.log("Found");
        if (isOnline(foundUser.scheduledClasses, idCLass)) {
          console.log("On line");
          isOnLineRes = true;
        } else {
          isBookedRes = true;
        }
      } else {
        console.log("Not found");
        isBookedRes = false;
      }
      return isBookedRes;
    })
    .then((foundUser) => {
      Class.findById(idCLass)
        .populate("trainer")
        .then((foundClass) => {
          const props = {
            foundClass: foundClass,
            isBookedRes: isBookedRes,
            isOnLineRes: isOnLineRes,
          };
          // console.log("IsBooked:", props.isBooked);
          // console.log("Props from promise:", props);
          res.render("ClassDetail", props);
        });
    })
    .catch((error) =>
      console.log(
        "Something went wrong when retrieving an access token using findById",
        error
      )
    );
});

// ROUTE FOR CLASS BOOK
siteRouter.get("/classDetail/add/:idClass", isLoggedIn, (req, res, next) => {
  const idClass = req.params.idClass;
  const idUser = req.session.currentUser._id;
  // console.log("idUser:", idUser, "idClass:", idClass);
  User.findByIdAndUpdate(idUser, {
    $addToSet: { scheduledClasses: [idClass] },
  })
    .then((foundClass) => {
      res.redirect("/private/ClassDetail/" + idClass);
    })
    .catch((error) =>
      console.log(
        "Something went wrong when retrieving an access token using findByIdAndUpdate",
        error
      )
    );
});

// ROUTE > FOR CLASS  UNBOOK
siteRouter.get("/classDetail/delete/:idClass", isLoggedIn, (req, res, next) => {
  const idClass = req.params.idClass;
  const idUser = req.session.currentUser._id;
  // console.log("Delete/n idUser:", idUser, "idClass:", idClass);
  User.findByIdAndUpdate(idUser, {
    $pull: { scheduledClasses: idClass },
  })
    .then((foundClass) => {
      res.redirect("/private/ClassDetail/" + idClass);
    })
    .catch((error) =>
      console.log(
        "Something went wrong when retrieving an access token using findByIdAndUpdate",
        error
      )
    );
});

// GET > LIVE-CLASS ROUTE
siteRouter.get("/liveClass/:idCLass", isLoggedIn, (req, res, next) => {
  // const idClass = req.params.idClass;
  const idClass = "5fbe496666f0236b4207d281";
  // console.log("idClass", idClass, req);
  Class.findById(idClass)
    .then((foundClass) => {
      const props = { foundClass: foundClass };
      // console.log("Props from siteRouter:", props);
      res.render("LiveClass", props);
    })
    .catch((error) =>
      console.log(
        "Something went wrong when finding a user id @ get schedule route",
        error
      )
    );
});

// GET > SCHEDULE ROUTE
siteRouter.get("/schedule", isLoggedIn, (req, res, next) => {
  const id = req.session.currentUser._id;
  User.find({ _id: id })
    .populate([
      {
        path: "scheduledClasses",
        populate: {
          path: "trainer",
        },
      },
    ])

    .then((user) => {
      //console.log("user" + user)
      // console.log("USER.EMAIL: " + user[0].email);
      // console.log(
      //   "USER classes duration: " + user[0].scheduledClasses[0].duration
      // );
      // console.log(
      //   "///////USER classes trainer: " +
      //     user[0].scheduledClasses[0].trainer[0].name
      // );
      //const props = req.session.currentUser;
      const props = { user: user };

      res.render("Schedule", props);
    })
    .catch((error) =>
      console.log(
        "Something went wrong when finding a user id @ get schedule route",
        error
      )
    );
});

// GET > PROGRESS ROUTE
siteRouter.get("/progress", isLoggedIn, (req, res, next) => {
  const props = req.session.currentUser;
  res.render("Progress", props);
});

// GET > PROFILE ROUTE
siteRouter.get("/profile", isLoggedIn, (req, res, next) => {
  const id = req.session.currentUser._id;
  User.find({ _id: id })

    .then((user) => {
      const props = { user: user };
      res.render("Profile", props);
    })
    .catch((err) => {
      console.log("Something went wrong connecting to the DB");
    });
});

// GET > PROFILE FORM ROUTE
siteRouter.get("/profileform", isLoggedIn, (req, res, next) => {
  const id = req.session.currentUser._id;

  User.find({ _id: id })

    .then((user) => {
      const props = { user: user };
      res.render("ProfileForm", props);
    })
    .catch((err) => {
      console.log("Something went wrong connecting to the DB");
    });
});

// POST > PROFILE FORM EDIT ROUTE
siteRouter.post("/profileform", isLoggedIn, (req, res, next) => {
  const id = req.session.currentUser._id;
  const { name, lastName, email, city, country } = req.body;

  User.findByIdAndUpdate(
    id,
    { name, lastName, email, city, country },
    { new: true }
  )
    .then((updateUser) => {
      res.redirect("/private/profile");
    })
    .catch((err) => console.log(err));
});

module.exports = siteRouter;
