require('dotenv').config();

const Sequelize = require('sequelize');

const config = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || 'boulter97',
    password: process.env.DB_PASSWORD || '123',
    database: process.env.DB_NAME || 'ecommerce_db'
  },
  
};

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(config.database.database, config.database.username, config.database.password, {
      host: config.database.host,
      port: config.database.port,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
