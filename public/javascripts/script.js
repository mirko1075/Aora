// Function to change the day

function calculateToday() {
  let dateToPrint = new Date();
  dayOfMonth = dateToPrint.getDate();
  monthOfYear = dateToPrint.getMonth();
  //   console.log("Today is:", dayOfMonth + "" + monthOfYear);
  return dayOfMonth + "" + monthOfYear;
}

function changeDay(day) {
  day = day.slice(4, 8);
  day = "day-" + day;
  //   console.log("Change the day to: " + day);
  const elementToShow = document.querySelector("#" + day);

  if (elementToShow) {
    const elementToShowId = elementToShow.id;
    // console.log("elementtoShow ID", elementToShow, elementToShowId);
    hideAllDivs(elementToShowId);
    elementToShow.style.display = "block";
  }
}

function hideAllDivs(todayDivId) {
  const allDivs = document.querySelectorAll(".class");
  for (i = 0; i < allDivs.length; i++) {
    let btnId = allDivs[i].id;
    console.log("allDivs[i].id:", allDivs[i].id);
    btnId = btnId.slice(4, 8);
    btnId = "day-" + btnId;
    // console.log("btnId", btnId, "todayDivId", todayDivId);
    if (btnId != "day-" + todayDivId) {
      allDivs[i].style.display = "none";
    }
  }
}
window.addEventListener("load", hideAllDivs(calculateToday()));

//// Add listeners
const btnArray = document.querySelectorAll(".daysBtn");
for (i = 0; i < btnArray.length; i++) {
  const btnId = btnArray[i].id;
  btnArray[i].addEventListener("click", function () {
    changeDay(btnId);
  });
}
