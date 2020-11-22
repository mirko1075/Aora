function addDate(days) {
  var date = new Date();

  console.log("date before", date);
  date.setDate(date.getDate() + days);
  console.log("date after", date);
  return date;
}

module.exports = addDate;
