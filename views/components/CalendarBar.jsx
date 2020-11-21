const React = require("react");

function CalendarBar(props) {
  return (
    <div className="calendarbar">
      {props.datesArr.map((dateObj, i) => {
        return (
          <div
            key="{i}"
            id={String(dateObj.dayOfMonth) + String(dateObj.monthOfYear)}
            className="datebox"
          >
            <div className="month">
              {String(dateObj.monthOfYearName).slice(0, 3)}
            </div>
            <div className="day">{String(dateObj.dayOfWeek).slice(0, 3)}</div>
            <div className="day">
              <button
                className="daysBtn"
                id={
                  "btn-" +
                  String(dateObj.dayOfMonth) +
                  String(dateObj.monthOfYear)
                }
              >
                {String(dateObj.dayOfMonth)}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

module.exports = CalendarBar;
