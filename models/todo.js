// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const todo = sequelize.define('todo', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: Sequelize.STRING,
//   description: Sequelize.STRING
// });

// module.exports = todo;

const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Todo = sequelize.define('Todo', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Todo;

