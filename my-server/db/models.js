// db/models.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const LocalStorageItem = sequelize.define('LocalStorageItem', {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  LocalStorageItem,
};
