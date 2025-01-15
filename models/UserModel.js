const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  userImage: { type: String, default: "" },
  userFirstName: { type: String, default: "" },
  userLastName: { type: String, default: "" },
  userEmail: { type: String, default: "" },
  userPassword: { type: String, default: "" },
  userPhoneNumber: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
