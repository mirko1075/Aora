const React = require("react");
const { addZeroBefore } = require("../../utils/utils");

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
            <li
              key={i}
              id={
                "class-" +
                i +
                "-" +
                actualDay.getDate() +
                "" +
                (actualDay.getMonth() + 1)
              }
            >
              <article
                key={i}
                id={
                  "class-" +
                  i +
                  "-" +
                  actualDay.getDate() +
                  "" +
                  (actualDay.getMonth() + 1)
                }
                data-scheduled={
                  actualDay.getDate() + "" + (actualDay.getMonth() + 1)
                }
                data-classType={obj.classType}
                data-duration={obj.duration}
                data-difficulty={obj.difficulty}
                data-trainer={obj.trainer[0]._id}
                // data-equipment={obj.equipment.map((equipObj) => {
                //   return {equipObj};
                // })}
                className={
                  "classArticle " +
                  actualDay.getDate() +
                  "" +
                  (actualDay.getMonth() + 1)
                }
              >
                <a
                  href={"/private/classDetail/" + obj._id}
                  className="class-card"
                >
                  <div className="profile-pic">
                    <img src="/images/face1.png"></img>
                  </div>
                  <div>
                    <h3>
                      {addZeroBefore(obj.scheduled.getHours())}:
                      {addZeroBefore(obj.scheduled.getMinutes())} |{" "}
                      {obj.classType}
                    </h3>
                    <p className="small-info">
                      {obj.duration} min. | {obj.trainer[0].name}{" "}
                      {obj.trainer[0].lastName}
                    </p>
                  </div>
                  <div className="flechita">
                    <div>
                      <img src="/images/flechita.svg"></img>
                    </div>
                  </div>
                </a>
              </article>
            </li>
          );
        })}
        {/*Allow scrolling of last item past the filter */}
        {<div className="empty-class-card"></div>}
        {<div className="empty-class-card"></div>}
        {<div className="empty-class-card"></div>}
        {<div className="empty-class-card"></div>}
        {<div className="empty-class-card"></div>}
        {<div className="empty-class-card"></div>}
      </ul>
    </div>
  );
}

module.exports = ClassCalendar;
