const express = require("express");
const router = express.Router();
const userFnc = require("../db/get-user");
const addFav = require("../db/add-favourite-items");
const delFav = require("../db/del-favourite-items");

// router.get("/:items_id/:user_id"), (req, res) => {
//   const user_id = req.params.user_id;
//   const items_id = req.params.items_id;
//   res.redirect(`post/${items.id}/${user.id}`)
// }


router.post("/:items_id/:user_id/:is_fav", (req, res) => {
  const user_id = req.params.user_id;


  const items_id = req.params.items_id;
  const is_fav = req.params.is_fav;
 console.log("is_fav",typeof(is_fav));
  //add an entry to favourites table

//based on string value of false
 if(is_fav==="false"){
  addFav.addFavouriteItems(items_id,user_id)
  .then((items) => {
     console.log("in add fav",items);
    res.redirect(`/featured`);
  });
}else{
  delFav.delFavouriteItems(items_id,user_id)
  .then((items) => {
     console.log("in del fav",items);
    res.redirect(`/featured`);
  });
}
});

module.exports = router;

