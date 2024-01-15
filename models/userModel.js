const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: { unique: true },
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      unique: [true, "email should be unique"],
      required: [true, "Please add the contact email address"],
    },
    password: {
      type: String,
      required: [true, "Please add the password."],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", userSchema);
