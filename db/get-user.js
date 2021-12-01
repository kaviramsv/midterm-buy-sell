const connectionToDB = require("./connection");

const getUser = (email) => {
  return connectionToDB
    .query(`SELECT * FROM users WHERE email =$1;`, [email])
    .then((res) => {
      return res.rows[0];
    });
};

module.exports = {
  getUser,
};
