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
      <h3>Filter</h3>
      <form action="/private/calendar" method="get">
        <label for="classType">Class type</label>
        <select name="classType" id="classType" multiple>
          <option value="" disabled>
            Select class type
          </option>
          {uniqueClassesTypes.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>
        <br></br>
        <br></br>
        <label for="trainer">Trainer</label>
        <select name="trainer" id="trainer" multiple>
          <option value="" disabled>
            Select Trainer
          </option>
          {uniqueTrainers.map((elem) => {
            return <option value={elem._id}>{elem.name}</option>;
          })}
        </select>{" "}
        <br></br>
        <br></br>
        <label for="duration">Duration</label>
        <select name="duration" multiple>
          <option value="" disabled>
            Select duration
          </option>
          {uniqueClassDuration.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>{" "}
        <br></br>
        <br></br>
        <label for="difficulty">Difficulty</label>
        <select name="difficulty" multiple>
          <option value="" disabled>
            Select difficulty
          </option>
          {uniqueDifficulty.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>{" "}
        <br></br>
        <br></br>
        <label for="equipment">Required equipment</label>
        <select name="equipment" multiple>
          <option value="" disabled>
            Select equipment
          </option>
          {uniqueEquipment.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>
        <br></br>
        <br></br>
        <input type="button" id="addFilter" value="Filter" />
        <input type="button" id="removeFilter" value="Reset filter" />
        <input type="button" id="closeFilter" value="Close filter" />
      </form>
    </div>
  );
}

module.exports = Filter;
