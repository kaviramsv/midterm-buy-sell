const connectionToDB = require("./connection");

const getFeaturedItems = (userId) => {
  return connectionToDB
    .query(
      `SELECT * ,to_char(time_stamp, 'YYYY-MM-DD HH24:MI:SS') AS postTime FROM items WHERE owner_id != $1 ORDER BY time_stamp DESC;`,
      [userId]
    )
    .then((res) => {
      return res.rows;
    });
};

module.exports = {
  getFeaturedItems,
};
