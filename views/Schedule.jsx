const React = require("react");
const Layout = require("./Layout");
const { addZeroBefore } = require("../utils/utils");


function Schedule(props) {
const hours = addZeroBefore(props.user[0].scheduledClasses[0].scheduled.getHours());
const minutes = addZeroBefore(props.user[0].scheduledClasses[0].scheduled.getMinutes())
  return (
    <Layout title="Schedule">
      <h1>My Schedule</h1>
      <h2>Hello {props.user[0].email} </h2>
      <br />
      <h2>Time {hours}:{minutes} </h2>
      
      <br />
      <h2>Type {props.user[0].scheduledClasses[0].classType} </h2>
      <br />
      <h2>Duration {props.user[0].scheduledClasses[0].duration} </h2>
      <br />
      <h2>Trainer {props.user[0].scheduledClasses[0].trainer[0].name} </h2>
      <br />


      <ul>
        <span>TUESDAY, NOV 27</span>
        <br />
        <span>{}</span>

        {/* {props.scheduledClasses.map((el, i) => {
          return (
            <li key={i}>
              {el}
            </li>
          );
        })} */}
      </ul>
    </Layout>
  );
}

module.exports = Schedule;
