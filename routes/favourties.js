//Require Express as middleware
const express = require("express");
const router = express.Router();

//Call item-query.js to use functions
const itemsFnc = require("../db/item-query");
const delFav = require("../db/del-favourite-items");

router.get("/", (req, res) => {
  const user_id = req.session.user_id;
  itemsFnc
    .getFavItemsByUser(user_id)
    .then((items) => {
      console.log(items,"fav")
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

router.post("/delete/:items_id", (req, res) => {
  const user_id = req.session.user_id;
  const items_id = req.params.items_id;
  delFav
  .delFavouriteItems(items_id,user_id)
  .then((items) => {
    res.redirect(`/favourites`);
  });

});

module.exports = router;
