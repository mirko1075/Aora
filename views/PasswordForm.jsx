const React = require("react");
const Layout = require("./Layout");

function PasswordForm(props) {
  return (
    <Layout title="Profile">
      <div className="header-profile">
        <div className="header-profile-top">
          <div className="profile-pic-big">
            <img src="/images/Juanmi.jpg" alt="User Profile"></img>
          </div>
          <div className="header-profile-top-right">
            <h2>
              {props.user.name} {props.user.lastName}
            </h2>
            <p className="small-info">
              {props.user.city}, {props.user.country}
            </p>
          </div>
        </div>
        <div className="header-profile-bottom">
          <a href="/private/profile">
            <img src="/images/edit-on.svg"></img>
          </a>
          <a href="/auth/logout">
            <img src="/images/logout-off.svg"></img>
          </a>
        </div>
      </div>

      <div className="profile-scroll-container">
        <br />
        <form
          id="form"
          className="profile-form"
          action={`/private/passwordform`}
          method="POST"
        >
          <p className="label">current password</p>
          <input
            className="inputAuthForms"
            type="password"
            name="password"
            placeholder="Enter current password"
            required
          />
          <br />
          <p className="label">new password</p>
          <input
            className="inputAuthForms"
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            required
          />
          <br />
          <p className="label">repeat new password</p>
          <input
            className="inputAuthForms"
            type="password"
            name="repeat"
            placeholder="Repeat password"
            required
          />
          <br />
          <br />
          <br />
          <br />
          <button className="profile-submit" type="submit">
            update password
          </button>

          {props.errorMessage ? (
            <div className="error-message"> {props.errorMessage} </div>
          ) : null}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </Layout>
  );
}

module.exports = PasswordForm;
