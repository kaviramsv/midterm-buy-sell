const express = require("express");
const router = express.Router();

//Call item-query.js to use functions

const delItemFnc = require("../db/delete_listing");

const getItemFnc = require("../db/get_item_by_itemid_userid");//getItembyUserIDItemId


router.post("/delete/:items_id", (req, res) => {
  const user_id = req.session.user_id;
  const items_id = req.params.items_id;
  delItemFnc.delItem(items_id)
  .then((items) => {
    console.log("in my listing rout",items);
    res.redirect(`/items/admin`);
  });

});

router.get("/update/:itemid/:userid", (req, res) => {
  const user_id = req.params.userid;
  const item_id = req.params.itemid;
  console.log(user_id,item_id);
  getItemFnc.getItembyUserIDItemId(user_id,item_id)

  .then((item) => {
  console.log("inside update get");
  const templateVars={
      user_id,item
  }
  res.render("update_page.ejs",templateVars);
});

});
module.exports = router;
