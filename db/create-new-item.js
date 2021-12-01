const connectionToDB = require("./connection");

const newItem = (owner_id, category_id, name, description, price_in_cents, image_url) => {
  return connectionToDB
  .query(`INSERT INTO items (owner_id, category_id, name, description, price_in_cents, image_url) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING id;`, [owner_id, category_id, name, description, price_in_cents, image_url])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = { newItem };