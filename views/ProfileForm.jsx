const React = require("react");
const Layout = require("./Layout");

function ProfileForm (props) {
    return(
        <Layout title="Profile">
            <form id="form" action={`/private/profileform?userid=${props.user[0]._id}`} method="POST">
                {/* <i href="">PROFILE PICTURE</i>
                <button type="submit">LOG OUT</button>
                <br/> */}
                <h2>NAME</h2>
                <input type="text" name="name" defaultValue={props.user[0].name} />
                <br/>
                <h2>LAST NAME</h2>
                <input type="text" name="lastName" defaultValue={props.user[0].lastName} />
                <br/>
                <h2>EMAIL</h2>
                <input type="email" name="email" defaultValue={props.user[0].email} />
                <br/>
                {/* <h2>GENDER</h2>
                <p>{props.user[0].gender}</p>
                <input type="radio" name="gender" value="male"/>Male
                <input type="radio" name="gender" value="female"/>Female
                <input type="radio" name="gender" value="other"/>Other
                <br/> */}
                <h2>BIRTHDATE</h2>
                <input type="date" name="birthDate" defaultValue={props.user[0].birthDate}/>
                <br/>
                <h2>CITY</h2>
                <input type="text" name="city" defaultValue={props.user[0].city} />
                <br/>
                <h2>COUNTRY</h2>
                <input type="text" name="country" defaultValue={props.user[0].country} />
                <br/>
                {/* <h2>CURRENT PASSWORD</h2>
                <p>{props.user[0].password}</p>
                <input type="password" name="password" placeholder="Enter current password" />
                <br/>
                <h2>NEW PASSWORD</h2>
                <input type="password" name="password" placeholder="Enter new password" />
                <br/>
                <h2>RE ENTER NEW PASSWORD</h2>
                <input type="password" name="repeat" placeholder="Repeat password"/>
                <br/> */}
                {/* <h2>WEIGHT</h2>
                <p>{props.user[0].weight}</p>
                <input type="text" name="weight" placeholder="Weight" />
                <br/> */}
                {/* <h2>HEIGHT</h2>
                <p>{props.user[0].height}</p>
                <input type="text" name="height" placeholder="Height" />
                <br/> */}
                <button type="submit">UPDATE</button>

                {
                props.errorMessage 
                    ? <div className="error-message"> {props.errorMessage} </div>
                    : null
                }
            </form>
        </Layout>
    )
}

module.exports = ProfileForm;