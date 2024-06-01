const mongoose = require("mongoose");

const passSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  companyID: {
    type: String,
    required: true,
    unique: true,
  },
});

const Pass = mongoose.model("Pass", passSchema);

module.exports = Pass;