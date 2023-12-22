// court.js
const express = require('express');
const router = express.Router();
const TennisCourt = require('../model/TerrainCourt');

// Route pour obtenir tous les terrains de tennis
exports.Validete = async (req, res) => {
  try {
    const courts = await TennisCourt.find();
    res.status(200).json(courts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tennis courts' });
  }
};

// Route pour ajouter un nouveau terrain
exports.PostTerrain = async (req, res) => {
    const { name, description } = req.body;
  
    try {
      const existingCourt = await TennisCourt.findOne({ name });
  
      if (existingCourt) {
        return res.status(400).json({ error: 'Court already exists' });
      }
  
      const newCourt = new TennisCourt({
        name,
        description,
        availability: true, // Vous pouvez définir l'état initial de disponibilité
        // Autres détails du terrain
      });
  
      await newCourt.save();
      return res.status(201).json({ message: 'Court added successfully', court: newCourt });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to add court' });
    }
  };
  


  exports.getTerrain = async (req, res) => {
    try {
      await TennisCourt.find().then((result) => {
        res.send(result);
      });
    } catch (err) {
      console.log(err);
    }
  };
  
