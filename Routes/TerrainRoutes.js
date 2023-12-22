const express = require("express");
const { registerValidation, validation, loginValidation } = require("../Controller/Validiteur");
 const terrain= require("../Controller/TerrainController");

// express router
const router = express.Router();


router.get("/allTerrain",  terrain.getTerrain)
router.post("/AddTerrain",  terrain.PostTerrain)


module.exports = router;