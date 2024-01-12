const mongoose = require("mongoose");
//Mongoose helps in defining data models, validating data, and simplifying interactions with MongoDB.

const connectDb = async () => {
  try {
    //this function will not execute untilit makes connection with database
    //await is use for pausing the execution
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database Connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
