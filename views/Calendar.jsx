const React = require("react");
const Layout = require("./Layout");
const { isLoggedIn, addDate } = require("../utils/utils");
const ClassCalendar = require("./components/Classcalendar");
const CalendarBar = require("./components/CalendarBar");
console.log("isLoggedIn", isLoggedIn);
//CREATION OF CALENDAR BAR

let datesArr = [];
let dateToPrint = null;
let dayOfMonth = null;
let dayOfWeek = null;
let monthOfYear = null;
let monthOfYearName = null;
const monthNames = [
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
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (let i = 0; i < 7; i++) {
  dateToPrint = addDate(i);
  console.log("dateToPrint", dateToPrint);
  dayOfMonth = dateToPrint.getDate();
  dayOfWeek = dayNames[dateToPrint.getDay()];
  monthOfYearName = monthNames[dateToPrint.getMonth()];
  monthOfYear = dateToPrint.getMonth();
  datesArr.push({ dayOfWeek, dayOfMonth, monthOfYearName, monthOfYear });
}

//////////////// END OF BAR VALUES CREATION, THEY WILL PASSED AS ARRAY IN THE PROPS

function Calendar(props) {
  const classesArr = props;
  return (
    <Layout title="Home Page">
      <h1>Home Page</h1>
      <CalendarBar datesArr={datesArr}></CalendarBar>
      <ClassCalendar classesArr={classesArr}></ClassCalendar>
    </Layout>
  );
}

module.exports = Calendar;
