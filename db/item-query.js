const connectionToDB = require("./connection");

const getAllItems = () => {
  return connectionToDB.query(`SELECT * from items;`).then((res) => {
    return res.rows;
  });
};

const getItemsByUser = (id) => {
  return connectionToDB
    .query(
      `SELECT items.id,image_url, items.name, price_in_cents, items.description
    FROM items
    JOIN users ON users.id = owner_id
    WHERE owner_id = $1;`,
      [id]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getFavItemsByUser = (id) => {
  return connectionToDB
    .query(
      `SELECT *
      FROM favourites
      JOIN users ON users.id = user_id
      JOIN items ON items.id = item_id
      WHERE user_id = $1;
      `,
      [id]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getItemById = (id) => {
  return connectionToDB
    .query(
      `
  SELECT items.id, items.name AS itemname, price_in_cents, users.name, users.id AS recipient_id
  FROM items
  JOIN users ON users.id = owner_id
  WHERE items.id = $1;
  `,
      [id]
    )
    .then((res) => {
      return res.rows[0];
    });
};

module.exports = {
  getAllItems,
  getItemsByUser,
  getFavItemsByUser,
  getItemById,
};
