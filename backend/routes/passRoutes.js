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
  try {

    const { userID, companyID } = req.body;
    const newPass = await Pass.create({ userID, companyID });
    
    res.status(201).json(newPass);

  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
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


