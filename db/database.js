const env = require("dotenv").config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  "root",
  process.env.SQLPASS,
  {
    host: process.env.MYSQLHOST || "127.0.0.1",
    dialect: "mysql",
  }
);

module.exports = sequelize;
