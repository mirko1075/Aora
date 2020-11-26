//Function to check if classed is booked
// function isBooked(classId, userId) {
//   const User = require("./../models/User.model");

//   const pr = User.findById(userId)
//     .then((foundUser) => {
//       console.log(
//         "ClassId:",
//         classId,
//         "foundUser.scheduledClasses",
//         foundUser.scheduledClasses
//       );
//       if (foundUser.scheduledClasses.indexOf(classId) != -1) {
//         console.log("Found");
//         return true;
//       } else {
//         console.log("Not found");
//         return false;
//       }
//     })
//     .catch((error) =>
//       console.log(
//         "Something went wrong when retrieving an access token in Isbooked",
//         error
//       )
//     );
//   return pr;
// }

// Function gets userId from Session
function getUserBySession(req) {
  console.log("UserId:", req.session.currentUser._id);
  if (req.session.currentUser) {
    return req.session.currentUser._id;
  } else {
    return null;
  }
}

function isOnline(classesArr, idClass) {
  // console.log("Params", classesArr, idClass);
  const date = new Date();

  for (let i = 0; i < classesArr.length; i++) {
    console.log(classesArr[i]._id, idClass);
    console.log(classesArr[i].scheduled, date);
    if (classesArr[i]._id == idClass) {
      if (classesArr[i].scheduled < date) {
        console.log("Found class online");
        return true;
      }
    }
  }
  return false;
}

function isBooked(classesArr, idClass) {
  // console.log("Params", classesArr, idClass);
  for (let i = 0; i < classesArr.length; i++) {
    if (classesArr[i]._id == idClass) {
      console.log("Found class booked");
      return true;
    }
  }
  return false;
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
  return (n < 10 ? "0" : "") + n;
}
function humanizeDay(day) {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}
function humanizeDayMini (day) {
  switch (day) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
  }
}
function humanizeMonth(month) {
  switch (month) {
    case 0:
      return "Jan.";
    case 1:
      return "Feb.";
    case 2:
      return "Mar.";
    case 3:
      return "Apr.";
    case 4:
      return "May.";
    case 5:
      return "Jun.";
    case 6:
      return "Jul.";
    case 7:
      return "Ago.";
    case 8:
      return "Sep.";
    case 9:
      return "Oct.";
    case 10:
      return "Nov.";
    case 11:
      return "Dec.";
  }
}
module.exports = {
  getUserBySession,
  isBooked,
  isOnline,
  isLoggedIn,
  unifyArray,
  addZeroBefore,
  humanizeDay,
  humanizeDayMini,
  humanizeMonth,
};
