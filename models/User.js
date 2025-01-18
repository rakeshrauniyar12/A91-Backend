const mongoose = require("mongoose");
const Property = require("./Property.js");
const FamilyMember = require("./FamilyMember.js");
const Agent = require('./Agent.js')

const User = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  userImage: { type: String, default: "" },
  userFirstName: { type: String, default: "" },
  userLastName: { type: String, default: "" },
  userEmail: { type: String, default: "" },
  userPassword: { type: String, default: "" },
  userPhoneNumber: { type: String, default: "" },
  familyMembers: [
    { type: mongoose.Schema.Types.ObjectId, ref: "FamilyMember" },
  ],
  userProperty: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  userPreference: [{ type: mongoose.Schema.Types.ObjectId }],
  userRequirement: [{ type: mongoose.Schema.Types.ObjectId }],
  userCalender: [{ type: mongoose.Schema.Types.ObjectId }],
  userHistory: [{ type: mongoose.Schema.Types.ObjectId }],
  userAgent: [{ type: mongoose.Schema.Types.ObjectId,ref:"Agent" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);
