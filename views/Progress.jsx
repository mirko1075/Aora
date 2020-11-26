const React = require("react");
const Layout = require("./Layout");

function Progress(props) {
  const data = props.userFound;
  const classTypeArr = [];

  const tempArr = [...data.scheduledClasses];
  let classTypeTemp = tempArr[0];
  let attendedTemp = 0;
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i].name != classTypeTemp) {
      classTypeTemp = tempArr[i].name;
      attendedTemp++;
      classTypeArr.push({
        classType: classTypeTemp,
        attended: attendedTemp,
      });
      attendedTemp = 0;
      console.log("Change type");
    } else {
      attendedTemp++;
    }
    console.log("tempArr[i]", tempArr[i].name);
  }
  console.log("classTypeTemp", classTypeTemp);
  return (
    <Layout title="Progress">
      <div className="header">
        <h1>My Progress</h1>
      </div>

      <div className="scroll-container">
        {data.scheduledClasses.map((oneScheduledClass, i) => {
          return <div>{data.scheduledClasses.classType}</div>;
        })}
      </div>
    </Layout>
  );
}

module.exports = Progress;
