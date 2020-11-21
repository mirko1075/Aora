const React = require("react");

function CalendarBar(props) {
  return (
    <div className="calendarbar">
      {props.datesArr.map((dateObj, i) => {
        return (
          <div key="{i}" className="datebox">
            <div className="month">
              {String(dateObj.monthOfYear).slice(0, 3)}
            </div>
            <div className="day">
              <a
                href="#"
                onClick="changeDay({String(dateObj.dayOfMonth)+String(dateObj.monthOfYear)})"
              >
                {String(dateObj.dayOfWeek).slice(0, 3)}
              </a>
            </div>
            <div className="day">{String(dateObj.dayOfMonth)}</div>
          </div>
        );
      })}
    </div>
  );
}

module.exports = CalendarBar;
