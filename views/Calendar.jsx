const React = require("react");
const Layout = require("./Layout");
const { unifyArray } = require("../utils/utils");

// Class for Calendar creation
const CalendarClass = require("../modules/CalendarClass");
const Filter = require("./components/Filter");
const ClassCalendar = require("./components/Classcalendar");
const CalendarBar = require("./components/CalendarBar");
// console.log("isLoggedIn", isLoggedIn);
//CREATION OF CALENDAR BAR
const calendar = new CalendarClass();

// Creation of the dates Array to pass to the ClassCalendar component
const datesArr = calendar.createDateArr();

//////////////// END OF BAR VALUES CREATION, THEY WILL PASSED AS ARRAY IN THE PROPS

function Calendar(props) {
  const classesArr = props;
  console.log("Props from calendar", props);
  return (
    <Layout title="Calendar">
      <h1>Home Page</h1>
      <br></br>
      <button id="filterBtn">Filter</button>
      <br></br>
      <br></br>
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
