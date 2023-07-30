// db/index.js
const { Sequelize } = require('sequelize');

// Cambia estos valores con la información de tu base de datos PostgreSQL
const sequelize = new Sequelize('mercat', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
