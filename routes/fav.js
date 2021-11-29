const express = require("express");
const router = express.Router();
const userFnc = require("../db/get-user");
const addFav = require("../db/add-favourite-items");


// router.get("/:items_id/:user_id"), (req, res) => {
//   const user_id = req.params.user_id;
//   const items_id = req.params.items_id;
//   res.redirect(`post/${items.id}/${user.id}`)
// }


router.post("/:items_id/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  const items_id = req.params.items_id;
 console.log("hi");
  //add an entry to favourites table
  addFav.addFavouriteItems(items_id,user_id)
  .then((items) => {
     console.log("in fav",items);
    res.redirect(`/featured/${user_id}`);
  });

});

module.exports = router;

