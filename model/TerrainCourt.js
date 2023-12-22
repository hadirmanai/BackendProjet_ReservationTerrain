const mongoose = require('mongoose');

// Définition du schéma pour les terrains de tennis
const tennisCourtSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true},
  availability: { type: Boolean, default: true },
  // Autres champs pour le terrain de tennis
});

// Création du modèle à partir du schéma pour interagir avec la collection 'TennisCourt'
const TennisCourt = mongoose.model('TennisCourt', tennisCourtSchema);

module.exports = TennisCourt; // Exportation du modèle de terrain de tennis
