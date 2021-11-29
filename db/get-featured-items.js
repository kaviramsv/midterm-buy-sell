const connectionToDB = require("./connection");

const getFeaturedItems = (userId) => {
  return connectionToDB.query(`SELECT * FROM items WHERE owner_id != $1;`,[userId]).then((res) => {
    console.log("gfi:",res.rows);
    return res.rows;
  });
};

module.exports = {
  getFeaturedItems,
};
