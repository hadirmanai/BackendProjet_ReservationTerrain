// reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courtId: { type: mongoose.Schema.Types.ObjectId, ref: 'TennisCourt', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  // Autres champs pour la réservation
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
