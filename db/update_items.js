const connectionToDB = require("./connection");

const getItemIdUserid = (itemId,userId) => {
  return connectionToDB.query(` SELECT * FROM items
  WHERE id=$1 AND owner_id= $2;`,[itemId,userId])
  .then((res) => {
    console.log("update get page",res.rows);
    return res.rows[0];
  });
};

module.exports = {
  getItemIdUserid,
};
