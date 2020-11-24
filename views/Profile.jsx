const React = require("react");
const Layout = require("./Layout");

function Profile (props) {
    const foundUser=props.foundUser;
    
    console.log(props)
    return(
        <Layout>
            <form id="form" action="/auth/login" method="POST">
                <i href="">PROFILE PICTURE</i>
                <button type="submit">LOG OUT</button>
                <button type="submit">EDIT</button>
                <br/>
                {/* <input type="text" name="name" placeholder="name" value="{foundUser.name}" /> */}
                {/* <p>"${foundUser.email}"</p> */}
                <i href="">PROFILE PICTURE</i>
                
                {/* <button type="submit">LOG OUT</button>
                <button type="submit">EDIT PROFILE</button>
                <br/>
                <p>NAME</p>
                <br/>
                <p>{foundUser.name}</p>
                <br/>
                <p>{foundUser.lastName}</p>
                <br/>
                <p>{foundUser.email}</p>
                <br/>
                <p>{foundUser.gender}</p>
                <br/>
                <p>{foundUser.birthDate}</p>
                <br/>
                <p>{foundUser.city}</p>
                <br/>
                <p>{foundUser.country}</p>
                <br/> */}

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

