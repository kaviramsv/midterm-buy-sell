//Require Express as Middleware
const express = require("express");
const router = express.Router();

//Call item-query to use as functions
const itemFnc = require("../db/item-query");

router.get("/user/:id", (req, res) => {
  itemFnc.getItemsByUser(req.params.id).then((items) => {
    const templateVars = {
      items: items,
    };
    console.log(templateVars);
    res.render("my-items", templateVars);
  });
});

router.get("/", (req, res) => {
  res.render("my-items");
});

module.exports = router;
