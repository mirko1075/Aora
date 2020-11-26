const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout title="Login">
      <div id="login">
        <form id="form" action="/auth/login" method="POST">
          <div id="loginDiv" className="loginDiv">
            <input
              type="text"
              id="email"
              className="inputAuthForms"
              name="email"
              placeholder="Enter email"
            />
            <br></br>
            <input
              type="password"
              className="inputAuthForms"
              name="password"
              id="password"
              placeholder="Enter password"
              autocomplete="current-password"
            />
          </div>
          <div className="loginBtnsDiv">
            <div className="loginBtnsDiv-1">
              <a className="ahref-login" href="/auth/signup">
                OR SIGN UP INSTEAD
              </a>
            </div>
            <div className="loginBtnsDiv-1">
              <button className="loginBtn" type="submit" id="signup-button">
                LOG IN
              </button>
            </div>
          </div>

          {props.errorMessage ? (
            <div className="error-message"> {props.errorMessage} </div>
          ) : null}
        </form>
      </div>
    </Layout>
  );
}

module.exports = Login;
