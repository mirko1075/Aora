var express = require("express");
var siteRouter = express.Router();

const { getUserBySession, isLoggedIn } = require("../utils/utils");

//LOADING
const Class = require("./../models/Class.model");
const User = require("./../models/User.model");

// ROUTES

// GET > CALENDAR HOME

siteRouter.get("/", (req, res, next) => {
  res.redirect("/private/Calendar");
});
siteRouter.get("/home", (req, res, next) => {
  res.redirect("/private/Calendar");
});

siteRouter.get("/calendar", (req, res, next) => {
  const { classType, trainer, duration, difficulty, equipment } = req.query;
  let queryObj = {};
  console.log("Params:", classType, trainer, duration, difficulty, equipment);
  classType ? (queryObj.classType = classType) : null;
  trainer ? (queryObj.trainer = trainer) : null;
  duration ? (queryObj.duration = duration) : null;
  difficulty ? (queryObj.difficulty = difficulty) : null;
  equipment ? (queryObj.equipment = equipment) : null;

  Class.find(queryObj)
    .sort("scheduled")
    .populate("trainer")
    .then((foundClasses) => {
      console.log("foundClasses", foundClasses);
      const props = { foundClasses };
      res.render("Calendar", props);
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
siteRouter.get("/classDetail/:idClass", (req, res, next) => {
  const idCLass = req.params.idClass;
  // console.log("IdClass: ", idCLass);
  Class.findById(idCLass)
    .populate("trainer")
    .then((foundClass) => {
      const props = { foundClass: foundClass, req: req, res: res, next: next };
      // console.log("Props:", props);
      res.render("ClassDetail", props);
    })
    .catch((error) =>
      console.log(
        "Something went wrong when retrieving an access token using findById",
        error
      )
    );
});

// NOT NEEEDED
// siteRouter.post("/classDetails/:idClass", (req, res, next) => {   // Not needed
//   res.render("Class");
// });

// ROUTE FOR CLASS BOOK
siteRouter.get("/classDetail/add/:idClass", (req, res, next) => {
  const idClass = req.params.idClass;
  const idUser = getUserBySession(req, res, next);
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

// ROUTE FOR CLASS  UNBOOK
siteRouter.get("/classDetail/delete/:idClass", (req, res, next) => {
  const idClass = req.params.idClass;
  const idUser = getUserBySession(req, res, next);
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

// GET LIVE-CLASS ROUTE
siteRouter.get("/live-class/:classId", (req, res, next) => {
  res.render("Liveclass");
});

// GET SCHEDULE ROUTE
siteRouter.get("/schedule", (req, res, next) => {
  const props = req.session.currentUser;
  res.render("Schedule", props);
});
// GET PROGRESS ROUTE
siteRouter.get("/progress", (req, res, next) => {
  const props = req.session.currentUser;
  res.render("Progress", props);
});

// GET PROFILE ROUTE I (which one should stay?)
siteRouter.get("/progress/:userId", (req, res, next) => {
  res.render("Progress");
});
// GET PROFILE ROUTE II (which one should stay?)
siteRouter.get("/profile", (req, res, next) => {
  res.render("Profile");
});
// POST PROFILE EDIT ROUTE
siteRouter.post("/edit-user/:userId", (req, res, next) => {
  res.render("Profile");
});

module.exports = siteRouter;
