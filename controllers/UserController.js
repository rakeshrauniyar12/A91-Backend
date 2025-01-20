const User = require("../models/User.js");

const registerUser = async (req, res) => {
  try {
    const {
      userEmail,
      userPassword,
      userFirstName,
      userLastName,
      userPhoneNumber,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userPassword, SALT_ROUNDS);

    // Create new user
    const newUser = new User({
      userEmail,
      userPassword: hashedPassword,
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
    const { userEmail, userPassword } = req.body;

    // Check if user exists
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(
      userPassword,
      user.userPassword
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, userEmail: user.userEmail },
      JWT_SECRET,
      {
        expiresIn: "1h", // Token expiration time
      }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser };
