const express = require("express");
const router = express.Router();
const User = require("../models/user");

// route to get all users
router.get("/api/user", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// route to create a new user
router.post("/api/user", async (req, res) => {
  const user = new User({
    userName: req.body.firstName,
    userLastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    userPassword: req.body.userPassword,
    userID: req.body.userID,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// route to delete a user
router.delete("/api/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
