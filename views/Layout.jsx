const React = require("react");
const Footer = require("./components/Footer");

function Layout(props) {
  console.log("props from Calendar", props);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title> {props.title ? props.title : "My App"} </title>
        <link rel="stylesheet" href="/stylesheets/cssreset.css" />
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        {props.children}
        {props.title != "Login" && props.title != "Signup" ? (
          <Footer title={props.title}></Footer>
        ) : null}

        {props.title === "Calendar" ? (
          <script type="text/javascript" src="/javascripts/script.js"></script>
        ) : null}
        {props.title === "Signup" ? (
          <script type="text/javascript" src="/javascripts/signup.js"></script>
        ) : null}
        <script type="text/javascript" src="/javascripts/utils.js"></script>
      </body>
    </html>
  );
}
/// EXPORT
module.exports = Layout;
