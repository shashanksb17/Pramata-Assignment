const express = require("express");

const jwt = require('jsonwebtoken');




// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken.userId; // Store the user ID in the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Failed to verify token:", error);
    res.status(401).json({ message: "Token verification failed" });
  }
};


module.exports = verifyToken ;
