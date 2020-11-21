var express = require("express");
var siteRouter = express.Router();

const isLoggedIn = require("./../utils/isLoggedIn");
//const getUserBySession = require("./../utils/isLoggedIn");
// ROUTES

//LOADING
const Class = require("./../models/Class.model");

// GET > SIGN UP ROUTE
siteRouter.get("/calendar", (req, res, next) => {
  res.render("Calendar");
});

siteRouter.get("/my-schedule", (req, res, next) => {
  res.render("Calendar");
});
siteRouter.get("/class-details/:idClass", (req, res, next) => {
  res.render("Class");
});
siteRouter.post("/class-details/:idClass", (req, res, next) => {
  res.render("Class");
});
siteRouter.get("/class-schedule/add/:idClass", (req, res, next) => {
  res.render("Class");
});
siteRouter.get(
  "/class-schedule/delete/:idClass",

  (req, res, next) => {
    res.render("Class");
  }
);
siteRouter.get("/profile", (req, res, next) => {
  res.render("Profile");
});
siteRouter.post("/edit-user/:userId", (req, res, next) => {
  res.render("Profile");
});
siteRouter.get("/live-class/:classId", (req, res, next) => {
  res.render("Liveclass");
});
siteRouter.get("/progress/:userId", (req, res, next) => {
  res.render("Progress");
});
siteRouter.get("/home", (req, res, next) => {
  //   getUserBySession(req, res, next);
  Class.find()
    .populate("trainer")
    .then((foundClasses) => {
      const props = { foundClasses: foundClasses };
      res.render("Calendar", props);
    })
    .catch((error) =>
      console.log("Something went wrong when retrieving an access token", error)
    );
});
module.exports = siteRouter;
