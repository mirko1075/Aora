const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema(
  {
    trainer: [{ type: Schema.Types.ObjectId, ref: "User" }],
    name: { type: String, required: true, unique: true },
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
  },
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
