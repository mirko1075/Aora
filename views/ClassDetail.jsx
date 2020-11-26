const React = require("react");
const Layout = require("./Layout");
const { isBooked, getUserBySession } = require("../utils/utils");

function ClassDetail(props) {
  console.log("!!!!!!!PROPS from ClassDetail:", props);
  const isBookedRes = props.isBookedRes;
  let isOnLineRes = props.isOnLineRes;
  // isOnlineRes = true;
  props = props.foundClass;

  console.log("isBooked from ClassDetail", isBookedRes);
  console.log("isOnline from ClassDetail", isOnLineRes);
  return (
    <Layout title="Class detail">
      <div className="classcontainer">
        <div class="profile-hero">
          <img src="/images/face1.png"></img>
        </div>
        <h3 className="classname">{props.name}</h3>
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
        <br></br>
        <br></br>

        {isBookedRes === true ? (
          isOnLineRes == true ? (
            <div class="btn-container">
              <a href={"/private/liveClass/" + props._id}>Join</a>
            </div>
          ) : (
            <div class="btn-container">
              <a href={"/private/classDetail/delete/" + props._id}>Unbook</a>
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
