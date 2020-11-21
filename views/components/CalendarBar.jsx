const React = require("react");

function CalendarBar(props) {
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
