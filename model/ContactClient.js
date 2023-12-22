const mongoose = require("mongoose");

const ContactClientSchema = new mongoose.Schema({
  Nom: {
    type: String,
   required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  NumTel: {
    type: Number,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },


});
module.exports = ContactClient = mongoose.model("ContactClient", ContactClientSchema);
