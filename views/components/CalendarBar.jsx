const React = require("react");
const { addZeroBefore } = require("../../utils/utils");

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
            {/* <div className="day"> */}
            <button
              className="dayVoid"
              id={
                "btn-" +
                String(dateObj.dayOfMonth) +
                String(dateObj.monthOfYear)
              }
            >
              {/* <div className="day">{String(dateObj.dayOfWeek).slice(0, 3)}</div> */}
              {String(dateObj.dayOfWeek).slice(0, 3)}
              <br />
              {String(addZeroBefore(dateObj.dayOfMonth))}
            </button>
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}

module.exports = CalendarBar;
