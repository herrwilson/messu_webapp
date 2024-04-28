const express = require("express");
const router = express.Router();
const Company = require("../models/company");

// route to get all companies
router.get("/api/company", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// route to create a new company
router.post("/api/company", async (req, res) => {
  const company = new Company({
    companyName: req.body.companyName,
    companyID: req.body.companyID,
  });
  try {
    const newCompany = await company.save();
    res.status(201).json(newCompany);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// route to delete a company
router.delete("/api/company/:id", async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Company deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
