const express = require("express");
const router = express.Router();


const search = require("../db/searchItems");
const getFav = require("../db/get_favourite");
router.post("/:id", (req, res) => {
  const max = req.body.max;
  const min = req.body.min;
  const category_id = req.body.categories;
  const user_id = req.params.id;


   console.log("search",search)
   getFav.getFavItems(user_id)
  .then((fav_items)=>{
      const fav= fav_items;
    search.searchItems(user_id,max,min,category_id)
    .then((items) => {
      let fav_arr=[];
      for(let obj of fav){
        fav_arr.push(obj.item_id);
      }
      const templateVars = {user_id:user_id, items: items,fav_arr:fav_arr};
      res.render("featured",templateVars);
     })
  }).catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});
module.exports = router;
