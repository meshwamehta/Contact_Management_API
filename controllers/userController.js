const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//@description Register
//@route Post /api/users/register
//@access public
const registerUser = asyncHandler(async (request, response) => {
  const { username, email, password } = request.body;
  if (!username || !email || !password) {
    response.status(400).json({ message: "All fields are required" });
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    response.status(400).json({ message: "This user email is alredy exist" });
  }
  //Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed pass:" + hashedPassword);
  const createUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (createUser) {
    response.status(201).json({ _id: createUser.id, email: createUser.email });
  } else {
    response.status(400);
    throw new Error("User data is not valid");
  }

  response.status(200).json(createUser);
});
//@description Login
//@route Post /api/users/login
//@access public
const userLogin = asyncHandler(async (request, response) => {
  response.json({ message: "Register the user" });
});

//@description Current user
//@route Get /api/users/current
//@access private
const currentUser = asyncHandler(async (request, response) => {
  response.json({ message: "Register the user" });
});

module.exports = { registerUser, userLogin, currentUser };
