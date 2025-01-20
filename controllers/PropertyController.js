const Property = require("../models/Property.js");

// Add Property
const addProperty = async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    const savedProperty = await newProperty.save();
    res.status(201).json({
      message: "Property added successfully",
      property: savedProperty,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error adding property",
      error: err.message,
    });
  }
};

// Get All Properties
const getProperty = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json({
      message: "Properties fetched successfully",
      properties,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching properties",
      error: err.message,
    });
  }
};

// Get Property by ID
const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({
      message: "Property fetched successfully",
      property,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching property",
      error: err.message,
    });
  }
};

// Update Property
const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProperty = await Property.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({
      message: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating property",
      error: err.message,
    });
  }
};

// Delete Property
const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({
      message: "Property deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting property",
      error: err.message,
    });
  }
};

module.exports = {
  addProperty,
  getProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
};
