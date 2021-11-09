const mongoose = require("mongoose");

const MONGODB_URL = "mongodb://127.0.0.1:27017";

const connectDB = (callbackFn) => {
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
    .then(() => {
      console.log(`Connected to MongoDB at ${MONGODB_URL}`);

      callbackFn();
    });
}

module.exports = connectDB;