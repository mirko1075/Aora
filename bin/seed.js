const mongoose = require("mongoose");
const class = require("./../models/User.model");
const user = require("./../models/Class.model");
const users = require("./users-mock-data");
const reviews = require("./classes-mock-data");


//Connection to DB parameters
const DB_NAME = "AORA-DB";
const DB_CONN_STR = `mongodb://localhost:27017/${DB_NAME}`;

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
    const pr = User.create(users);
    return pr;
  })
  .then((usersCreated) => {
    console.log(`Users ${usersCreated.length} created`);
    // Creating Classes

    const updatedClasses = Classes.map((classObj, i) => {
      const user = usersCreated[i];
      classObj.users = [user._id];
      return classObj;
    });
    const pr = class.create(updatedClasses);
    return pr;
  })
  .then((createdClasses) => {
    console.log(`Created ${createdClasses.length} Classes`);
    const updatedReviews = reviews.map((reviewObj, i) => {
      const class = createdClasses[i];
      reviewObj.classId = [class._id];
      return reviewObj;
    });
    mongoose.connection.close();
  })
  .then((createdClasses) => {
    console.log(`Created ${createdClasses.length} Classes`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
