const asyncHandler = require("express-async-handler");
//@description Get All Contact
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async function (request, response) {
  //while using json you cant use writehead or reaponse.end you have to use status
  response.status(200).json({ message: "Get All Contacts" });
});
//@description Create New Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async function (request, response) {
  //while using json you cant use writehead or response.end you have to use status

  const { name, email, phone } = request.body;
  if (!name || !email || !phone) {
    response.status(400);
    throw new Error("All fields require");
  }
  response.status(201).json({ message: "Create New Contacts" });
});
//@description get Contact based on :id
//@route GET /api/contacts/:id
//@access public
const fetchContact = asyncHandler(async function (request, response) {
  //while using json you cant use writehead or reaponse.end you have to use status
  response
    .status(200)
    .json({ message: `Get Contact for ${request.params.id}` });
});
//@description Update Contact based on :id
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (request, response) => {
  //while using json you cant use writehead or reaponse.end you have to use status
  response
    .status(200)
    .json({ message: `Update Contact for ${request.params.id}` });
});
//@description Delete Contact based on :id
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (request, response) => {
  //while using json you cant use writehead or reaponse.end you have to use status
  response
    .status(200)
    .json({ message: `Delete Contact for ${request.params.id}` });
});
module.exports = {
  getContacts,
  createContact,
  fetchContact,
  updateContact,
  deleteContact,
};
