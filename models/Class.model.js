const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
    trainer_id:  {Schema.Types.ObjectId, ref: 'User' },
    name: {String, unique: true},
    description: String,
    closure_message: String,
    scheduled: Date,
    duration: Number,
    class_type:  {String, enum:["Hiit", "Strenght", "Stretch"]} ,
    difficulty: {String, enum: ["Hard", "Medium", "Easy"]},
    url: String,
    equipments: {[String, enum:["Yoga mat", "Dumbells", "Elastic band", "None"]]}
  });

  const Class = mongoose.model("User", classSchema);
  model.exports = classSchema