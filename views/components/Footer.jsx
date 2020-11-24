const React = require("react");

// const navClassesBtn = this.querySelector("#nav-classes-btn");
// navClassesBtn.addEventListener("click", goToClasses);
// function goToClasses(){
//   console.log("gotoClase");
// }

function Footer() {
  return (
    <div>
      <nav>
        <a href="/private/Calendar">
          <div id="nav-classes-btn">
            <img src="/images/classes-off.svg"></img>
            classes
          </div>
        </a>
        <a href="/private/schedule">
          <div>
            <img src="/images/schedule-off.svg"></img>
            schedule
          </div>
        </a>
        <a href="/private/progress">
          <div>
            <img src="/images/progress-off.svg"></img>
            progress
          </div>
        </a>
        <a href="/private/profile">
          <div>
            <img src="/images/profile-off.svg"></img>
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
