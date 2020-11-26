const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home Page">
      <svg
        id='Layer_1” data-name=“Layer 1" xmlns=“http://www.w3.org/2000/svg'
        viewBox="0 0 405 455"
      >
        <polygon points="0 362 0 0 362 0 0 362" />
        <polygon points="405 93 405 455 43 455 405 93" />
      </svg>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 405 455"
      >
        <polygon points="0 362 0 0 362 0 0 362" />
        <polygon points="405 93 405 455 43 455 405 93" />
      </svg>
    </Layout>
  );
}

module.exports = Home;
