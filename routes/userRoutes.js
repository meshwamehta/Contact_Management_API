const express = require("express");
const {
  registerUser,
  userLogin,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

//on /register url
router.post("/register", registerUser);

//on login url
router.post("/login", userLogin);

//on current user url
router.get("/current", validateToken, currentUser);

module.exports = router;
