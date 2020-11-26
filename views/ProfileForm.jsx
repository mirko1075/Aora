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
          <a href="/private/profile"><img src="/images/edit-on.svg"></img></a>
          <a href="/auth/logout"><img src="/images/logout-off.svg"></img></a>
          
        </div>
      </div>



      <div class="profile-scroll-container">
        <form id="form" class="profile-form" action={`/private/profileform`} method="POST">
          <p class="label">name</p>
          <input type="text" name="name" defaultValue={props.user.name} />
          <br />
          <p class="label">last name</p>
          <input
            type="text"
            name="lastName"
            defaultValue={props.user.lastName}
          />
          <br />
          <p class="label">email</p>
          <input
            type="email"
            name="email"
            defaultValue={props.user.email}
            required
          />
          <br />
          <p class="label">gender</p>
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
          <p class="label">city</p>
          <input type="text" name="city" defaultValue={props.user.city} />
          <br />
          <p class="label">country</p>
          <input type="text" name="country" defaultValue={props.user.country} />
          <br />
          <br />
          <p class="label">weight</p>
          <input
            type="text"
            name="userWeight"
            defaultValue={props.user.userWeight}
          />
          <br />
          <p class="label">height</p>
          <input
            type="text"
            name="userHeight"
            defaultValue={props.user.userHeight}
          />
          <br />
          <p class="label">current password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter current password"
            required
          />
          <br />
          <p class="label">new password</p>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
          />
          <br />
          <p class="label">repeat new password</p>
          <input type="password" name="repeat" placeholder="Repeat password" />
          <button type="submit">update profile</button>

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
