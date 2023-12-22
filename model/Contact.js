const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
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
  Adresse: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  CV: {
    type: String, // or you can use the appropriate data type for file storage, such as Buffer
  //  required: true,
  },
  LettreMotivation: {
    type: String, // or you can use the appropriate data type for file storage, such as Buffer
  //  required: true,
  },


});
module.exports = Contact = mongoose.model("Contact", ContactSchema);
