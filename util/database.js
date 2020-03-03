const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'rodrigo0', {
  dialect: 'mysql',
  host: '127.0.0.1',
});

module.exports = sequelize;
