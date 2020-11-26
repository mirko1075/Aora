const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  return (
    <Layout title="Signup">
      <div id="signup">
        <form id="form" action="/auth/signup" method="POST">
          <div id="signupDiv" className="signupDiv">
            <input
              type="text"
              className="inputAuthForms"
              name="email"
              placeholder="Enter email"
            />
            <br />
            <input
              className="inputAuthForms"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <br />
            <input
              className="inputAuthForms"
              type="password"
              name="repeat"
              placeholder="Repeat password"
            />
            <br />
            <div class="loginBtnsDiv">
              <div class="loginBtnsDiv-1">
                <a className="ahref-login" href="/auth/login">
                  BACK TO LOGIN
                </a>
              </div>
              <div class="loginBtnsDiv-1">
                <button className="loginBtn" type="submit" id="signup-button">
                  SIGN UP
                </button>
              </div>
            </div>

            {props.errorMessage ? (
              <div className="error-message"> {props.errorMessage} </div>
            ) : null}
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Signup;
