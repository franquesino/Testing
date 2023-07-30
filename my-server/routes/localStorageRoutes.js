// routes/localStorageRoutes.js
const express = require('express');
const router = express.Router();
const { LocalStorageItem } = require('../db/models');

// Obtener todos los elementos del local storage
router.get('/localStorage', async (req, res) => {
  try {
    const localStorageItems = await LocalStorageItem.findAll();
    res.json(localStorageItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los elementos del local storage' });
  }
});

// Crear un nuevo elemento en el local storage
router.post('/localStorage', async (req, res) => {
  const { key, value } = req.body;
  try {
    const localStorageItem = await LocalStorageItem.create({ key, value });
    res.json(localStorageItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear un nuevo elemento en el local storage' });
  }
});

module.exports = router;
