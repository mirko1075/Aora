const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  trainer: [{ type: Schema.Types.ObjectId, ref: "User" }],
  name: { String, unique: true },
  description: String,
  closureMessage: String,
  scheduled: Date,
  duration: Number,
  classType: { type: String, enum: ["Hiit", "Strenght", "Stretch"] },
  difficulty: { type: String, enum: ["Hard", "Medium", "Easy"] },
  url: String,
  equipment: [
    { type: String, enum: ["Yoga mat", "Dumbells", "Elastic band", "None"] },
  ],
});

const Class = mongoose.model("User", classSchema);
model.exports = classSchema;
