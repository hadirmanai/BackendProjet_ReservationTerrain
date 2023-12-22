const express = require("express");
const ContactClient = require("../Controller/ClientController");
const router = express.Router();

router.get("/ContactClient", ContactClient.getContactClient);
router.post("/ajouter_ContactClient", ContactClient.AddContactClient);
router.delete("/DelteClient/:_id", ContactClient.Delete_Client);
Service
module.exports = router ;
