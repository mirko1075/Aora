const React = require("react");
const Layout = require("./Layout");

function LiveClass(props) {
  const data = props.foundClass;
  console.log("props", props);
  return (
    <Layout title="LiveClass">
      <h1>Go to LiveClass MF</h1>
      <iframe
        width="560"
        height="315"
        src={data.url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Layout>
  );
}

module.exports = LiveClass;
