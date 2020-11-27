const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
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
          <a href="/private/profileform"><img src="/images/edit-off.svg"></img></a>
          <a href="/private/passwordform"><img src="/images/edit-on.svg"></img></a>
          <a href="/auth/logout"><img src="/images/logout-off.svg"></img></a>
          
        </div>
      </div>
      
      
      
      <div className="profile-scroll-container">
      <br />
          <form id="form" className="profile-form" action="/private/profile" method="POST">
            <br />
            <p className="label">name</p>
            <p className="profile-container">{props.user.name}</p>
            <span className="profile-rectangle"></span>
            <br />
            <p className="label">last name</p>
            <p className="profile-container">{props.user.lastName}</p>
            <span className="profile-rectangle"></span>
            <br />
            <p className="label">email</p>
            <p className="profile-container">{props.user.email}</p>
            <span className="profile-rectangle"></span>
            <br />
            <p className="label">gender</p>
            <p className="profile-container">{props.user.gender}</p>
            <span className="profile-rectangle"></span>
            <br />
            {/* <h3>BIRTHDATE</h3>
            {props.user.birthDate ? <p>{props.user.birthDate.toString()}</p> : null}
            <span className="profile-rectangle"></span>
            <br /> */}
            <p className="label">city</p>
            <p className="profile-container">{props.user.city}</p>
            <span className="profile-rectangle"></span>
            <br />
            <p className="label">country</p>
            <p className="profile-container">{props.user.country}</p>
            <span className="profile-rectangle"></span>
            <br />
            <p className="label">weight</p>
            <p className="profile-container">{props.user.userWeight}</p>
            <span className="profile-rectangle"></span>
            <br />
            <p className="label">height</p>
            <p className="profile-container">{props.user.userHeight}</p>
            <span className="profile-rectangle"></span>
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