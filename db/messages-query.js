const connectionToDB = require("./connection");

const getItemInbox = (user_id) => {
  return connectionToDB
    .query(
      `SELECT items.id, items.name AS itemname,
      items.price_in_cents, recipient_id, users.name
      FROM messages
      JOIN items ON items.id = item_id JOIN users ON users.id = recipient_id
      WHERE sender_id = $1
      GROUP BY items.name, items.price_in_cents, messages.recipient_id, items.id, users.name;`,
      [user_id]
    )
    .then((res) => {
      return res.rows;
    });
};

const getMessageHistory = (itemId, user1Id, user2Id) => {
  return connectionToDB
    .query(
      `SELECT
      *,
      to_char(send_time, 'YYYY-MM-DD HH24:MI:SS') AS sendTime
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
  getItemInbox,
};
