const React = require("react");
const Layout = require("./Layout");

function Signup (props) {
    return(
        <Layout>
            <form id="form" action="/auth/signup" method="POST">
                <input type="text" name="username" placeholder="ENTER EMAIL" />
                <br/>
                <input type="password" name="password" placeholder="ENTER PASSWORD" />
                <br/>
                <input type="password" name="password" placeholder="REPEAT PASSWORD" />
                <br/>
                <button type="submit">SIGN UP</button>

                {
                props.errorMessage 
                    ? <div className="error-message"> {props.errorMessage} </div>
                    : null
                }
            </form>
        </Layout>
    )
}

module.exports = Signup;