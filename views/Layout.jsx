const React = require("react");
const Footer = require("./components/Footer");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "My App"} </title>
        <link rel="stylesheet" href="/stylesheets/cssreset.css" />
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        {props.children}
        <Footer></Footer>

        <script type="text/javascript" src="/javascripts/script.js"></script>
      </body>
    </html>
  );
}
/// EXPORT
module.exports = Layout;
