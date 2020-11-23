const React = require("react");
const Layout = require("./Layout");

function Profile (props) {
    return(
        <Layout>
            <form id="form" action="/auth/login" method="POST">
                <i href="">PROFILE PICTURE</i>
                <button type="submit">LOG OUT</button>
                <button type="submit">EDIT</button>
                <br/>
                <input type="text" name="name" placeholder="name" />
                <br/>
                <input type="text" name="lastName" placeholder="lastName" />
                <br/>
                <input type="email" name="email" placeholder="email" />
                <br/>
                <input type="radio" name="gender" value="male"/>Male
                <input type="radio" name="gender" value="female"/>Female
                <input type="radio" name="gender" value="other"/>Other
                <br/>
                <input type="date" name="bithdate" />
                <br/>
                <input type="text" name="email" placeholder="ENTER EMAIL" />
                <br/>
                <input type="text" name="city" placeholder="city" />
                <br/>
                <input type="text" name="country" placeholder="country" />
                <br/>
                <input type="password" name="password" placeholder="Enter password" />
                <br/>
                <input type="text" name="weight" placeholder="Weight" />
                <br/>
                <input type="text" name="height" placeholder="Height" />
                <br/>

                {
                props.errorMessage 
                    ? <div className="error-message"> {props.errorMessage} </div>
                    : null
                }
            </form>
        </Layout>
    )
}

module.exports = Profile;

//vista de informacion
// botton edit que cambia a modificar los campos

//     city: String,
//     country: String,
//     password: String,
//     userType: { type: String, enum: ["user", "trainer"] },
//     userGoal: {
//       type: String,
//       default: "",
//       enum: [
//         "Strenght",
//         "Weight loss",
//         "Mass gain",
//         "General health",
//         "",
