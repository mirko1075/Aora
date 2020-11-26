const React = require("react");
const Layout = require("./Layout");

function Progress(props) {
  const data = props.userFound;
  const classTypeObj = {
    classtype: "",
    attended: 0,
  };
  let classTypeTemp = "";
  let attendedTemp = 0;
  const tempArr = [...data.scheduledClasses];
  for (i = 0; i < tempArr.length; i++) {
    if (tempArr[i] != classTypeTemp) {
      classTypeTemp = tempArr[i];
      attendedTemp = 1;
    } else {
      attendedTemp++;
    }
  }
  console.log(data);
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
