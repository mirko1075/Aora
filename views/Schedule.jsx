const React = require("react");
const Layout = require("./Layout");
const { addZeroBefore, humanizeDay, humanizeMonth } = require("../utils/utils");


function Schedule(props) {

  return (
    <Layout title="Schedule">
      <div class="header">
        <h1>My Schedule</h1>
      </div>
      {/* <h2>Data received for user: {props.user[0].email} </h2> */}
      <div class="scroll-container">
      <ul>

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
              <div class="class-card">
                <div><img src="/images/face1.png"></img></div>
                <h2>{addZeroBefore(oneScheduledClass.scheduled.getHours())}:{addZeroBefore(oneScheduledClass.scheduled.getMinutes())} | {oneScheduledClass.classType}</h2>
                <p>{oneScheduledClass.duration} | {oneScheduledClass.trainer[0].name}</p>
              </div>
            </li>
          );
        })} 
      </ul>
      </div>
    </Layout>
  );
}

module.exports = Schedule;
