const express = require("express");
const {
  addProperty,
  deleteProperty,
  updateProperty,
  getAllPropertyByTypeOfPropertyAndUserId,
} = require("../controllers/PropertyController.js");

const router = express.Router();

// Register route
router.post("/addproperty", addProperty);
router.get(
  "/getproperty/:userId/:propertyType",
  getAllPropertyByTypeOfPropertyAndUserId
);
router.delete("/deleteproperty", deleteProperty);
router.put("/updateproperty", updateProperty);

module.exports = router;
