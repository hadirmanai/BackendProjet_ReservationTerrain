const Reservation = require("../model/Reservation");

exports.AddResrvation = async (req, res) => {
    const { userId, courtId, startTime, endTime } = req.body;
  
    try {
      // Vérifier la disponibilité du terrain pour l'heure spécifiée
      const existingReservation = await Reservation.findOne({
        courtId,
        $or: [
          { startTime: { $lt: endTime }, endTime: { $gt: startTime } }, // Vérifie les chevauchements d'heures
        ],
      });
  
      if (existingReservation) {
        return res.status(400).json({ error: 'Le terrain n\'est pas disponible à cette heure' });
      }
  
      // Si le terrain est disponible, créer une nouvelle réservation
      const newReservation = new Reservation({
        userId,
        courtId,
        startTime,
        endTime,
        // Autres champs pour la réservation
      });
  
      const savedReservation = await newReservation.save();
      res.status(201).json({ message: 'Réservation créée avec succès', reservation: savedReservation });
    } catch (error) {
      res.status(500).json({ error: 'Impossible de créer la réservation' });
    }
  };


  exports.getALLRes = async (req, res) => {
    try {
      await Reservation.find().then((result) => {
        res.send(result);
      });
    } catch (err) {
      console.log(err);
    }
  };