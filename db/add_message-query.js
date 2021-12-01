const connectionToDB = require("./connection");

const addMessage = (sender_id, reciever_id, item_id, message) => {
  return connectionToDB
  .query(`INSERT INTO messages (sender_id, reciever_id, item_id, message) VALUES ( $1, $2, $3, $4) RETURNING id;`, [sender_id, reciever_id, item_id, message])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = { addMessage };