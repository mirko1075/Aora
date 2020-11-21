const React = require("react");

function ClassCalendar(props) {
  // Receives parameters:
  // ID Class -- idClass
  // ClassName -- className
  // Image URL -- imageUrl
  // Scheduled time -- scheduled
  // Trainer Name -- trainer
  // Duration  --  duration
  // ClassType  --  classType
  // Url  --  url
  // Equipment  -- equipment

  return (
    <div>
      <h1>{props.className}</h1>
      <img src={props.imageUrl} width="100" alt="" />
      <p>{props.scheduled}</p>
      <p>{props.idClass}</p>
      <p>{props.trainer}</p>
      <p>{props.duration}</p>
      <p>{props.classType}</p>
      <p>{props.equipment}</p>
      <p>{props.url}</p>
    </div>
  );
}

module.exports = ClassCalendar;
