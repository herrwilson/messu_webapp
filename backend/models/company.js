const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyID: {
    type: String,
    required: true,
    unique: true,
  },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
