const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    lastName: String,
    email: {String, unique: true },
    gender: String,
    birthDate: Date,
    city: String,
    country: String,
    password: String,
    type: {String, enum:["U","T"]},
    picUrl: String,
    userHeight: Number,
    userWeight: Number,
    userGoal:   {String, default: "", enum: ["STRENGHT","WEIGHT LOSS", "MASS GAIN", "GENERAL HEALTH"]} ,
    userBodyType:  {String, default: false, enum: ["Ectomorph", "Endomorph","Esomorph"]} ,
    userWeightGoal: Number,
    trainerBio: String,
    trainerRate: Number,
    scheduledClasses: {[Schema.Types.ObjectId, ref: 'Class']}
  });

  const User = mongoose.model("User", userSchema);
  model.exports = userSchema
