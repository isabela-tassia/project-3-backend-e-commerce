const mongoose = require("mongoose");
const serverDb = "com";
const db = async () => {
  try {
    const dbs = await mongoose.connect(
      `mongodb://localhost:27017/${serverDb}`,
      {
        useCreateIndex: true,
        useNewUrlParsers: true,
        useUnifiedTopology: true,
      }
    );
    console.log("conected to db", dbs.connections[0].name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
