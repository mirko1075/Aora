const React = require("react");
const Layout = require("./Layout");
const getprops = require("../utils/utils");

function ClassDetail(props) {
  console.log("props", props);
  return (
    <Layout>
      <h1>{props.name}</h1>
      <h1>{props.description}</h1>
      <h1>{props.duration}</h1>
      <h1>{props.dificulty}</h1>
      <br></br>
      <br></br>
      <br></br>
      <a href="/private/calendar">Back to calendar</a>
    </Layout>
  );
}

module.exports = ClassDetail;
