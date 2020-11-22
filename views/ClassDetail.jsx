const React = require("react");
const Layout = require("./Layout");
const getUserBySession = require("../utils/isBooked");
const isBooked = require("../utils/isBooked");

function ClassDetail(props) {
  props = props.foundClass;
  console.log("props", props);
  return (
    <Layout>
      <h3>{props.name}</h3>
      <p>Trainer: {props.trainer[0].name + " " + props.trainer[0].lastName}</p>
      <p>{props.description}</p>
      <p>Duration {props.duration} mins</p>
      <p>Dificulty: {props.difficulty}</p>
      <h4>Equipment:</h4>
      {props.equipment.map((equipObj) => {
        return <p>{equipObj}</p>;
      })}
      <br></br>
      <br></br>

      {isBooked(getUserBySession(props.req, props.res, props.next)) ? (
        <a href={"/private/classDetail/add/" + props._id}>Book</a>
      ) : null}
      <br></br>
      <a href="/private/calendar">Back to calendar</a>
    </Layout>
  );
}

module.exports = ClassDetail;
