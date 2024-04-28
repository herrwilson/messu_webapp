const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  companyID: {
    type: String,
    required: true,
  },
});

const Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;
