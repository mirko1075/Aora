// Function to change the day

function calculateToday() {
  let dateToPrint = new Date();
  dayOfMonth = dateToPrint.getDate();
  monthOfYear = dateToPrint.getMonth();
  console.log("Today is:", dayOfMonth + "" + monthOfYear);
  return dayOfMonth + "" + monthOfYear;
}

function changeDay(day) {
  console.log("Change the day to: " + day);
  const elementToShow = document.querySelector("#" + day);
  const elementToShowId = elementToShow.id;
  console.log("elementtoShow ID", elementToShow, elementToShowId);
  hideAllDivs(elementToShowId);
  elementToShow.style.display = "block";
}

function hideAllDivs(todayDivId) {
  const allDivs = document.querySelectorAll(".class");
  for (i = 0; i < allDivs.length; i++) {
    const btnId = "btn-" + allDivs[i].id;
    console.log("btnId", btnId);
    if (btnId != todayDivId) {
      allDivs[i].style.display = "none";
    }
  }
}
// window.addEventListener("load", hideAllDivs(calculateToday()));

//// Add listeners
const btnArray = document.querySelectorAll(".daysBtn");
for (i = 0; i < btnArray.length; i++) {
  const btnId = "btn-" + btnArray[i].id;
  btnArray[i].addEventListener("click", function () {
    changeDay(btnId);
  });
}
