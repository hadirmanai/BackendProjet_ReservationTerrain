const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({

 Nom: {
    type: String,
    required: [true, "PLease tell us your name!"],
  },
  Description: {
    type: String,
    required: true,
  },


});
module.exports = Service = mongoose.model("ServiceS",ServiceSchema);
