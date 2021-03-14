const Sequelize = require('sequelize');
const db = require('../config/db');

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = Item;