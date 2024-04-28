const mongoose = require("mongoose");
const config = require("./config");
const Company = require("./models/company");
const Pass = require("./models/pass");
const Sweepstake = require("./models/sweepstake");
const User = require("./models/user");
const Vote = require("./models/vote");

// connect to mongoDB
mongoose
  .connect(config.mongoURI)
  .then(async () => {
    console.log("Connected to MongoDB");

    // mock data creation
    const mockCompanies = [
      {
        companyName: "Company A",
        companyID: "1",
      },
      {
        companyName: "Company B",
        companyID: "2",
      },
      {
        companyName: "Company C",
        companyID: "3",
      },
    ];

    // inserting company mock data into the collection & handling errors
    try {
      await Company.insertMany(mockCompanies);
      console.log("Company data inserted successfully");
    } catch (err) {
      console.error("Error inserting company data:", err);
      mongoose.connection.close();
      process.exit(1);
    }

    const mockPasses = [
      {
        userID: "1234",
        companyID: "1",
      },
      {
        userID: "1235",
        companyID: "2",
      },
      {
        userID: "1236",
        companyID: "3",
      },
    ];

    try {
      await Pass.insertMany(mockPasses);
      console.log("Pass data inserted successfully");
    } catch (err) {
      console.error("Error inserting pass data:", err);
      mongoose.connection.close();
      process.exit(1);
    }

    const mockSweepstakes = [
      {
        userID: "1",
        emailAddress: "firstuser@email.com",
      },
      { userID: "2", emailAddress: "seconduser@email.com" },
      { userID: "3", emailAddress: "thirduser@email.com" },
    ];

    try {
      await Sweepstake.insertMany(mockSweepstakes);
      console.log("Sweepstake data inserted successfully");
    } catch (err) {
      console.error("Error inserting sweepstake data:", err);
      mongoose.connection.close();
      process.exit(1);
    }

    const mockUsers = [
      {
        firstName: "Abby",
        lastName: "Abbot",
        emailAddress: "abby.abbot@email.com",
        userPassword: "strongpassword1",
        userID: "1",
      },
      {
        firstName: "Bobby",
        lastName: "Kotik",
        emailAddress: "bobby.kotik@email.com",
        userPassword: "strongpassword2",
        userID: "2",
      },
      {
        firstName: "Cobby",
        lastName: "Consty",
        emailAddress: "cobby.consty@email.com",
        userPassword: "strongpassword3",
        userID: "3",
      },
    ];

    try {
      await User.insertMany(mockUsers);
      console.log("User data inserted successfully");
    } catch (err) {
      console.error("Error inserting user data:", err);
      mongoose.connection.close();
      process.exit(1);
    }

    const mockVotes = [
      {
        userID: "1",
        category: "Most interesting",
        companyID: "1",
      },
      {
        userID: "2",
        category: "Most budget-friendly",
        companyID: "2",
      },
      {
        userID: "3",
        category: "Most thrilling",
        companyID: "3",
      },
    ];

    try {
      await Vote.insertMany(mockVotes);
      console.log("Vote data inserted successfully");
    } catch (err) {
      console.error("Error inserting vote data:", err);
      mongoose.connection.close();
      process.exit(1);
    }

    // close connection to mongoDB
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
