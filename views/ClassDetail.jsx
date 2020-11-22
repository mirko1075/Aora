const React = require("react");
const Layout = require("./Layout");
const { isBooked, getUserBySession } = require("../utils/utils");

function ClassDetail(props) {
  // console.log("!!!!!!!PROPS from ClassDetail:", props);
  const res = props.res;
  const req = props.req;
  const next = props.next;
  props = props.foundClass;
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

      {isBooked(getUserBySession(req, res, next)) ? (
        <a href={"/private/classDetail/add/" + props._id}>Book</a>
      ) : (
        <a href={"/private/classDetail/delete/" + props._id}>Unbook</a>
      )}
      <br></br>
      <a href="/private/calendar">Back to calendar</a>
    </Layout>
  );
}

module.exports = ClassDetail;
