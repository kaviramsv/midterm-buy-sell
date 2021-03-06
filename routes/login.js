const express = require("express");
const router = express.Router();
const userFnc = require("../db/get-user");
const getItems = require("../db/get-featured-items");

router.get("/", (req, res) => {
  const user_id =req.session.user_id;
  if(user_id){
    res.redirect(`/featured`);
  }
  res.render("login.ejs");
});

router.post("/", (req, res) => {
  const form_email = req.body.email;

  userFnc.getUser(form_email).then((user) => {

  req.session.user_id = user.id;
  res.redirect(`/featured`);
  }).catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});
module.exports = router;
