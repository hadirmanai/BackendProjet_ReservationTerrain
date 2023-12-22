const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { isDate, isEmail, isMobilePhone } = require("validator");
// adress phone number joinDate gender
const userSchema = new mongoose.Schema({
  id:{
    type:String,
  },
 Nom: {
    type: String,
    required: [true, "PLease tell us your name!"],
  },
  Prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please provided your email !"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail],
  },
  role: {
    type: String,
    enum: ["user","admin"],
    default: "user",
  },
  

  password: {
    type: String,
    required: true,
    //minlength: 8,
    //select: false,
  },
  /*passwordConfirm: {
    type: String,
    //required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },*/
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  approved: { type: Boolean, default: false },
});
module.exports = User = mongoose.model("user", userSchema);
