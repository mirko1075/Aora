//Function to check if classed is booked
function isBooked(classId, userId) {
  const User = require("./../models/User.model");
  let result = false;
  User.findById(userId)
    .then((foundUser) => {
      console.log(
        "ClassId:",
        classId,
        "foundUser.scheduledClasses",
        foundUser.scheduledClasses
      );
      if (foundUser.scheduledClasses.indexOf(classId) != -1) {
        console.log("Found");
        result = true;
      } else {
        console.log("Not found");
        result = false;
      }
      return result;
    })
    .catch((error) =>
      console.log(
        "Something went wrong when retrieving an access token in Isbooked",
        error
      )
    );
  return true;
}

// Function gets userId from Session
function getUserBySession(req, res, next) {
  if (req.session.currentUser) {
    return req.session.currentUser._id;
  } else {
    return null;
  }
}

// Function middleware for blocking access to unauthorized
function isLoggedIn(req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/auth/login");
  }
}

module.exports = { getUserBySession, isBooked, isLoggedIn };
