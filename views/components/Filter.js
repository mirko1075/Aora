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
  const uniqueTrainers = unifyArray(trainersArr);
  const uniqueClassesTypes = unifyArray(classesArrTypes);
  console.log("uniqueClasses", uniqueClassesTypes);
  return (
    <div id="filter" className="filter">
      <h3>Filter</h3>
      <form>
        <select type="select" name="classType">
          {uniqueClassesTypes.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>
        <br></br>
        <br></br>
        <select name="trainer">
          {uniqueTrainers.map((elem) => {
            return <option value={elem._id}>{elem.name}</option>;
          })}
        </select>
      </form>
    </div>
  );
}

module.exports = Filter;
