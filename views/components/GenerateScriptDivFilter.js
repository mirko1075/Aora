const React = require("react");
const Class = require("../../modules/Class");

function GenerateScriptDivFilter(props) {
  const classesArr = props.classesArr.foundClasses;
  //   console.log("classesArr", classesArr);
  let divsArr = [];
  let actualDay = null;

  classesArr.map((obj, i) => {
    let divObjToInsert = new Object();
    obj.scheduled != actualDay ? (actualDay = obj.scheduled) : null;
    const equipmentArr = obj.equipment.map((equipObj) => {
      return { equipObj };
    });
    const id =
      "class-" + i + "-" + actualDay.getDate() + "" + actualDay.getMonth();
    const className =
      "class " + actualDay.getDate() + "" + actualDay.getMonth();

    divObjToInsert.id = id;
    divObjToInsert.className = className;
    divObjToInsert.name = obj.name;
    divObjToInsert.scheduled = obj.scheduled;
    divObjToInsert.trainerName = obj.trainer.name;
    divObjToInsert.trainerId = obj.trainer._id;
    divObjToInsert.duration = obj.duration;
    divObjToInsert.classType = obj.classType;
    divObjToInsert.equipment = equipmentArr;
    divsArr.push(divObjToInsert);
  });
  let stringDivs = JSON.stringify(divsArr);
  stringDivs = stringDivs.replace("&quot;", "'");
  console.log("stringDivs", stringDivs);
  //   return <script>const stringDivs={{ stringDivs }}</script>;
  return <div></div>;
}

module.exports = GenerateScriptDivFilter;
