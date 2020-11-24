// Function to change the day

function calculateToday() {
  let dateToPrint = new Date();
  dayOfMonth = dateToPrint.getDate();
  monthOfYear = dateToPrint.getMonth();
  //   console.log("Today is:", dayOfMonth + "" + monthOfYear);
  return dayOfMonth + "" + monthOfYear;
}

function changeDay(day) {
  day = day.slice(day.indexOf("-", -1) + 1, day.length);
  day = day.slice(day.indexOf("-") + 1, day.length);
  // day = day.slice(4, 8);
  // day = day;
  // console.log("Change the day to: " + day);
  const elementsToShow = document.querySelectorAll(".class");

  if (elementsToShow) {
    hideAllDivs(day);
    displayDiv(day);
  }
}

function hideAllDivs(todayDivId) {
  const allDivs = document.querySelectorAll(".class");
  for (i = 0; i < allDivs.length; i++) {
    let btnId = allDivs[i].id;
    // console.log("Hide: allDivs[i].id:", allDivs[i].id);
    btnId = btnId.slice(btnId.indexOf("-", -1) + 1, btnId.length);
    btnId = btnId.slice(btnId.indexOf("-") + 1, btnId.length);
    // console.log("Hide: classId", btnId, "todayDivId", todayDivId);
    if (btnId != todayDivId) {
      allDivs[i].style.display = "none";
    }
  }
}

function displayDiv(day) {
  const classes = document.querySelectorAll(".class");
  for (i = 0; i < classes.length; i++) {
    let classId = classes[i].id;
    // console.log("Display: classes[i].id:", classes[i].id);
    classId = classId.slice(classId.indexOf("-", -1) + 1, classId.length);
    classId = classId.slice(classId.indexOf("-") + 1, classId.length);
    // console.log("Display: classId", classId, "day", day);
    if (classId == day) {
      classes[i].style.display = "block";
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
