const connectionToDB = require("./connection");

// const getSentMessages = (item_id, user_id) => {
//   return connectionToDB
//     .query(
//       `SELECT
//       m.message AS message, m.send_time AS send_time,
//       s.id AS sender_id,
//       s.name AS sender,
//       r.id AS recipient_id,
//       r.name AS recipient
//       FROM messages AS m
//       JOIN users AS s ON m.sender_id = s.id
//       JOIN users AS r ON m.recipient_id = r.id
//       WHERE item_id = $1 AND sender_id = $2;
//       `,
//       [item_id, user_id]
//     )
//     .then((res) => {
//       return res.rows;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// const getRecievedMessages = (item_id, user_id) => {
//   return connectionToDB
//     .query(
//       `SELECT
//       m.message AS message, m.send_time AS send_time,
//       s.id AS sender_id,
//       s.name AS sender,
//       r.id AS recipient_id,
//       r.name AS recipient
//       FROM messages AS m
//       JOIN users AS s ON m.sender_id = s.id
//       JOIN users AS r ON m.recipient_id = r.id
//       WHERE item_id = $1 AND recipient_id = $2;
//       `,
//       [item_id, user_id]
//     )
//     .then((res) => {
//       return res.rows;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

const getMessageHistory = (itemId, user1Id, user2Id) => {
  return connectionToDB
    .query(
      `SELECT
      *
      FROM messages
      WHERE item_id = $1 AND
      (sender_id = $2 or sender_id = $3) AND
      (recipient_id = $2 or recipient_id = $3);
      `,
      [itemId, user1Id, user2Id]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getMessageHistory,
};
