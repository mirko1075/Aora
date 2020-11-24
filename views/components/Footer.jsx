const React = require("react");



function Footer(props) {
  return (
    <div>
      <nav>
        <a href="/private/Calendar">
          <div id="nav-classes-btn">
            <img src={ props.title==="Calendar" ? "/images/classes-on.svg" : "/images/classes-off.svg" }></img>
            classes
          </div>
        </a>
        <a href="/private/schedule">
          <div>
            <img src={ props.title==="Schedule" ? "/images/schedule-on.svg" : "/images/schedule-off.svg" }></img>
            schedule
          </div>
        </a>
        <a href="/private/progress">
          <div>
            <img src={ props.title==="Progress" ? "/images/progress-on.svg" : "/images/progress-off.svg" }></img>
            progress
          </div>
        </a>
        <a href="/private/profile">
          <div>
          <img src={ props.title==="Profile" ? "/images/profile-on.svg" : "/images/profile-off.svg" }></img>
            profile
          </div>
        </a>

        {/* <a href="/auth/Logout" className="">
          Logout
        </a> */}
      </nav>
    </div>
  );
}

module.exports = Footer;
