const React = require("react");
const Layout = require("./Layout");
const addDate = require("../utils/utils");
const ClassCalendar = require("./components/Class-calendar");
const CalendarBar = require("./components/Calendar");

let datesArr = [];
let dateToPrint = null;
let dayOfMonth = null;
let dayOfWeek = null;
let monthOfYear = null;
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
  dayOfMonth = dateToPrint.getDate();
  dayOfWeek = dayNames[dateToPrint.getDay()];
  monthOfYear = monthNames[dateToPrint.getMonth()];
  datesArr.push({ dayOfWeek, dayOfMonth, monthOfYear });
}

// Class and calendar Receive parameters:
// ID Class -- idClass
// ClassName -- className
// Image URL -- imageUrl
// Scheduled time -- scheduled
// Trainer Name -- trainer
// Duration  --  duration
// ClassType  --  classType
// Url  --  url
// Equipment  -- equipment
function Calendar() {
  return (
    <Layout title="Home Page">
      <h1>Home Page</h1>
      <CalendarBar datesArr={datesArr}></CalendarBar>
      <ClassCalendar></ClassCalendar>
    </Layout>
  );
}

module.exports = Calendar;
