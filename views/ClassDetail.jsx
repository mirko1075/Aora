const React = require("react");
const Layout = require("./Layout");
const {
  addZeroBefore,
  humanizeDay,
  humanizeDayMini,
  humanizeMonth,
  isBooked,
  getUserBySession,
} = require("../utils/utils");

function ClassDetail(props) {
  const isBookedRes = props.isBookedRes;
  let isOnLineRes = props.isOnLineRes;
  props = props.foundClass;
  

  console.log("isBooked from ClassDetail", isBookedRes);
  console.log("isOnline from ClassDetail", isOnLineRes);
  return (
    <Layout title="Class detail">
      <div className="classcontainer">
        <div class="profile-hero">
          <img src="/images/face1.png"></img>
        </div>
        <h2 class="pink-h2">
          {humanizeDayMini(props.scheduled.getDay())}{" "}
          {addZeroBefore(props.scheduled.getDate())}
          <br />
          {addZeroBefore(props.scheduled.getHours())}:
          {addZeroBefore(props.scheduled.getMinutes())}h
        </h2>
        <img id="close-button" class="close-button" src="/images/clsx.svg"></img>
        <div class="class-content">
          <h2 className="classname">{props.name}</h2>
          <p>
            <b>Trainer:</b>{" "}
            {props.trainer[0].name + " " + props.trainer[0].lastName}
          </p>
          <p>
            <b>Description: </b>
            {props.description}
          </p>
          <br></br>
          <br></br>
          <p>
            <b>Duration:</b> {props.duration} mins
          </p>
          <p>
            <b>Dificulty:</b> {props.difficulty}
          </p>
          <p>
            <b>Equipment:</b>
            {props.equipment.map((equipObj, i) => {
              return <span id={i}>{equipObj},</span>;
            })}
          </p>
        </div>

        {isBookedRes === true ? (
          isOnLineRes == true ? (
            <div class="btn-container">
              <a class="ahref-btn-on" href={"/private/liveClass/" + props._id}>
                Join
              </a>
            </div>
          ) : (
            <div class="btn-container">
              <a
                class="ahref-btn-off"
                href={"/private/classDetail/delete/" + props._id}
              >
                Unbook
              </a>
            </div>
          )
        ) : (
          <div class="btn-container">
            <a
              class="ahref-btn-on"
              href={"/private/classDetail/add/" + props._id}
            >
              Book
            </a>
          </div>
        )}
        <br></br>
        <a href="/private/calendar">Back to calendar</a>
      </div>
    </Layout>
  );
}

module.exports = ClassDetail;
