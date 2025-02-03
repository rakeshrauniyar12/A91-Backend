const express = require("express");
const {
  registerUser,
  loginUser,
  getUserDetails,
} = require("../controllers/UserController.js");

const router = express.Router();

// Register route
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/getuser", getUserDetails);

module.exports = router;
