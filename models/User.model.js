const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    birthDate: Date,
    city: String,
    country: String,
    password: String,
    userType: { type: String, enum: ["user", "trainer"] },
    picUrl: String,
    userHeight: Number,
    userWeight: Number,
    userGoal: {
      type: String,
      default: "",
      enum: [
        "Strenght",
        "Weight loss",
        "Mass gain",
        "General health",
        "",
        null,
      ],
    },
    userBodyType: {
      type: String,
      default: null,
      enum: ["Ectomorph", "Endomorph", "Mesomorph", null],
    },
    userWeightGoal: Number,
    trainerBio: String,
    trainerRate: Number,
    scheduledClasses: [{ type: Schema.Types.ObjectId, ref: "Class" }],
  },
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
