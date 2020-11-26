const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
  return (
    <Layout title="Profile">
      <div className="profile-header">
        <h1>Profile</h1>
        <br />
            <a href="/auth/logout">Log out</a>
        <br />
            <a href="/private/profileform">Edit profile</a>
          <div className="profile-pic">
            <img src="/images/JuanMiguelSansininea.jpg" alt="User Profile"></img>
            <img src={props.user.picUrl} alt="User Profile"></img>
          </div>
      </div>
      <div className="scroll-container">
          <form id="form" action="/private/profile" method="POST">
            <br />
            <h3>NAME</h3>
            <p>{props.user.name}</p>
            <br />
            <h3>LAST NAME</h3>
            <p>{props.user.lastName}</p>
            <br />
            <h3>EMAIL</h3>
            <p>{props.user.email}</p>
            <br />
            <h3>GENDER</h3>
            <p>{props.user.gender}</p>
            <br />
            {/* <h3>BIRTHDATE</h3>
            {props.user.birthDate ? <p>{props.user.birthDate.toString()}</p> : null}
            <br /> */}
            <h3>CITY</h3>
            <p>{props.user.city}</p>
            <br />
            <h3>COUNTRY</h3>
            <p>{props.user.country}</p>
            <br />
            <h3>HEIGHT</h3>
            <p>{props.user.userHeight}</p>
            <br />
            <h3>WEIGHT</h3>
            <p>{props.user.userWeight}</p>
            <br />
            {props.errorMessage ? (
              <div className="error-message"> {props.errorMessage} </div>
            ) : null}
          </form>
            <br />
            <br />
            <br />
            <br />
      </div>
    </Layout>
  );
}

module.exports = Profile;
