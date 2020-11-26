const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout title="Login">
      <div id="loginDiv" className="loginDiv">
        <form id="form" action="/auth/login" method="POST">
          <input
            type="text"
            id="email"
            className="inputAuthForms"
            name="email"
            placeholder="ENTER EMAIL"
          />
          <br />
          <input
            type="password"
            className="inputAuthForms"
            name="password"
            id="password"
            placeholder="ENTER PASSWORD"
            autocomplete="current-password"
          />
          <br />
          <a href="/auth/signup">OR SIGN UP INSTEAD</a>
          <button type="submit" id="signup-button">
            LOG IN
          </button>

          {props.errorMessage ? (
            <div className="error-message"> {props.errorMessage} </div>
          ) : null}
        </form>
      </div>
    </Layout>
  );
}

module.exports = Login;
