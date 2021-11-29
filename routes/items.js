//Require Express as Middleware
const express = require("express");
const router = express.Router();

//Call item-query to use as functions
const itemFnc = require("../db/item-query");

router.get("/", (req, res) => {
  itemFnc.getItems().then((items) => {
    res.json(items);
  });
});

module.exports = router;
