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
            <li key={i}>
              <p>{humanizeDay(oneScheduledClass.scheduled.getDay())}, {humanizeMonth(oneScheduledClass.scheduled.getMonth())} {addZeroBefore(oneScheduledClass.scheduled.getDate())} </p>
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
