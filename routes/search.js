const express = require("express");
const router = express.Router();

const getItems = require("../db/get-featured-items");
const getFav = require("../db/get_favourite");

router.post("/", (req, res) => {
  const form_email = req.body.email;
  userFnc.getUser(form_email).then((user) => {
   console.log("redirecting to featured");



    .then((items) => {


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
