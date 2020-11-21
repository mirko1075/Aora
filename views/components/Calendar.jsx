const React = require("react");
const addDate = require("../../utils/utils");
function CalendarBar(props) {
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

  props = { datesArr };
  return (
    <div className="calendarbar">
      {props.datesArr.map((dateObj, i) => {
        return (
          <div key="{i}" className="datebox">
            <div className="day">{String(dateObj.dayOfWeek).slice(0, 3)}</div>
            <div className="day">{String(dateObj.dayOfMonth)}</div>
            <div className="month">
              {String(dateObj.monthOfYear).slice(0, 3)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

module.exports = CalendarBar;
