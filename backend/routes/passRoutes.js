const express = require("express");
const router = express.Router();
const Pass = require("../models/pass");

// route to get all passes
router.get("/api/pass", async (req, res) => {
  try {
    const passes = await Pass.find();
    res.json(passes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// route to create a new pass
router.post("/api/pass", async (req, res) => {
  const pass = new Pass({
    userID: req.body.userID,
    companyID: req.body.companyID,
  });
  try {
    const newPass = await pass.save();
    res.status(201).json(newPass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// route to delete a pass
router.delete("/api/pass/:id", async (req, res) => {
  try {
    await Pass.findByIdAndDelete(req.params.id);
    res.json({ message: "Pass deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
