const React = require("react");
const Layout = require("./Layout");
const { addZeroBefore, humanizeDay, humanizeMonth } = require("../utils/utils");


function Schedule(props) {

  return (
    <Layout title="Schedule">
      <h1>My Schedule</h1>
      {/* <h2>Data received for user: {props.user[0].email} </h2> */}
      <ul>
        
        <br />

        {props.user[0].scheduledClasses.map((oneScheduledClass, i) => {
          return (
            !props.user[0].scheduledClasses
            ?
            <h1>You haven't book any classes yet.</h1>
            :
            <li key={i}>
              {// print date only when new date
                i>0 && props.user[0].scheduledClasses[i].scheduled.getDay() === props.user[0].scheduledClasses[i-1].scheduled.getDay() 
                ?
                null 
                :
                <p id="schedule-date">{humanizeDay(oneScheduledClass.scheduled.getDay())}, {humanizeMonth(oneScheduledClass.scheduled.getMonth())} {addZeroBefore(oneScheduledClass.scheduled.getDate())}</p>
              }
              <h2>{addZeroBefore(oneScheduledClass.scheduled.getHours())}:{addZeroBefore(oneScheduledClass.scheduled.getMinutes())} | {oneScheduledClass.classType}</h2>
              <p>{oneScheduledClass.duration} | {oneScheduledClass.trainer[0].name}</p>
            </li>
          );
        })} 
      </ul>
    </Layout>
  );
}

module.exports = Schedule;
