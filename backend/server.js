const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const app = express();
const companyRoutes = require("./routes/companyRoutes");
const passRoutes = require("./routes/passRoutes");
const sweepstakeRoutes = require("./routes/sweepstakeRoutes");
const userRoutes = require("./routes/userRoutes");
const voteRoutes = require("./routes/voteRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// routes
app.use(companyRoutes);
app.use(passRoutes);
app.use(sweepstakeRoutes);
app.use(userRoutes);
app.use(voteRoutes);

// start the server & listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// connect to mongoDB
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
