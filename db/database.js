const env = require("dotenv").config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("yoga-api", "root", process.env.SQLPASS, {
  dialect: "mysql",
});

module.exports = sequelize;
