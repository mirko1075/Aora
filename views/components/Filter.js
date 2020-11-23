const React = require("react");

function Filter(props) {
  const classesArr = props.classesArr.foundClasses;
  let uniqueNames = classesArr.map((elem) => {
    return elem.trainer[0];
  });
  _.uniq(uniqueNames, true);
  console.log("ClassesArr:", classesArr);
  return (
    <div id="filter" className="filter">
      <h3>Filter</h3>
      <form>
        <select type="select" name="classType">
          {classesArr.map((elem) => {
            return <option value={elem.classType}>{elem.classType}</option>;
          })}
        </select>
        <select name="trainer">
          {uniqueNames.map((elem) => {
            return <option value={elem.trainer[0]._id}>{elem.name}</option>;
          })}
        </select>
      </form>
    </div>
  );
}

module.exports = Filter;
