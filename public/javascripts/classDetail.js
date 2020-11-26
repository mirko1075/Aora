const closeButton = document.querySelector(".close-button");
console.log("yes: ", closeButton);


closeButton.addEventListener("click", function () {
  window.history.back();
});
