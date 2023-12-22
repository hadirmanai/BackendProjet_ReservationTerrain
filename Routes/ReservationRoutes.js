const express = require("express");
const { registerValidation, validation, loginValidation } = require("../Controller/Validiteur");
 const Reservation= require("../Controller/ReservationControlleur");

// express router
const router = express.Router();



router.post("/AddResrvation",  Reservation.AddResrvation)
router.get("/allResrvation",  Reservation.getALLRes)


module.exports = router;