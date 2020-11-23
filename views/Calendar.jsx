const React = require("react");
const Layout = require("./Layout");
const { isLoggedIn, addDate, unifyArray } = require("../utils/utils");

// Class for Calendar creation
const CalendarClass = require("../utils/CalendarClass");
const Filter = require("./components/Filter");
const ClassCalendar = require("./components/Classcalendar");
const CalendarBar = require("./components/CalendarBar");
console.log("isLoggedIn", isLoggedIn);
//CREATION OF CALENDAR BAR
const calendar = new CalendarClass();

// Creation of the dates Array to pass to the ClassCalendar component
const datesArr = calendar.createDateArr();

//////////////// END OF BAR VALUES CREATION, THEY WILL PASSED AS ARRAY IN THE PROPS

function Calendar(props) {
  const classesArr = props;
  return (
    <Layout title="Home Page">
      <h1>Home Page</h1>
      <CalendarBar datesArr={datesArr}></CalendarBar>
      <ClassCalendar classesArr={classesArr}></ClassCalendar>
      <br></br>
      <br></br>
      <Filter classesArr={classesArr} unifyArray={unifyArray}></Filter>
      <br></br>
      <br></br>
    </Layout>
  );
}

module.exports = Calendar;
