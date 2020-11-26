// Using ES6 feature.
let redirect_Page = () => {
  let tID = setTimeout(function () {
    window.location.href = "/private/Calendar";
    window.clearTimeout(tID); // clear time out.
  }, 3000);
};
