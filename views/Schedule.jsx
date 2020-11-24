const React = require("react");
const Layout = require("./Layout");




function Schedule(props) {

  return (
    <Layout title="Schedule">
      <h1>My Schedule</h1>
      <h2>Hello {props.email} </h2>
    </Layout>
  );
}

module.exports = Schedule;