//Require Express as middleware
const express = require("express");
const router = express.Router();

//Call item-query.js to use functions
const itemsFnc = require("../db/item-query");

router.get("/", (req, res) => {
  const user_id = req.session.user_id;
  itemsFnc
    .getFavItemsByUser(user_id)
    .then((items) => {
      const templateVars = {
        items,
        user_id,
      };
      res.render("favourites", templateVars);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
