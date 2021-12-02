const connectionToDB = require("./connection");

const getFeaturedItems = (userId) => {
  return connectionToDB
    .query(
      `SELECT * FROM items WHERE owner_id != $1 ORDER BY time_stamp DESC;`,
      [userId]
    )
    .then((res) => {
      return res.rows;
    });
};

module.exports = {
  getFeaturedItems,
};
