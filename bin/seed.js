require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./../models/User.model");
const Class = require("./../models/Class.model");
// const usersArr = require("./user-mockup");
// const classesArr = require("./class-mockup");

//Connection to DB parameters
const DB_NAME = process.env.DB_NAME.toString();
const DB_CONN_STR = process.env.MONGODB_URI.toString();
const USERS = process.env.USERS;
const CLASSES = process.env.CLASSES;
// CREATING ARRAYS
const namesArr = [
  "Marc",
  "Antony",
  "George",
  "Marco",
  "Tom",
  "Lucia",
  "Stephanie",
  "Diana",
];
const lastNamesArr = [
  "Smith",
  "Lopez",
  "Sanchez",
  "Bredley",
  "Bianchi",
  "Lopis",
  "Ramirez",
  "Rossi",
];
const usersArr = [];
const classesArr = [];
for (let i = 0; i < USERS; i++) {
  const userObj = {
    name: randomize(namesArr),
    lastName: randomize(lastNamesArr),
    email: randomWord(1) + "." + randomWord(1) + "@" + randomWord(1) + ".com",
    gender: randomize(["Male", "Female", "Other"]),
    birthDate: new Date("1975-10-30"),
    city: "Barcelona",
    country: "Spain",
    password: "1234567",
    userType: randomize(["user", "trainer"]),
    picUrl: "",
    userHeight: 178,
    userWeight: 72,
    userGoal: randomize([
      "Strenght",
      "Weight loss",
      "Mass gain",
      "General health",
    ]),
    userBodyType: randomize(["Ectomorph", "Endomorph", "Mesomorph"]),
    userWeightGoal: 80,
    trainerBio: null,
    trainerRate: null,
    scheduledClasses: [],
  };
  usersArr.push(userObj);
}

for (let i = 0; i < CLASSES; i++) {
  const classObj = {
    name: randomWord(1),
    description: randomWord(5),
    closureMessage: randomWord(5),
    scheduled: addDays(new Date(), randomize([1, 2, 3, 4, 5, 6, 7])),
    duration: randomize([30, 60, 90, 120]),
    classType: randomize(["Hiit", "Strenght", "Stretch"]),
    difficulty: randomize(["Hard", "Medium", "Easy"]),
    url: randomize([
      "https://www.youtube.com/embed/qWy_aOlB45Y",
      "https://youtu.be/qULTwquOuT4",
      "https://youtu.be/7Vb3xB3cJxM",
    ]),
    equipment: randomize([
      ["Yoga mat"],
      ["Yoga mat", "Dumbells"],
      ["Yoga mat", "Dumbells", "Elastic band"],
      ["Dumbells"],
      ["Elastic band"],
      ["None"],
    ]),
  };
  classesArr.push(classObj);
}

function addDays(dateObj, numDays) {
  let num = Math.round(Math.random() * numDays - 0);
  dateObj.setDate(dateObj.getDate() + num);
  // console.log("dateObj", dateObj, "num", num, "numDays", numDays);
  return dateObj;
}
function randomWord(wordsNum) {
  let str = "";
  if (wordsNum > 1) {
    str = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "");
    for (let i = 0; i < wordsNum; i++) {
      str += " " + str;
    }
  } else {
    str = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "");
  }
  return str;
}

function randomize(arr) {
  let numRandom = Math.round(Math.random() * (arr.length - 1));
  // console.log("numRandom", numRandom);
  return arr[numRandom];
}

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
    // console.log(usersCreated);
    const trainersArr = usersCreated.filter((userObj) => {
      if (userObj.userType == "trainer") {
        return userObj;
      }
    });
    // console.log("trainersArr", trainersArr);
    // console.log("classesArr", classesArr);
    const updatedClasses = classesArr.map((classObj) => {
      let randomNum = Math.floor(Math.random() * trainersArr.length);
      // console.log("trainersArr.length", trainersArr.length);
      // console.log("randomNum", randomNum);
      // console.log("Random trainer:", trainersArr[randomNum]);
      classObj.trainer = trainersArr[randomNum]._id;
      return classObj;
    });
    console.log("updatedClasses to import: " + updatedClasses.length);
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
