const React = require("react");
const Class = require("../../modules/Class");

function GenerateScriptDivFilter(props) {
  const classesArr = props;
  classesArr.map((obj, i) => {
      const variableName="classObj"+i;
      const variableName = new Class(  obj.trainer,
        obj.name,
        obj.description,
        obj.closureMessage,
        obj.scheduled,
        obj.duration,
        obj.classType,
        obj.difficulty,
        obj.url,
        obj.equipment);
  }

  return <div></div>;
}

module.exports = GenerateScriptDivFilter;
