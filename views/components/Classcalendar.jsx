const React = require("react");

function ClassCalendar(props) {
  const classesArr = props.classesArr.foundClasses;
  // Receives parameters:
  // ID Class -- idClass
  // Class name -- name
  // Image URL -- url
  // Scheduled time -- scheduled
  // Trainer Name -- trainer
  // Duration  --  duration
  // ClassType  --  classType
  // Url  --  url
  // Equipment  -- equipment
  console.log("classesArr", classesArr);
  return (
    <div>
      {classesArr.map((obj, i) => {
        return (
          <div id="{obj.idClass}" key={i}>
            <h1>{obj.name}</h1>
            <p>{obj.scheduled.getDay() + "/" + obj.scheduled.getMonth()}</p>
            <p>{obj.trainer.name}</p>
            <p>{obj.duration}</p>
            <p>{obj.classType}</p>
            {obj.equipment.map((equipObj) => {
              return <p>{equipObj}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

module.exports = ClassCalendar;
