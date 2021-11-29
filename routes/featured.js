const express = require("express");
const router = express.Router();

const getItems = require("../db/get-featured-items");
const getFav = require("../db/get_favourite");

router.get("/:id", (req, res) => {
  const user_id = req.params.id;
  //items for user except his own id
  getFav.getFavItems(user_id)
  .then((fav_items)=>{
      const fav= fav_items;
    getItems.getFeaturedItems(req.params.id)

    .then((items) => {
      console.log("fav",fav);
      let fav_arr=[];
      for(let obj of fav){
        fav_arr.push(obj.item_id);
      }
      console.log("items",items)
    console.log(fav_arr);
    const templateVars = {user_id:user_id, items: items,fav_arr:fav_arr};
    res.render("featured",templateVars);
     })
  })
  .catch(err => {
    res.status(500).json({ error: err.message })
  });
});

module.exports = router;






// router.get("/:id", (req, res) => {
//   const user_id = req.params.id;
//   getItems.getFeaturedItems(req.params.id)
//   .then((items) => {
//      console.log("in js",items);
//     const templateVars = {user_id:user_id, items: items};
//     res.render("featured",templateVars);

//   })
//   .catch(err => {
//     res.status(500).json({ error: err.message })
//  });
// });
// module.exports = router;
