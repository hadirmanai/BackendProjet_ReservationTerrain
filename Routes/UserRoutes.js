const express = require("express");
const { signup, signin } = require("../Controller/UserController");
const { registerValidation, validation, loginValidation } = require("../Controller/Validiteur");
 const User= require("../Controller/UserController");

// express router
const router = express.Router();

// authenfication for signup && sign in

router.post("/signup", registerValidation(), validation, signup);
router.post("/signin", loginValidation(), validation, signin);
router.get("/allUser",  User.getUser)
router.get("/UserofID/:id",  User.getUserOfId)
router.delete('/users/:userId', User.DeleteUser)
router.put('/approve/:userId', User.uprove)




module.exports = router;