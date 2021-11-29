/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const itemFnc = require("../db/item-query");

router.get("/", (req, res) => {
  itemFnc.getItems().then((items) => {
    res.json(items);



  });
});

module.exports = router;

// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     let query = `SELECT * FROM items`;
//     console.log(query);
//     db.query(query)
//       .then((data) => {
//         const items = data.rows;
//         res.json({ items });
//       })
//       .catch((err) => {
//         res.status(500).json({ error: err.message });
//       });
//   });
//   return router;
// };
