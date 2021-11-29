//Require Express as Middleware
const express = require("express");
const router = express.Router();

//Call view_item-query to use as functions
const viewItemFnc = require("../db/view_item-query");

router.get("/view", (req, res) => {
  db.query(`SELECT * FROM items WHERE id = 3;`)
      .then(data => {
        const item = data.rows;
        res.json({ item });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
});

module.exports = router;