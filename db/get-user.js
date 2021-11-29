const connectionToDB = require("./connection");

const getUser = (email) => {
  return connectionToDB.query(`SELECT * FROM users WHERE email =$1;`,[email]).then((res) => {
    console.log("res.rows",res.rows[0]);
    return res.rows[0];
  });
};

module.exports = {
  getUser,
};
