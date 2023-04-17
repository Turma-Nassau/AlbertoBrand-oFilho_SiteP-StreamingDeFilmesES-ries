var sqlite3 = require("sqlite3");
const DB_FILE = "db.sqlite";
const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: DB_FILE,
})

module.exports = db;