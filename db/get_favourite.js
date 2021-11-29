const connectionToDB = require("./connection");

const getFavItems = (userId) => {
  return connectionToDB.query(`SELECT DISTINCT item_id FROM favourites WHERE user_id = $1;`,[userId])
  .then((res) => {
    console.log("gfi:",res.rows);
    return res.rows;
  });
};

module.exports = {
  getFavItems,
};
