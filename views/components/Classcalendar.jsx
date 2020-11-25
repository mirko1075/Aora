const React = require("react");

function ClassCalendar(props) {
  const classesArr = props.classesArr.foundClasses;
  let actualDay = null;

  // Receives parameters:
  // ID Class -- idClass
  // Class name -- name
  // Image URL -- url
  // Scheduled time -- scheduled
  // Trainer Name -- trainer
  // Duration  --  duration
  // classType  --  classType
  // Url  --  url
  // Equipment  -- equipment
  // console.log("classesArr", classesArr);
  return (
    <div>
      {classesArr.map((obj, i) => {
        obj.scheduled != actualDay ? (actualDay = obj.scheduled) : null;
        return (
          <article
            key={i}
            id={
              "class-" +
              i +
              "-" +
              actualDay.getDate() +
              "" +
              actualDay.getMonth()
            }
            data-scheduled={actualDay.getDate() + "" + actualDay.getMonth()}
            data-classType={obj.classType}
            data-duration={obj.duration}
            data-difficulty={obj.difficulty}
            data-trainer={obj.trainer[0]._id}
            className={
              "classArticle " + actualDay.getDate() + "" + actualDay.getMonth()
            }
          >
            <h1>{obj.name}</h1>
            <p>Class type: {obj.classType}</p>
            <p>
              Trainer: {obj.trainer[0].name} {obj.trainer[0].lastName}
            </p>
            <p>
              Scheduled:
              {obj.scheduled.getDate() + "/" + (obj.scheduled.getMonth() + 1)}
            </p>
            <p>Duration: {obj.duration}</p>
            <p>Difficulty: {obj.difficulty}</p>
            <p>Equipment:</p>
            {obj.equipment.map((equipObj) => {
              return <p>{equipObj}</p>;
            })}
            <a href={"/private/classDetail/" + obj._id}>Detail</a>
          </article>
        );
      })}
    </div>
  );
}

module.exports = ClassCalendar;
