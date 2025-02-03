const User = require("../models/User.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

const registerUser = async (req, res) => {
  try {
    const {
      userEmail,
      userFirstName,
      userLastName,
      userPhoneNumber,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }


    // Create new user
    const newUser = new User({
      userEmail,
      userFirstName,
      userLastName,
      userPhoneNumber,
    });

    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", userId: savedUser._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { userEmail } = req.body;

    // Check if user exists
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, userEmail: user.userEmail },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d", // Token expiration time
      }
    );

    res.status(200).json({ message: "Login successful", token,user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getUserDetails = async (req, res) => {
  try {
    // Get the token from headers
    const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Find user by ID
    const user = await User.findById(decoded.userId).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { registerUser, loginUser, getUserDetails };
