const React = require("react");
const Layout = require("./Layout");

function LiveClass(props) {
  return (
    <Layout title="LiveClass">
      <h1>Go to LiveClass MF</h1>
      <iframe
        width="560"
        height="315"
        src={props.url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Layout>
  );
}

module.exports = LiveClass;
