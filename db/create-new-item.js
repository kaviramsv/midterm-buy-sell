const connectionToDB = require("./connection");

const newItem = (owner_id, category_id, name, description, price_in_cents, image_url) => {
  console.log(image_url);
  return connectionToDB
  .query(`INSERT INTO items (owner_id, category_id, name, description, price_in_cents, image_url) VALUES ( $1, $2, $3, $4, $5, $6);`, [owner_id, category_id, name, description, price_in_cents, image_url])
  .then((res) => {
    console.log(res.rows);
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

const editItem = (id) => {
  console.log(id);
  return connectionToDB
  .query(`SELECT * FROM items where id = $1`, [id])
  .then((res) => {
    // console.log("AIJAZ begin", res.rows, "aijaz - end");
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
}

const updateItem = (owner_id, category_id, name, description, price_in_cents, image_url, id) => {
  console.log("UPDATE-PARAMS: ", owner_id, category_id, name, description, price_in_cents, image_url, id);
  return connectionToDB
  .query(`update items set category_id = $2, name = $3, description = $4, price_in_cents = $5, image_url = $6 where id = $7 AND owner_id = $1;`, [owner_id, category_id, name, description, price_in_cents, image_url, id])
  .then((res) => {
    console.log(res);
    return res;
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = { newItem, editItem, updateItem };