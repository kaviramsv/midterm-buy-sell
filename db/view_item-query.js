const connectionToDB = require("./connection");

const getAllItems = () => {
  return connectionToDB.query(`SELECT * FROM items;`).then((res) => {
    return res.rows;
  });
};

const getItemById = (id) => {
  return connectionToDB
    .query(
      `SELECT items.id as item_id, items.name as item_name, items.owner_id as reciever_id, price_in_cents, items.description, categories.name as category_name, items.image_url as image_url , users.name as owner_name, users.email as owner_email, users.phone as owner_phone
      FROM items
      JOIN categories ON categories.id = items.category_id
      JOIN users ON users.id = owner_id
      WHERE items.id = $1;`,
      [id]
    )
    .then((res) => {
      console.log(res);
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getAllItems,
  getItemById,
};
