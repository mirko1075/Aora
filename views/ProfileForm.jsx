const React = require("react");
const Layout = require("./Layout");

function ProfileForm(props) {
  // const dateObj = new Date(props.user.birthDate)
  // const dateString = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}`
  // const dateString = dateObj.toISOString().substr(0,10)
  // console.log(dateString)
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
          action={`/private/profileform`}
          method="POST"
        >
          <p className="label">name</p>
          <input
            className="inputAuthForms"
            type="text"
            name="name"
            defaultValue={props.user.name}
          />
          <br />
          <p className="label">last name</p>
          <input
            className="inputAuthForms"
            type="text"
            name="lastName"
            defaultValue={props.user.lastName}
          />
          <br />
          <p className="label">email</p>
          <input
            className="inputAuthForms"
            type="email"
            name="email"
            defaultValue={props.user.email}
            disabled
          />
          <br />
          <br />
          <p className="label">gender</p>
          {props.user.gender == "Male" ? (
            <div>
              <input type="radio" name="gender" value="Male" checked /> Male
              <input type="radio" name="gender" value="Female" /> Female
              <input type="radio" name="gender" value="Other" /> Other
            </div>
          ) : props.user.gender == "Female" ? (
            <div>
              <input type="radio" name="gender" value="Male" /> Male
              <input type="radio" name="gender" value="Female" checked /> Female
              <input type="radio" name="gender" value="Other" /> Other
            </div>
          ) : props.user.gender == "Other" ? (
            <div>
              <input type="radio" name="gender" value="Male" /> Male
              <input type="radio" name="gender" value="Female" /> Female
              <input type="radio" name="gender" value="Other" checked /> Other
            </div>
          ) : (
            <div>
              <input type="radio" name="gender" value="Male" /> Male
              <input type="radio" name="gender" value="Female" /> Female
              <input type="radio" name="gender" value="Other" /> Other
            </div>
          )}
          <br />
          {/* <h2>BIRTHDATE</h2> */}
          {/* <input type="date" name="birthDate" min="1900-01-01" max="2020-06-30" dateformat="YYYY-MM-DD" defaultValue={props.user.birthDate} required/> */}
          {/* <input type="date" name="birthDate" data-date={props.user.birthDate} data-date-format="YYYY-MM-DD" value={props.user.birthDate}></input> */}
          {/* {props.user.birthDate 
                    ? <input type="date" placeholder="dd-mm-yyyy" name="birthDate" defaultValue={dateString}/>
                    : <input type="date" placeholder="dd-mm-yyyy" name="birthDate"/>} */}
          {/* <br/> */}
          <p className="label">city</p>
          <input
            className="inputAuthForms"
            type="text"
            name="city"
            defaultValue={props.user.city}
          />
          <br />
          <p className="label">country</p>
          <input
            className="inputAuthForms"
            type="text"
            name="country"
            defaultValue={props.user.country}
          />
          <br />
          <p className="label">weight</p>
          <input
            className="inputAuthForms"
            type="text"
            name="userWeight"
            defaultValue={props.user.userWeight}
          />
          <br />
          <p className="label">height</p>
          <input
            className="inputAuthForms"
            type="text"
            name="userHeight"
            defaultValue={props.user.userHeight}
          />
          <br />
          <p className="label">password</p>
          <input
            className="inputAuthForms"
            type="password"
            name="password"
            placeholder="Enter current password"
            required
          />
          <br />
          <br />
          <br />
          <button className="profile-submit" type="submit">
            update profile
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

module.exports = ProfileForm;
