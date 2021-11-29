const connectionToDB = require("./connection");

const viewItem = () => {
  return connectionToDB.query(`SELECT * FROM items WHERE id = 3;`).then((res) => {
    return res.rows;
  });
};

module.exports = {
  viewItem,
};
