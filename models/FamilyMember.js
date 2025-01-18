const mongoose = require("mongoose");

const familyMember = new mongoose.Schema({
  fMemberId: { type: mongoose.Schema.Types.ObjectId },
  fMemberImage: { type: String, default: "" },
  fMemberFirstName: { type: String, default: "" },
  fMemberLastName: { type: String, default: "" },
  fMemberEmail: { type: String, default: "" },
  fMemberPassword: { type: String, default: "" },
  fMemberPhoneNumber: { type: String, default: "" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FamilyMember", familyMember);;