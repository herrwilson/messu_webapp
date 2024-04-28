const express = require("express");
const router = express.Router();
const Sweepstake = require("../models/sweepstake");

// route to get all sweepstakes
router.get("/api/sweepstake", async (req, res) => {
  try {
    const sweepstakes = await Sweepstake.find();
    res.json(sweepstakes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// route to create a new sweepstake
router.post("/api/sweepstake", async (req, res) => {
  const sweepstake = new Sweepstake({
    userID: req.body.userID,
    emailAddress: req.body.emailAddress,
  });
  try {
    const newSweepstake = await sweepstake.save();
    res.status(201).json(newSweepstake);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// route to delete a company
router.delete("/api/sweepstake/:id", async (req, res) => {
  try {
    await Sweepstake.findByIdAndDelete(req.params.id);
    res.json({ message: "Sweepstake deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
