function isLoggedIn (req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/auth/login");
  }
}

function getUserBySession(req, res, next) {
  // console.log("req.session.currentUser:", req.session.currentUser);
  if (req.session.currentUser) {
    console.log(req.session);
  }
}
function addDate(days) {
  var date = new Date();

  // console.log("date before", date);
  date.setDate(date.getDate() + days);
  // console.log("date after", date);
  return date;
}

//EXPORTS
module.exports = isLoggedIn;
module.exports = getUserBySession;
module.exports = addDate;
