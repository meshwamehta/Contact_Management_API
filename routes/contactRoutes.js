const express = require("express");
const router = express.Router();
//these objects are exported from controllers
const {
  getContacts,
  createContact,
  fetchContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

//to make all contact routes private instead of using it sepreatly for each routes
router.use(validateToken);
//'/api/contacts' is common for every route I replace it with '/'
//router.route("/").get(getContacts);
//router.route("/").post(createContact);
//below wriiten is shortcut of above code
router.route("/").get(getContacts).post(createContact);
//fetch update and delete is called upon '/id' url thats why they all are together in one line
router.route("/:id").get(fetchContact).put(updateContact).delete(deleteContact);

module.exports = router;
