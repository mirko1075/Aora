var express = require("express");
var siteRouter = express.Router();

const { getUserBySession, isLoggedIn } = require("../utils/utils");

//LOADING
const Class = require("./../models/Class.model");
const User = require("./../models/User.model");

// ROUTES

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
      console.log(
        "Something went wrong when retrieving an access token using findById",
        error
      )
    );
});

// siteRouter.post("/classDetails/:idClass", (req, res, next) => {   // Not needed
//   res.render("Class");
// });

siteRouter.get("/classDetail/add/:idClass", (req, res, next) => {
  const idClass = req.params.idClass;
  const idUser = getUserBySession(req, res, next);
  // console.log("idUser:", idUser, "idClass:", idClass);
  User.findByIdAndUpdate(idUser, {
    $addToSet: { scheduledClasses: [idClass] },
  })
    .then((foundClass) => {
      const props = {
        foundClass: foundClass,
        req: req,
        res: res,
        next: next,
      };
      // console.log(
      //   "!!!!!!!!!!!!!!!!!!PROPS from Promise FindByIdAndUpdate:",
      //   props
      // );
      res.redirect("/private/ClassDetail/" + idClass);
    })
    .catch((error) =>
      console.log(
        "Something went wrong when retrieving an access token using findByIdAndUpdate",
        error
      )
    );
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
