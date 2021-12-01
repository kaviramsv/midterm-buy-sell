const connectionToDB = require("./connection");

const addMessage = (sender_id, item_id, reciever_id, message) => {
  return connectionToDB
    .query(
      `INSERT INTO messages (sender_id, item_id, recipient_id, message) VALUES ($1, $2, $3, $4) RETURNING id;`,
      [sender_id, item_id, reciever_id, message]
    )
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addMessage };
