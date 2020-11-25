const React = require("react");
const {addZeroBefore} = require("../../utils/utils");

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
      <ul>
      {classesArr.map((obj, i) => {
        obj.scheduled != actualDay ? (actualDay = obj.scheduled) : null;
        return (
          <li>
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
            // data-equipment={obj.equipment.map((equipObj) => {
            //   return {equipObj};
            // })}
            className={
              "classArticle " + actualDay.getDate() + "" + actualDay.getMonth()
            }
          >
            {/* <h1>{obj.name}</h1>
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
            })} */}
            <div className="class-card">
                <div>
                  <img src="/images/face1.png"></img>
                </div>
                <div>
                  <h3>{addZeroBefore(obj.scheduled.getHours())}:{addZeroBefore(obj.scheduled.getMinutes())} | {obj.classType}</h3>
                  <p className="small-info">{obj.duration} min. | {obj.trainer[0].name} {obj.trainer[0].lastName}</p>
                </div>
            </div>
            <a href={"/private/classDetail/" + obj._id}>Detail</a>
          </article>
          </li>
        );
      })}
      </ul>
    </div>
  );
}

module.exports = ClassCalendar;
