const express = require("express");
const Contact = require("../Controller/ContactController");
const router = express.Router();

router.get("/Contact", Contact.getContact);
router.post("/ajouter_Contact", Contact.AddContact);
router.delete("/delete/:_id", Contact.Delete_Contact);
module.exports = router ;
