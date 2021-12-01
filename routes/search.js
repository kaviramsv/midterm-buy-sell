const express = require("express");
const router = express.Router();


const search = require("../db/searchItems");
const getFav = require("../db/get_favourite");
router.post("/:id", (req, res) => {
  const max = req.body.max;
  const min = req.body.min;
  const category_id = req.body.categories;
  const user_id = req.params.id;

//if optionvalue==none(category_id=4)
  if(category_id==4){
    res.redirect(`/featured/${user_id}`);
  }

   console.log("search",search)
   getFav.getFavItems(user_id)
  .then((fav_items)=>{
      const fav= fav_items;
    search.searchItems(user_id,category_id,max,min)
    .then((items) => {
      let fav_arr=[];
      for(let obj of fav){
        fav_arr.push(obj.item_id);
      }
      if(items.length===0){
        res.send("<h2>no match found</h2>");
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
