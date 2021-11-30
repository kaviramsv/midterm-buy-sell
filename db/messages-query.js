const connectionToDB = require("./connection");

const getSenderMessages = (id) => {
  return connectionToDB
    .query(
      `SELECT *
    FROM MESSAGES`
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getSenderMessages,
};
