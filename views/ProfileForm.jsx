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
        <div class="header-profile-top">
          <div class="profile-pic-big">
            <img src="/images/Juanmi.jpg" alt="User Profile"></img>
          </div>
          <div class="header-profile-top-right">
            <h2>
              {props.user.name} {props.user.lastName}
            </h2>
            <p class="small-info">
              {props.user.city}, {props.user.country}
            </p>
          </div>
        </div>
        <div class="header-profile-bottom">
          <img src="/images/edit-on.svg"></img>
          <img src="/images/logout-off.svg"></img>
        </div>
      </div>
      <div class="scroll-container">
        <form id="form" action={`/private/profileform`} method="POST">
          <br />
          <a href="/auth/logout">Log out</a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>NAME</h2>
          <input type="text" name="name" defaultValue={props.user.name} />
          <br />
          <h2>LAST NAME</h2>
          <input
            type="text"
            name="lastName"
            defaultValue={props.user.lastName}
          />
          <br />
          <h2>EMAIL</h2>
          <input
            type="email"
            name="email"
            defaultValue={props.user.email}
            required
          />
          <br />
          <h2>GENDER</h2>
          {
            (props.user.gender = "Male" ? (
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked="checked"
                />{" "}
                Male
                <input type="radio" name="gender" value="Female" /> Female
                <input type="radio" name="gender" value="Other" /> Other
              </div>
            ) : (
              (props.user.gender = "Female" ? (
                <div>
                  <input type="radio" name="gender" value="Male" /> Male
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked="checked"
                  />{" "}
                  Female
                  <input type="radio" name="gender" value="Other" /> Other
                </div>
              ) : (
                (props.user.gender = "Other" ? (
                  <div>
                    <input type="radio" name="gender" value="Male" /> Male
                    <input type="radio" name="gender" value="Female" /> Female
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked="checked"
                    />{" "}
                    Other
                  </div>
                ) : (
                  <div>
                    <input type="radio" name="gender" value="Male" /> Male
                    <input type="radio" name="gender" value="Female" /> Female
                    <input type="radio" name="gender" value="Other" /> Other
                  </div>
                ))
              ))
            ))
          }
          <br />
          {/* <h2>BIRTHDATE</h2> */}
          {/* <input type="date" name="birthDate" min="1900-01-01" max="2020-06-30" dateformat="YYYY-MM-DD" defaultValue={props.user.birthDate} required/> */}
          {/* <input type="date" name="birthDate" data-date={props.user.birthDate} data-date-format="YYYY-MM-DD" value={props.user.birthDate}></input> */}
          {/* {props.user.birthDate 
                    ? <input type="date" placeholder="dd-mm-yyyy" name="birthDate" defaultValue={dateString}/>
                    : <input type="date" placeholder="dd-mm-yyyy" name="birthDate"/>} */}
          {/* <br/> */}
          <h2>CITY</h2>
          <input type="text" name="city" defaultValue={props.user.city} />
          <br />
          <h2>COUNTRY</h2>
          <input type="text" name="country" defaultValue={props.user.country} />
          <br />
          <br />
          <h2>WEIGHT</h2>
          <input
            type="text"
            name="userWeight"
            defaultValue={props.user.userWeight}
          />
          <br />
          <h2>HEIGHT</h2>
          <input
            type="text"
            name="userHeight"
            defaultValue={props.user.userHeight}
          />
          <br />
          <h2>CURRENT PASSWORD</h2>
          <input
            type="password"
            name="password"
            placeholder="Enter current password"
            required
          />
          <br />
          <h2>NEW PASSWORD</h2>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
          />
          <br />
          <h2>REPEAT NEW PASSWORD</h2>
          <input type="password" name="repeat" placeholder="Repeat password" />
          <button type="submit">UPDATE</button>

          {props.errorMessage ? (
            <div className="error-message"> {props.errorMessage} </div>
          ) : null}
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
