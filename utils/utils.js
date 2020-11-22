function addDate(days) {
  var date = new Date();

  console.log("date before", date);
  date.setDate(date.getDate() + days);
  console.log("date after", date);
  return date;
}

//Function to check if classed is booked

function isBooked(classId, userId) {
  const User = require("./../models/User.model");
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
        return true;
      } else {
        console.log("Not found");
        return false;
      }
    })
    .catch((error) =>
      console.log(
        "Something went wrong when retrieving an access token in Isbooked",
        error
      )
    );
  return true;
}

function getUserBySession(req, res, next) {
  console.log("req.session.currentUser._id:", req.session.currentUser._id);
  if (req.session.currentUser) {
    return req.session.currentUser._id;
  } else {
    return null;
  }
}

function isLoggedIn(req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/auth/login");
  }
}

module.exports = { addDate, getUserBySession, isBooked, isLoggedIn };
