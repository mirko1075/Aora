const React = require("react");
const Layout = require("./Layout");
const { addZeroBefore, humanizeDay, humanizeMonth } = require("../utils/utils");


function Schedule(props) {

  return (
    <Layout title="Schedule">
      <div className="header">
        <h1>My Schedule</h1>
      </div>
      <div className="scroll-container">
      <ul>

        {props.user[0].scheduledClasses.map((oneScheduledClass, i) => {
          return (
            !props.user[0].scheduledClasses
            ?
            <h1>You haven't book any classes yet.</h1>
            :
            (<li key={i}>
              {// print date only when new date
                i>0 && props.user[0].scheduledClasses[i].scheduled.getDay() === props.user[0].scheduledClasses[i-1].scheduled.getDay() 
                ?
                null 
                :
                <p id="schedule-date">{humanizeDay(oneScheduledClass.scheduled.getDay())}, {humanizeMonth(oneScheduledClass.scheduled.getMonth())} {addZeroBefore(oneScheduledClass.scheduled.getDate())}</p>
              }
              <a href={"/private/classDetail/" + oneScheduledClass._id} className="class-card">
                <div class="profile-pic">
                  <img src="/images/face1.png"></img>
                </div>
                <div>
                  <h3>{addZeroBefore(oneScheduledClass.scheduled.getHours())}:{addZeroBefore(oneScheduledClass.scheduled.getMinutes())} | {oneScheduledClass.classType}</h3>
                  <p className="small-info">{oneScheduledClass.duration} min. | {oneScheduledClass.trainer[0].name} {oneScheduledClass.trainer[0].lastName}</p>
                </div>
                <div class="flechita"><div>
                  <img src="/images/flechita.svg"></img>
                </div></div>
              </a>
            </li>)
          );
        })}
          {/*Allow scrolling of last item past the filter */}
          {<div className="empty-class-card"></div>}
          {<div className="empty-class-card"></div>}
          {<div className="empty-class-card"></div>}
          {<div className="empty-class-card"></div>}
          {<div className="empty-class-card"></div>}
          {<div className="empty-class-card"></div>}
      </ul>
      </div>
    </Layout>
  );
}
module.exports = Schedule;
