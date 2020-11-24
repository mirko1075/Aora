const React = require("react");
const Layout = require("./Layout");
const { unifyArray } = require("../utils/utils");

// Class for Calendar creation
<<<<<<< HEAD
const CalendarClass = require("../utils/CalendarClass");
=======
const CalendarClass = require("../modules/CalendarClass");
>>>>>>> bcb00fdfd236e75e61206b960f554632c0c20336
const Filter = require("./components/Filter");
const ClassCalendar = require("./components/Classcalendar");
const CalendarBar = require("./components/CalendarBar");
const GenerateScriptDivFilter = require("./components/GenerateScriptDivFilter");
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
    <Layout title="Home Page">
      <h1>Home Page</h1>
      <CalendarBar datesArr={datesArr}></CalendarBar>
      <ClassCalendar classesArr={classesArr}></ClassCalendar>
      <br></br>
      <br></br>
      <Filter classesArr={classesArr} unifyArray={unifyArray}></Filter>
      <br></br>
      <br></br>
      <GenerateScriptDivFilter
        classesArr={classesArr}
      ></GenerateScriptDivFilter>
    </Layout>
  );
}

module.exports = Calendar;
