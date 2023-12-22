const express = require("express");
const Service = require("../Controller/ServiceController");
const router = express.Router();

router.get("/Service", Service.getService);
router.post("/ajouter_Service",Service.AddService);
router.put("/Modifier_Service", Service.UpdateService);
router.delete("/Annule_Service", Service.Delete_Service);

module.exports = router ;
