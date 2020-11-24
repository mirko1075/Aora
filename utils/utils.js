//Function to check if classed is booked
function isBooked(classId, userId) {
  const User = require("./../models/User.model");

  const pr = User.findById(userId)
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
  return pr;
}

// Function gets userId from Session
function getUserBySession(req) {
  console.log("UserId:", req.session.currentUser._id);
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
function unifyArray(array) {
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const uniqueArray = array.filter(unique);
  return uniqueArray;
}
function addZeroBefore(n) {
  return (n < 10 ? '0' : '') + n;
}
module.exports = { getUserBySession, isBooked, isLoggedIn, unifyArray, addZeroBefore };
