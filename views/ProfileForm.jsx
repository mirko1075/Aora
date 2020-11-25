const React = require("react");
const Layout = require("./Layout");

function ProfileForm(props) {
  console.log("Props desde ProfileForm:", props.data);
  const citiesAndCountries = props.data;
  return (
    <Layout title="Profile">
      <form
        id="form"
        action={`/private/profileform?userid=${props.user._id}`}
        method="POST"
      >
        {/* <i href="">PROFILE PICTURE</i>
                <button type="submit">LOG OUT</button>
                <br/> */}
        <h2>NAME</h2>
        <input type="text" name="name" defaultValue={props.user.name} />
        <br />
        <h2>LAST NAME</h2>
        <input type="text" name="lastName" defaultValue={props.user.lastName} />
        <br />
        <h2>EMAIL</h2>
        <input type="email" name="email" defaultValue={props.user.email} />
        <br />
        {/* <h2>GENDER</h2>
                <p>{props.user.gender}</p>
                <input type="radio" name="gender" value="male"/>Male
                <input type="radio" name="gender" value="female"/>Female
                <input type="radio" name="gender" value="other"/>Other
                <br/> */}
        <h2>BIRTHDATE</h2>
        <input
          type="date"
          name="birthDate"
          defaultValue={props.user.birthDate}
        />
        <br />
        <h2>CITY</h2>
        <input type="text" name="city" defaultValue={props.user.city} />
        <br />
        <h2>COUNTRY</h2>
        <input type="text" name="country" defaultValue={props.user.country} />
        <br />
        {/* <h2>CURRENT PASSWORD</h2>
                <p>{props.user.password}</p>
                <input type="password" name="password" placeholder="Enter current password" />
                <br/>
                <h2>NEW PASSWORD</h2>
                <input type="password" name="password" placeholder="Enter new password" />
                <br/>
                <h2>RE ENTER NEW PASSWORD</h2>
                <input type="password" name="repeat" placeholder="Repeat password"/>
                <br/> */}
        {/* <h2>WEIGHT</h2>
                <p>{props.user.weight}</p>
                <input type="text" name="weight" placeholder="Weight" />
                <br/> */}
        {/* <h2>HEIGHT</h2>
                <p>{props.user.height}</p>
                <input type="text" name="height" placeholder="Height" />
                <br/> */}
        <button type="submit">UPDATE</button>

        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage} </div>
        ) : null}
      </form>
    </Layout>
  );
}

module.exports = ProfileForm;
