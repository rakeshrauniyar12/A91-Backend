const Property = require("../models/Property");
const User = require("../models/User");

// Add a new property and link it to the user
exports.addProperty = async (req, res) => {
  try {
    const { userId, ...propertyData } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new property
    const newProperty = new Property(propertyData);
    const savedProperty = await newProperty.save();

    // Add property ID to the user's userProperty array
    user.userProperty.push(savedProperty._id);
    await user.save();

    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a property (only the fields provided in the request body)
exports.updateProperty = async (req, res) => {
  try {
    const { userId, propertyId } = req.params;

    // Ensure property belongs to the user before updating
    const user = await User.findOne({ _id: userId, userProperty: propertyId });
    if (!user) {
      return res
        .status(403)
        .json({ message: "Unauthorized: Property not linked to this user" });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      { $set: req.body },
      { new: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a property and remove reference from user's userProperty
exports.deleteProperty = async (req, res) => {
  try {
    const { userId, propertyId } = req.params;

    // Ensure property belongs to the user before deleting
    const user = await User.findOne({ _id: userId, userProperty: propertyId });
    if (!user) {
      return res
        .status(403)
        .json({ message: "Unauthorized: Property not linked to this user" });
    }

    const deletedProperty = await Property.findByIdAndDelete(propertyId);
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Remove property from user's userProperty array
    user.userProperty = user.userProperty.filter(
      (id) => id.toString() !== propertyId
    );
    await user.save();

    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all properties of a user based on property type
exports.getAllPropertyByTypeOfPropertyAndUserId = async (req, res) => {
  try {
    const { userId, propertyType } = req.params;

    // Find the user
    const user = await User.findById(userId).populate({
      path: "userProperty",
      match: { propertyType },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Filter only the properties that match the given type
    const properties = user.userProperty;

    if (!properties.length) {
      return res.status(404).json({ message: "No properties found" });
    }

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
