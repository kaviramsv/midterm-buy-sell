const connectionToDB = require("./connection");

const delFavouriteItems = (itemId,userId) => {
  return connectionToDB.query(` DELETE  FROM favourites
  WHERE item_id=$1 and user_id=$2 ;`,[itemId,userId])
  .then((res) => {
    console.log("dfi:",res.rows);
    return res.rows;
  });
};

module.exports = {
  delFavouriteItems,
};
