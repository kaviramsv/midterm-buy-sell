const connectionToDB = require("./connection");

const getUserfromId = (id) => {
  return connectionToDB.query(`SELECT * FROM users WHERE id =$1;`,[id]).then((res) => {
    console.log("res.rows",res.rows[0]);
    return res.rows[0];
  });
};

module.exports = {
  getUserfromId,
};
