const connectionToDB = require("./connection");

const searchItems = (user_id,max,min,category_id) => {
  return connectionToDB.query(
    `SELECT * FROM items WHERE owner_id != $1 AND category_id=$4 AND price_in_cents >= $3 AND price_in_cents <= $2`,

    [user_id,max,min,category_id ])
  .then((res) => {
    return res.rows;
  });
};

module.exports = {
  searchItems,
};
