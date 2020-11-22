function getUserBySession(req, res, next) {
  console.log("req.session.currentUser:", req.session);
  if (req.session.currentUser) {
    return req.session.currentUser;
  } else {
    return null;
  }
}
module.exports = getUserBySession;
