const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@description Get All Contact
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async function (request, response) {
  const contacts = await Contact.find();
  //while using json you cant use writehead or reaponse.end you have to use status
  response.status(200).json(contacts);
});
//@description Create New Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async function (request, response) {
  const { name, email, phone } = request.body;
  if (!name || !email || !phone) {
    response.status(400);
    throw new Error("All fields require");
  }
  const contacts = Contact.create({
    name,
    email,
    phone,
  });
  response.status(201).json(contacts);
});
//@description get Contact based on :id
//@route GET /api/contacts/:id
//@access public
const fetchContact = asyncHandler(async function (request, response) {
  //To specifically finding contact by id
  const getContact = await Contact.findById(request.params.id);
  if (!getContact) {
    response.status(404);
    throw new Error("Contact Not Found");
  }
  //while using json you cant use writehead or reaponse.end you have to use status
  response.status(200).json(getContact);
});
//@description Update Contact based on :id
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (request, response) => {
  //To specifically finding contact by id
  const getContact = await Contact.findById(request.params.id);
  if (!getContact) {
    response.status(404);
    throw new Error("Contact Not Found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );

  //while using json you cant use writehead or reaponse.end you have to use status
  response.status(200).json(updatedContact);
});
//@description Delete Contact based on :id
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (request, response) => {
  const contact = await Contact.findById(request.params.id);
  if (!contact) {
    response.status(404);
    throw new Error("Contact Not Found");
  }
  await Contact.deleteOne();
  response.status(200).json(contact);
});
module.exports = {
  getContacts,
  createContact,
  fetchContact,
  updateContact,
  deleteContact,
};
