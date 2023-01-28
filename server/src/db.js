const mongoose = require("mongoose");
const config = require("./utils/config");

async function connectDB(url) {
  console.log("Connecting to DB...");
  const promise = new Promise((resolve, reject) => {
    mongoose
      .connect(url || config.DB_URI, {})
      .then(() => {
        console.log("DB connection established");
        resolve();
      })
      .catch((error) => {
        console.log("Error connecting to DB");
        reject(error);
      });
  });
  return promise;
}

process.on("SIGINT", function () {
  console.log("SigInt");
  mongoose.connection
    .close()
    .then(() => {
      console.log("Closed DB successfully");
      process.exit(0);
    })
    .catch(() => {
      console.log("Closed DB Failure");
      process.exit(1);
    });
});

module.exports = connectDB;
