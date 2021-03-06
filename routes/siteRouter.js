var express = require("express");
var siteRouter = express.Router();

const parser = require("./../config/cloudinary");

const bcrypt = require("bcrypt");
const zxcvbn = require("zxcvbn");
const {
  getUserBySession,
  isLoggedIn,
  isBooked,
  isOnline,
} = require("../utils/utils");
const saltRound = 10;

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
        }
        isBookedRes = true;
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
          //console.log("IsBooked:", props.isBooked);
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
      const props = { user };
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
  const id = req.session.currentUser;
  User.findById(id)
    .populate([
      {
        path: "scheduledClasses",
        populate: {
          path: "trainer",
        },
      },
    ])

    .then((userFound) => {
      const props = { userFound };
      res.render("Progress", props);
    })
    .catch((error) =>
      console.log(
        "Something went wrong when finding a user id @ get schedule route",
        error
      )
    );
});

// GET > PROFILE ROUTE
siteRouter.get("/profile", isLoggedIn, (req, res, next) => {
  const id = req.session.currentUser._id;
  User.findById(id)

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
  User.findById({ _id: id })

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
  let {
    name,
    lastName,
    email,
    city,
    country,
    gender,
    userHeight,
    userWeight,
    password,
  } = req.body;

  // if (!birthDate) {
  //   birthDate = req.session.currentUser.birthDate;
  // }

  //FIND USER IN DATABASE AND CHECK IF PASSWORD MATCHES
  User.findById(id)
    .then((user) => {
      const props = { user: user };
      //CHECK IF PASSWORD USED MATCHES THE ONE FOR THE USER SAVED IN THE DATABASE
      // const passwordCorrect = bcrypt.compareSync(password, user.password);

      //MAKE CHANGES TO THE USER DB & SEND TO PROFILE OR SHOW ERROR INSTEAD
      // if (passwordCorrect) {
      // User.findByIdAndUpdate(id,{name, lastName, email, city, country, birthDate: req.body.birthDate ? req.body.birthDate : req.session.currentUser.birthDate , gender, height, weight, password},{new:true})
      User.findByIdAndUpdate(
        id,
        {
          name,
          lastName,
          city,
          country,
          gender,
          userHeight,
          userWeight,
        },
        { new: true }
      )
        .then((updateUser) => {
          res.redirect("/private/profile");
        })
        .catch((err) => console.log(err));
      // } else {
      //   res.render("ProfileForm", { errorMessage: "Incorrect password", user });
      // }
    })
    .catch((err) => {
      console.log(err);
      // const props = { errorMessage: "Error finding user in database" + err };
      // res.render("ProfileForm", props);
    });
});

// GET > PASSWORD FORM ROUTE
siteRouter.get("/passwordform", isLoggedIn, (req, res, next) => {
  const id = req.session.currentUser._id;
  User.findById({ _id: id })

    .then((user) => {
      const props = { user: user };
      res.render("PasswordForm", props);
    })
    .catch((err) => {
      console.log("Something went wrong connecting to the DB");
    });
});

// POST > PASSWORD FORM EDIT ROUTE
siteRouter.post("/passwordform", isLoggedIn, (req, res, next) => {
  const id = req.session.currentUser._id;
  let { password, newPassword, repeat } = req.body;
  // console.log("req.body", req.body);

  // NEW PASSWORD STRENGTH
  // if (zxcvbn(password).score < 3) {    // TO UNCOMMENT, COMMENTED TO KEEP WORKING WITH CLASSES
  // console.log("Score: ", zxcvbn(password));

  //FIND USER IN DATABASE AND CHECK IF PASSWORD MATCHES
  User.findById(id)
    .then((user) => {
      if (zxcvbn(newPassword).score > 0) {
        const suggestions = zxcvbn(newPassword).feedback.suggestions;
        const props = { errorMessage: suggestions[0], user: user };
        console.log("Rendering after encrypt");
        res.render("ProfileForm", props);
        return;
      }

      // REQUIRE DATA INPUT ON ALL FIELDS
      if (password === "" || newPassword === "" || repeat === "") {
        const props = { errorMessage: "Please complete form", user: user };
        console.log("Rendering after password check");
        res.render("ProfileForm", props);
        return;
      }

      // ENTER PASSWORD AND REPEAT PASSWORD FIELDS MATCH VALIDATION
      if (newPassword !== repeat) {
        const props = {
          errorMessage: `New passwords don't match!`,
          user: user,
        };
        console.log("Rendering after repeat pwd check");
        res.render("ProfileForm", props);
        return;
      }
      const props = {};

      //CHECK IF PASSWORD USED MATCHES THE ONE FOR THE USER SAVED IN THE DATABASE
      const passwordCorrect = bcrypt.compareSync(password, user.password);
      const salt = bcrypt.genSaltSync(saltRound);
      const hashedPassword = bcrypt.hashSync(newPassword, salt);

      //MAKE CHANGES TU THE USER DB & SEND TO PROFILE OR SHOW ERROR INSTEAD
      if (passwordCorrect) {
        if (newPassword) {
          User.findByIdAndUpdate(id, { password: hashedPassword })
            .then((user) => {
              const props = { user: user };
              console.log("Rendering after updating user");
              res.render("profileform", props);
            })
            .catch((err) => console.log(err));
        } else {
          const props = {
            errorMessage: `You need to provide the new password`,
            user: user,
          };
          console.log("Rendering after not providing new pwd");
          res.render("ProfileForm", props);
        }
      } else {
        const props = {
          errorMessage: `Incorrect old password`,
          user: user,
        };
        console.log("Rendering after old pwd incorrect");
        res.render("ProfileForm", props);
      }
    })
    .catch((err) => {
      console.log(err);
      const props = {
        errorMessage: "Error creating conecting to the database" + err,
      };
      console.log("Rendering after error connecting to DB");
      res.render("ProfileForm", props);
    });
});

module.exports = siteRouter;
