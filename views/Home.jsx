const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home Page">
      <div id="home">
        <img src="/images/logo.svg" className="logo" />
      </div>
    </Layout>
  );
}

module.exports = Home;
