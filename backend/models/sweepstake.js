const mongoose = require("mongoose");

const sweepstakeSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
});

const Sweepstake = mongoose.model("Sweepstake", sweepstakeSchema);

module.exports = Sweepstake;
