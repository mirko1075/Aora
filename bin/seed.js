require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./../models/User.model");
const Class = require("./../models/Class.model");
const usersArr = require("./user-mockup");
const classesArr = require("./class-mockup");

//Connection to DB parameters
const DB_NAME = process.env.DB_NAME.toString();
const DB_CONN_STR = process.env.MONGODB_URI.toString();

// SEED SEQUENCE

// ESTABILISH DB CONNECTION

mongoose
  .connect(DB_CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log("Connected to DB " + DB_NAME);
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then((databaseDropped) => {
    console.log("Database dropped");

    // Create documents from ARRAY users
    const pr = User.create(usersArr);
    return pr;
  })
  .then((usersCreated) => {
    console.log(`Users ${usersCreated.length} created`);
    // Creating Classes
    const trainersArr = usersCreated.filter((userObj) => {
      if (userObj.userType == "trainer") {
        return userObj;
      }
    });
    // console.log("trainersArr", trainersArr);

    const updatedClasses = classesArr.map((classObj) => {
      let randomNum = Math.floor(Math.random() * trainersArr.length);
      // console.log("trainersArr.length", trainersArr.length);
      // console.log("randomNum", randomNum);
      // console.log("Random trainer:", trainersArr[randomNum]);
      classObj.trainer = trainersArr[randomNum]._id;
      return classObj;
    });
    const pr = Class.create(updatedClasses);
    return pr;
  })
  .then((createdClasses) => {
    console.log(`Created ${createdClasses.length} Classes`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
