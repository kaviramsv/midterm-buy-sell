const connectionToDB = require("./connection");

const getItembyUserIDItemId = (userId,itemId) => {
  return connectionToDB.query(`SELECT * FROM items WHERE owner_id=$1 AND id = $2 ;`,[userId,itemId])
  .then((res) => {
    console.log("get items for update",res.rows);
    return res.rows[0];
  });
};

module.exports = {
  getItembyUserIDItemId,
};
