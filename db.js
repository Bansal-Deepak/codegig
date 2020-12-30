const { Sequelize } = require("sequelize");
// const db = new Sequelize(
//   `postgres://postgres:postgres56#@localhost:5432/codegig`
// );
const db = new Sequelize("codegig", "postgres", "postgres56#", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = {
  db,
};
