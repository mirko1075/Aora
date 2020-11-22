class CalendarClass {
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  createDateArr() {
    let datesArr = [];
    let dateToPrint = null;
    let dayOfMonth = null;
    let dayOfWeek = null;
    let monthOfYear = null;
    let monthOfYearName = null;

    for (let i = 0; i < 7; i++) {
      dateToPrint = this.addDate(i);
      console.log("dateToPrint", dateToPrint);
      dayOfMonth = dateToPrint.getDate();
      dayOfWeek = this.dayNames[dateToPrint.getDay()];
      monthOfYearName = this.monthNames[dateToPrint.getMonth()];
      monthOfYear = dateToPrint.getMonth();
      datesArr.push({ dayOfWeek, dayOfMonth, monthOfYearName, monthOfYear });
    }
    return datesArr;
  }
  addDate(days) {
    var date = new Date();

    console.log("date before", date);
    date.setDate(date.getDate() + days);
    console.log("date after", date);
    return date;
  }
}

module.exports = CalendarClass;
