const connectionToDB = require("./connection");

const getItems = () => {
  return connectionToDB.query(`SELECT * from items;`).then((res) => {
    return res.rows;
  });
};

module.exports = {
  getItems,
};
