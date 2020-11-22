var express = require("express");
var siteRouter = express.Router();

const isLoggedIn = require("./../utils/utils");
//const getUserBySession = require("./../utils/utils");
// ROUTES

//LOADING
const Class = require("./../models/Class.model");

// GET > SIGN UP ROUTE
siteRouter.get("/calendar", (req, res, next) => {
  res.redirect("/private/Home");
});

siteRouter.get("/my-schedule", (req, res, next) => {
  res.render("Calendar");
});

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
      console.log("Something went wrong when retrieving an access token", error)
    );
});

// siteRouter.post("/classDetails/:idClass", (req, res, next) => {   // Not needed
//   res.render("Class");
// });

siteRouter.get("/classschedule/add/:idClass", (req, res, next) => {
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
    .sort("scheduled")
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
