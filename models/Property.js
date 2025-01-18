const mongoose = require("mongoose");

const Property = new mongoose.Schema({
  propertyId: { type: mongoose.Schema.Types.ObjectId },
  propertyImage: { type: String, required: true, default: "" },
  propertyName: { type: String, default: "" },
  propertyRent: { type: Number, required: true },
  propertySale: { type: Number, required: true },
  propertyLike: { type: Number, default:0 },
  propertyDislike: { type: Number, default:0 },
  propertyBedType: { type: String },
  propertyArea: { type: String, required: true },
  propertyDistance: { type: String, required: true },
  propertyStatus: { type: String, },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Property", Property);
