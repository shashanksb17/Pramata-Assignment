const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

//local modules
const User = require("../models/user.model");
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ success: true, token: token, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Failed to fetch user:", error);
    res.status(500).json({ message: "Failed to authenticate user" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      message: "User registered successfully",
      success: true,
      token: token,
      name: newUser.name,
    });
  } catch (error) {
    console.log("Failed to register user:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});


module.exports = router;
