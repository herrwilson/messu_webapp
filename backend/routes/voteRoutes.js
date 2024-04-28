const express = require("express");
const router = express.Router();
const Company = require("../models/vote");

// route to get all votes
router.get("/api/vote", async (req, res) => {
  try {
    const votes = await Vote.find();
    res.json(votes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new company
router.post("/api/vote", async (req, res) => {
  const vote = new Vote({
    userID: req.body.userID,
    category: req.body.category,
    companyID: req.body.companyID,
  });
  try {
    const newVote = await vote.save();
    res.status(201).json(newVote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// route to delete a vote
router.delete("/api/vote/:id", async (req, res) => {
  try {
    await Vote.findByIdAndDelete(req.params.id);
    res.json({ message: "Vote deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
