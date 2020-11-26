const React = require("react");

function Filter(props) {
  const unifyArray = props.unifyArray;
  const classesArr = props.classesArr.foundClasses;
  let trainersArr = classesArr.map((elem) => {
    return elem.trainer[0];
  });
  let classesArrTypes = classesArr.map((elem) => {
    return elem.classType;
  });
  let classDurationArr = classesArr.map((elem) => {
    return elem.duration;
  });
  let classDifficultyArr = classesArr.map((elem) => {
    return elem.difficulty;
  });
  let classEquipmentArr = [];
  let tempClassEquipmentArr = classesArr.map((elem) => {
    const elemStr = elem.equipment.map((equipObj) => {
      classEquipmentArr.push(equipObj);
    });
  });
  const uniqueTrainers = unifyArray(trainersArr);
  const uniqueClassesTypes = unifyArray(classesArrTypes);
  const uniqueClassDuration = unifyArray(classDurationArr);
  const uniqueDifficulty = unifyArray(classDifficultyArr);
  const uniqueEquipment = unifyArray(classEquipmentArr);
  // console.log("uniqueEquipment", uniqueEquipment);
  // console.log("classEquipmentArr", classEquipmentArr);
  return (
    <div id="filter" className="filterHidden">
      <h2 id="filter-title">Filter Results</h2>
      <img id="closeFilterBtn" class="close-button" src="/images/clsx.svg"></img>
      <br></br>
      <br></br>
      <form action="/private/calendar" method="get" id="filterForm">
        <select name="classType" id="classType" className="select-css">
          <option value="" selected>
            Select class type
          </option>
          {uniqueClassesTypes.map((elem, i) => {
            return (
              <option key={i} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>
        <br></br>
        <select name="trainer" id="trainer" className="select-css">
          <option value="" selected>
            Select Trainer
          </option>
          {uniqueTrainers.map((elem, i) => {
            return (
              <option key={i} value={elem._id}>
                {elem.name} {elem.lastName}
              </option>
            );
          })}
        </select>{" "}
        <br></br>
        <select name="duration" id="duration" className="select-css">
          <option value="" selected>
            Select duration
          </option>
          {uniqueClassDuration.map((elem, i) => {
            return (
              <option key={i} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>{" "}
        <br></br>
        <select name="difficulty" id="difficulty" className="select-css">
          <option value="" selected>
            Select difficulty
          </option>
          {uniqueDifficulty.map((elem, i) => {
            return (
              <option key={i} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>{" "}
        <div className="filterButtonsCont">
          <input type="button" id="applyFilterBtn" value="Apply filter" />
          <div id="resultsFound"></div>
          <input type="reset" id="removeFilterBtn" value="Reset filter" />
          {/* <input type="button" id="closeFilterBtn" value="Close filter" /> */}
        </div>
      </form>
    </div>
  );
}

module.exports = Filter;
