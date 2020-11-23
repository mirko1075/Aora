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
  let classEquipmentArr = classesArr.map((elem) => {
    const equipment = elem.equipment.map((equipObj) => {
      return equipObj;
    });
    console.log("elem", elem);
  });
  const uniqueTrainers = unifyArray(trainersArr);
  const uniqueClassesTypes = unifyArray(classesArrTypes);
  const uniqueClassDuration = unifyArray(classDurationArr);
  const uniqueDifficulty = unifyArray(classDifficultyArr);
  const uniqueEquipment = unifyArray(classEquipmentArr);
  console.log("uniqueEquipment", uniqueEquipment);
  return (
    <div id="filter" className="filter">
      <h3>Filter</h3>
      <form>
        <label for="classType">Class type</label>
        <select name="classType" id="classType">
          <option value="">Select class type</option>
          {uniqueClassesTypes.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>
        <br></br>
        <br></br>
        <label for="trainer">Trainer</label>
        <select name="trainer" id="trainer">
          <option value="">Select Trainer</option>
          {uniqueTrainers.map((elem) => {
            return <option value={elem._id}>{elem.name}</option>;
          })}
        </select>{" "}
        <br></br>
        <br></br>
        <label for="duration">Duration</label>
        <select name="duration">
          <option value="">Select duration</option>
          {uniqueClassDuration.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>{" "}
        <br></br>
        <br></br>
        <label for="difficulty">Difficulty</label>
        <select name="difficulty">
          <option value="">Select difficulty</option>
          {uniqueDifficulty.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>{" "}
        <br></br>
        <br></br>
        <label for="equipment">Equipment</label>
        <select name="equipment">
          <option value="">Select equipment</option>
          {uniqueEquipment.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>
      </form>
    </div>
  );
}

module.exports = Filter;
