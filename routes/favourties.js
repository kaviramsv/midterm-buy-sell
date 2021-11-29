//Require Express as middleware
const express = require("express");
const router = express.Router();

//Call item-query.js to use functions
const itemsFnc = require("../db/item-query");

router.get("/:id", (req, res) => {
  itemsFnc
    .getFavItemsByUser(req.params.id)
    .then((items) => {
      const templateVars = {
        items: items,
      };
      res.render("favourites", templateVars);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
