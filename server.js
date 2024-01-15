const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
//to establish database connection I have called connectDb function
connectDb();
const app = express();
//procee.env.variable is way to access variables from .env
const port = process.env.PORT || 8000;
//middleware for /api/contacts route
//json middleware is used so that client can send data to server ,json hels to parse the data provided to server
app.use(express.json());
//route for crud operation
app.use("/api/contacts", require("./routes/contactRoutes"));
//route for user authentication
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
// app.get("/api/contacts", function (request, response) {
//while using json you cant use writehead or reaponse.end you have to use status
//   response.status(200).json({ message: "get All Contacts" });
// });
app.listen(port, () => {
  console.log("surver running on Port: " + port);
});
