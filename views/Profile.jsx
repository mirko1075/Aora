const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
  return (
    <Layout title="Profile">
        <form id="form" action="/private/profile" method="POST">
        <img src="/images/JuanMiguelSansininea.jpg" alt="User Profile"></img>
        <a href="/auth/logout">Log out</a>
        <a href="/private/profileform">Edit profile</a>
        <br />
        <h2>NAME</h2>
        <p>{props.user.name}</p>
        <br />
        <h2>LAST NAME</h2>
        <p>{props.user.lastName}</p>
        <br />
        <h2>EMAIL</h2>
        <p>{props.user.email}</p>
        <br />
        <h2>GENDER</h2>
        <p>{props.user.gender}</p>
        <br />
        {/* <h2>BIRTHDATE</h2>
        {props.user.birthDate ? <p>{props.user.birthDate.toString()}</p> : null}
        <br /> */}
        <h2>CITY</h2>
        <p>{props.user.city}</p>
        <br />
        <h2>COUNTRY</h2>
        <p>{props.user.country}</p>
        <br />
        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage} </div>
        ) : null}
      </form>
    </Layout>
  );
}

module.exports = Profile;
