const express = require("express");
const {
  addProperty,
  getProperty,
  deleteProperty,
  updateProperty,
  getPropertyById
} = require("../controllers/PropertyController.js");

const router = express.Router();

// Register route
router.post("/addproperty", addProperty);
router.get("/getproperty", getProperty);
router.get("/getpropertybyid/:id", getPropertyById);
router.delete("/deleteproperty", deleteProperty);
router.patch("/updateproperty", updateProperty);

module.exports = router;