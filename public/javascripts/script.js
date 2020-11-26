"use strict";
/// VARIABLES

let divsToHide = [];
let divsToShow = [];
const filtersObj = new Object();
let actualDate = calculateToday();

//LEGACY FUNCTIONS

// function hideAllDivs(todayDivId, filtered) {
//   const allDivs = document.querySelectorAll(".classArticle");
//   if (!filtered) {
//     for (let i = 0; i < allDivs.length; i++) {
//       let btnId = allDivs[i].id;
//       // console.log("Hide: allDivs[i].id:", allDivs[i].id);
//       btnId = btnId.slice(btnId.indexOf("-", -1) + 1, btnId.length);
//       btnId = btnId.slice(btnId.indexOf("-") + 1, btnId.length);
//       // console.log("Hide: classId", btnId, "todayDivId", todayDivId);
//       if (btnId != todayDivId) {
//         allDivs[i].style.display = "none";
//       }
//     }
//   } else {
//     /// CREAR BLOCCO PER DISPLAY FILTRO PER GIORNO
//   }
// }

// function displayAllDivs(day, filtered) {
//   const classes = document.querySelectorAll(".classArticle");
//   if (!filtered) {
//     for (let i = 0; i < classes.length; i++) {
//       let classId = classes[i].id;
//       // console.log("Display: classes[i].id:", classes[i].id);
//       classId = classId.slice(classId.indexOf("-", -1) + 1, classId.length);
//       classId = classId.slice(classId.indexOf("-") + 1, classId.length);
//       // console.log("Display: classId", classId, "day", day);
//       if (classId == day) {
//         classes[i].style.display = "block";
//       }
//     }
//   } else {
//     /// CREAR BLOCCO PER DISPLAY FILTRO PER GIORNO
//   }
// }

// function changeDay(day) {
//   day = day.slice(day.indexOf("-", -1) + 1, day.length);
//   day = day.slice(day.indexOf("-") + 1, day.length);
//   // day = day.slice(4, 8);
//   // day = day;
//   console.log("Change the day to: " + day);

//   filtersObj.scheduled = day;

//   const { trainer, scheduled, classType, duration, difficulty } = filtersObj;
//   console.log(
//     "Deconstructor",
//     trainer,
//     scheduled,
//     classType,
//     duration,
//     difficulty
//   );

//   const elementsToShow = document.querySelectorAll(".classArticle");
//   actualDate = day;
//   if (elementsToShow) {
//     hideAllDivs(day, false);
//     displayAllDivs(day, false);
//     const btnArray = document.querySelectorAll(".dayVoid");
//     console.log(btnArray);
//     for (let i = 0; i < btnArray.length; i++) {
//       let btnId = btnArray[i].id;
//       btnId = btnId.slice(btnId.indexOf("-") + 1, btnId.length);
//       console.log("btnId", btnId, "day", day);
//       if (btnId != day) {
//         btnArray[i].classList.remove("daysBtnOn");
//         btnArray[i].classList.add("daysBtnOff");
//       } else {
//         btnArray[i].classList.add("daysBtnOn");
//         btnArray[i].classList.remove("daysBtnOff");
//       }
//     }
//   }
// }

// APPLY FILTERS CREATED IN filtersObj
// function applyFilter() {
//   const { trainer, scheduled, classType, duration, difficulty } = filtersObj;
//   console.log(
//     "Deconstructor",
//     trainer,
//     scheduled,
//     classType,
//     duration,
//     difficulty
//   );
//   console.log("Apply Filter", divsToHide, divsToShow);
//   for (let i = 0; i < divsToHide.length; i++) {
//     divsToHide[i].style.display = "none";
//   }
//   for (let i = 0; i < divsToShow.length; i++) {
//     divsToShow[i].style.display = "block";
//   }
//   filterDiv.classList.add("filterHidden");
//   filterDiv.classList.remove("filterShow");
//   // hideAllDivs(actualDate, true);
//   // displayAllDivs(actualDate, true);
// }

// NEW FUNCTIONS
// Function to calculate the day and format for our use

function calculateToday() {
  let dateToPrint = new Date();
  let dayOfMonth = dateToPrint.getDate();
  let monthOfYear = dateToPrint.getMonth() + 1;
  //   console.log("Today is:", dayOfMonth + "" + monthOfYear);
  return dayOfMonth + "" + monthOfYear;
}
function showFilter(div) {
  if (div.classList.contains("filterHidden")) {
    div.classList.add("filterShow");
    div.classList.remove("filterHidden");
  } else {
    div.classList.add("filterHidden");
    div.classList.remove("filterShow");
  }
}

// Change the day in the calendarBar and apply a filter for scheduled
function changeDay(day) {
  console.log("Dat before parsing:", day);
  day = day.slice(day.indexOf("-", -1) + 1, day.length);
  day = day.slice(day.indexOf("-") + 1, day.length);

  console.log("Change the day to: " + day);
  // Create the filter that will be applied later
  filtersObj.scheduled = day;
  actualDate = day;
  const { trainer, scheduled, classType, duration, difficulty } = filtersObj;

  // CREATION OF BUTTONS TO ENLIGHT BECAUSE SELECTED
  const btnArray = document.querySelectorAll(".dayVoid");
  console.log(btnArray);
  for (let i = 0; i < btnArray.length; i++) {
    let btnId = btnArray[i].id;
    btnId = btnId.slice(btnId.indexOf("-") + 1, btnId.length);
    console.log("btnId", btnId, "day", day);
    if (btnId != day) {
      btnArray[i].classList.remove("daysBtnOn");
      btnArray[i].classList.add("daysBtnOff");
    } else {
      btnArray[i].classList.add("daysBtnOn");
      btnArray[i].classList.remove("daysBtnOff");
    }
  }
  applyFilter();
}

function filter(field, fieldValue) {
  divsToHide = [];
  divsToShow = [];
  console.log("Parameters:", field, fieldValue);
  const divsArr = document.querySelectorAll("article");
  console.log("actual Date:", actualDate);
  for (let i = 0; i < divsArr.length; i++) {
    const elem = divsArr[i];

    console.log(
      "Class type all:",
      "Id:" + divsArr[i].id,
      "Field value:" + divsArr[i].attributes[`data-${field}`].value,
      "Scheduled:" + divsArr[i].attributes["data-scheduled"].value
    );
    //   if (
    //     divsArr[i].attributes[`data-${field}`].value === fieldValue &&
    //     divsArr[i].attributes["data-scheduled"].value == actualDate
    //   ) {
    //     // console.log(
    //     //   "Here i am",
    //     //   divsArr[i].id,
    //     //   divsArr[i].attributes[`data-${field}`].value
    //     // );
    //     divsToShow.push(divsArr[i]);
    //   } else {
    //     divsToHide.push(divsArr[i]);
    //   }
  }
  filtersObj[field] = fieldValue;
  console.log("filtersObj", filtersObj);
  // formObj.reset();
}

function applyFilter() {
  const { trainer, scheduled, classType, duration, difficulty } = filtersObj;
  console.log(
    "Deconstructor",
    trainer,
    scheduled,
    classType,
    duration,
    difficulty
  );
  console.log("Apply Filter");
  const divsArr = document.querySelectorAll("article");
  divsToShow = [];
  // CHECK IF THE FILTERS APPLY TO EACH DIV, IF YES I CREATE A divsToShow ARRAY THAT I'LL DISPLAY WITH SHOWDIV FUNCTION
  for (let i = 0; i < divsArr.length; i++) {
    console.log(divsArr[i]);

    if (scheduled) {
      if (divsArr[i].attributes["data-scheduled"].value === scheduled) {
        if (trainer) {
          if (divsArr[i].attributes["data-trainer"].value === trainer) {
            console.log("trainer filter");
            divsToShow.push(divsArr[i]);
            continue;
          }
        }
        if (classType) {
          if (divsArr[i].attributes["data-classType"].value === classType) {
            console.log("classType filter");
            divsToShow.push(divsArr[i]);
            continue;
          }
        }
        if (duration) {
          if (divsArr[i].attributes["data-duration"].value === duration) {
            console.log("duration filter");
            divsToShow.push(divsArr[i]);
            continue;
          }
        }
        if (difficulty) {
          if (divsArr[i].attributes["data-difficulty"].value === difficulty) {
            console.log("difficulty filter");
            divsToShow.push(divsArr[i]);
            continue;
          }
        }
        console.log("scheduled filter");
        divsToShow.push(divsArr[i]);
        continue;
      }
    }

    console.log("No filter");
    divsToHide.push(divsArr[i]);
  }
  console.log("divsToShow", divsToShow);
  console.log("divsToHide", divsToHide);
  filterDiv.classList.add("filterHidden");
  filterDiv.classList.remove("filterShow");
  hideAllDivs(actualDate, true);
  displayAllDivs(actualDate, true);
}

function displayAllDivs(day, filtered) {
  for (let i = 0; i < divsToShow.length; i++) {
    let btnId = divsToShow[i].id;
    // console.log("Hide: divsToShow[i].id:", divsToShow[i].id);
    divsToShow[i].style.display = "block";
  }
}

function hideAllDivs(todayDivId, filtered) {
  for (let i = 0; i < divsToHide.length; i++) {
    let btnId = divsToHide[i].id;
    // console.log("Hide: divsToHide[i].id:", divsToHide[i].id);
    divsToHide[i].style.display = "none";
  }
}

//// Add listeners
const btnArray = document.querySelectorAll(".dayVoid");
for (let i = 0; i < btnArray.length; i++) {
  const btnId = btnArray[i].id;
  btnArray[i].addEventListener("click", function () {
    changeDay(btnId);
  });
}

// IDENTIFYING ELEMENTS BY ID
// DIV WITH THE FILTER FORM
const filterDiv = document.getElementById("filter");
//BUTTON FILTER INSIDE Calendar
const filterBtn = document.getElementById("filterBtn");
//Button to apply filter
const applyFilterBtn = document.getElementById("applyFilterBtn");

const removeFilterBtn = document.getElementById("removeFilterBtn");
const closeFilterBtn = document.getElementById("closeFilterBtn");
const classType = document.getElementById("classType");
const trainer = document.getElementById("trainer");
const duration = document.getElementById("duration");
const difficulty = document.getElementById("difficulty");
const formObj = document.getElementById("filterForm");
// const equipment = document.getElementById("equipment");

// LISTENERS
window.addEventListener("load", changeDay(calculateToday()));

filterBtn.addEventListener("click", function () {
  showFilter(filterDiv);
});

applyFilterBtn.addEventListener("click", function () {
  applyFilter();
});

// filterBtn.addEventListener("click", function () {
//   unApplyFilter();
// });

closeFilterBtn.addEventListener("click", function () {
  showFilter(filterDiv);
});

classType.addEventListener("change", function () {
  filter(classType.id, classType.value);
});

trainer.addEventListener("change", function () {
  filter(trainer.id, trainer.value);
});

duration.addEventListener("change", function () {
  filter(duration.id, duration.value);
});

difficulty.addEventListener("change", function () {
  filter(difficulty.id, difficulty.value);
});
