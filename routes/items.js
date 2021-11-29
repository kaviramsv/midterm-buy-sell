//Require Express as Middleware
const express = require("express");
const router = express.Router();

//Call item-query to use as functions
const itemFnc = require("../db/item-query");

router.get("/admin/:id", (req, res) => {
  itemFnc.getItemsByUser(req.params.id).then((items) => {
    const templateVars = {
      items: items,
    };
    res.render("my-items", templateVars);
  });
});

module.exports = router;
