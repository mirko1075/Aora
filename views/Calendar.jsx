const React = require("react");
const Layout = require("./Layout");
const ClassCalendar = require("./components/Class-calendar");
const CalendarBar = require("./components/Calendar");

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
      <CalendarBar></CalendarBar>
      <ClassCalendar></ClassCalendar>
    </Layout>
  );
}

module.exports = Calendar;
