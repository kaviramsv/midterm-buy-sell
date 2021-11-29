const connectionToDB = require("./connection");

const addFavouriteItems = (itemId,userId) => {
  return connectionToDB.query(` INSERT INTO favourites (item_id, user_id)
  VALUES ($1, $2) Returning * ;`,[itemId,userId])
  .then((res) => {
    console.log("afi:",res.rows);
    return res.rows;
  });
};

module.exports = {
  addFavouriteItems,
};
