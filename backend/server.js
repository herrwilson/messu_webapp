const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const app = express();
const companyRoutes = require("./routes/companyRoutes");
const passRoutes = require("./routes/passRoutes");
const sweepstakeRoutes = require("./routes/sweepstakeRoutes");
const userRoutes = require("./routes/userRoutes");
const voteRoutes = require("./routes/voteRoutes");

// middleware
app.use(express.json());

// company routes
app.use(companyRoutes);
// pass routes
app.use(passRoutes);
// sweepstake routes
app.use(sweepstakeRoutes);
// user routes
app.use(userRoutes);
// vote routes
app.use(voteRoutes);

// start the server & listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// connect to mongoDB
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
