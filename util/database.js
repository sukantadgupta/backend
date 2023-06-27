const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;