const React = require("react");

function Footer() {
  return (
    <div>
      <nav>
        <a href="/private/Calendar">classes</a>
        <a href="/private/schedule">schedule</a>
        <a href="/private/progress">progress</a>
        <a href="/private/profile">profile</a>
        <a href="/auth/Logout" className="">
          Logout
        </a>
      </nav>
    </div>
  );
}

module.exports = Footer;
