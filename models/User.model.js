const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    lastName: String,
    email: {type: String, unique: true },
    gender: {String, enum: ["Male", "Female", "Other"]},
    birthDate: Date,
    city: String,
    country: String,
    password: String,
    userType: {type: String, enum:["user","trainer"]},
    picUrl: String,
    userHeight: Number,
    userWeight: Number,
    userGoal:   {type: String, default: "", enum: ["STRENGHT","WEIGHT LOSS", "MASS GAIN", "GENERAL HEALTH"]} ,
    userBodyType:  {type: String, default: false, enum: ["Ectomorph", "Endomorph","Esomorph"]} ,
    userWeightGoal: Number,
    trainerBio: String,
    trainerRate: Number,
    scheduledClasses: [{ type: Schema.Types.ObjectId, ref: ‘Class’ }]
  });

  const User = mongoose.model("User", userSchema);
  model.exports = userSchema
