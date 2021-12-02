const connectionToDB = require("./connection");

const delItem = (itemId) => {
  return connectionToDB.query(` DELETE  FROM items
  WHERE id=$1 RETURNING *;`,[itemId])
  .then((res) => {
    console.log("DELETED ITEMS",res.rows);
    return res.rows;
  });
};

module.exports = {
  delItem,
};
