const React = require("react");
const Layout = require("./Layout");

function ProfileForm(props) {
    console.log(props)
    // const dateObj = new Date(props.user.birthDate)
    // const dateString = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}`
    // const dateString = dateObj.toISOString().substr(0,10)
    // console.log(dateString)
    return(
        <Layout title="Profile">
          <div className="profile-header">
            <h1>Profile</h1>
                        <a href="/auth/logout">Log out</a>
                  <div className="profile-pic">
                    <img src="/images/JuanMiguelSansininea.jpg" alt="User Profile"></img>
                  </div>
            </div>
            <div className="scroll-container">
                  <form id="form" action={`/private/profileform`} method="POST">
                      <br/>
                      <br/>
                      <h3>NAME</h3>
                      <input type="text" name="name" defaultValue={props.user.name} />
                      <br/>
                      <h3>LAST NAME</h3>
                      <input type="text" name="lastName" defaultValue={props.user.lastName} />
                      <br/>
                      <h3>EMAIL</h3>
                      <input type="email" name="email" defaultValue={props.user.email} required />
                      <br/>
                      <h3>GENDER</h3>
                      {
                        props.user.gender = "Male" ? (
                          <div>
                            <input type="radio" name="gender" value="Male" checked="checked" /> Male
                            <input type="radio" name="gender" value="Female" /> Female
                            <input type="radio" name="gender" value="Other" /> Other
                          </div>
                            )
                            : props.user.gender = "Female" ? (
                          <div>
                            <input type="radio" name="gender" value="Male" /> Male
                            <input type="radio" name="gender" value="Female" checked="checked" /> Female
                            <input type="radio" name="gender" value="Other" /> Other
                          </div>
                            )
                            : props.user.gender = "Other" ? (
                          <div>
                            <input type="radio" name="gender" value="Male" /> Male
                            <input type="radio" name="gender" value="Female" /> Female
                            <input type="radio" name="gender" value="Other" checked="checked" /> Other
                          </div>
                              )
                              : (
                          <div>
                            <input type="radio" name="gender" value="Male" /> Male
                            <input type="radio" name="gender" value="Female" /> Female
                            <input type="radio" name="gender" value="Other" /> Other
                          </div>
                              )
                      }
                      <br/>
                      <h3>BIRTHDATE</h3>
                      {/* <input type="date" name="birthDate" min="1900-01-01" max="2020-06-30" dateformat="YYYY-MM-DD" defaultValue={props.user.birthDate} required/> */}
                      {/* <input type="date" name="birthDate" data-date={props.user.birthDate} data-date-format="YYYY-MM-DD" value={props.user.birthDate}></input> */}
                      {/* {props.user.birthDate 
                          ? <input type="date" placeholder="dd-mm-yyyy" name="birthDate" defaultValue={dateString}/>
                          : <input type="date" placeholder="dd-mm-yyyy" name="birthDate"/>}
                      <br/> */}
                      <h3>CITY</h3>
                      <input type="text" name="city" defaultValue={props.user.city} />
                      <br/>
                      <h3>COUNTRY</h3>
                      <input type="text" name="country" defaultValue={props.user.country} />
                      <br/>
                      <h3>WEIGHT</h3>
                      <input type="text" name="userWeight" defaultValue={props.user.userWeight}/>
                      <br/>
                      <h3>HEIGHT</h3>
                      <input type="text" name="userHeight" defaultValue={props.user.userHeight}/>
                      <br/>
                      <h3>CURRENT PASSWORD</h3>
                      <input type="password" name="password" placeholder="Enter current password" required />
                      <br/>
                      <h3>NEW PASSWORD</h3>
                      <input type="password" name="newPassword" placeholder="Enter new password" />
                      <br/>
                      <h3>REPEAT NEW PASSWORD</h3>
                      <input type="password" name="repeat" placeholder="Repeat password"/>
                      <br/>
                      <button type="submit" className="loginBtn">UPDATE</button>
                      {props.errorMessage ? (
                        <div className="error-message"> {props.errorMessage} </div>
                      ) : null}
                      <br/>
                      <br/>
                      <br/>
                      <br/>
            </form>
            </div>
        </Layout>
  );
}

module.exports = ProfileForm;
