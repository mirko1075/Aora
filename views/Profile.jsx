const React = require("react");
const Layout = require("./Layout");

function Profile (props) {
    console.log(props)
    return(
        <Layout title="Profile">
            <form id="form" action="/private/profile" method="POST">
                <i href="{props.user[0].picUrl}">PROFILE PICTURE</i>
                
                <a href="/auth/logout">Log out</a>
                <a href="/private/profileform">Edit profile</a>
                <br/>
                <h2>NAME</h2>
                <p>{props.user[0].name}</p>
                <br/>
                <h2>LAST NAME</h2>
                <p>{props.user[0].lasName}</p>
                <br/>
                <h2>EMAIL</h2>
                <p>{props.user[0].email}</p>
                <br/>
                <h2>GENDER</h2>
                <p>{props.user[0].gender}</p>
                <br/>
                <h2>BIRTHDATE</h2>
                <p>{props.user[0].birthDate}</p>
                <br/>
                <h2>CITY</h2>
                <p>{props.user[0].city}</p>
                <br/>
                <h2>COUNTRY</h2>
                <p>{props.user[0].country}</p>
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

