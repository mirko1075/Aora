const React = require("react");
const Layout = require("./Layout");
const { isBooked, getUserBySession } = require("../utils/utils");

function ClassDetail(props) {
  // console.log("!!!!!!!PROPS from ClassDetail:", props);
  const isBookedRes = props.isBookedRes;
  let isOnlineRes = props.isOnlineRes;
  isOnlineRes = true;
  props = props.foundClass;

  console.log("isBooked from ClassDetail", isBooked);
  return (
    <Layout title="Calendar">
      <div className="classcontainer">
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
          isOnlineRes == true ? (
            <a href={"/private/liveClass/" + props._id}>Join</a>
          ) : (
            <a href={"/private/classDetail/delete/" + props._id}>Unbook</a>
          )
        ) : (
          <a href={"/private/classDetail/add/" + props._id}>Book</a>
        )}
        <br></br>
        <a href="/private/calendar">Back to calendar</a>
      </div>
    </Layout>
  );
}

module.exports = ClassDetail;
