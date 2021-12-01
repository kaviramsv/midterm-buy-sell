//Require Express as Middleware
const express = require("express");
const router = express.Router();

//Call item-query to use as functions
const itemFnc = require("../db/item-query");
const viewItemFnc = require("../db/view_item-query");
// const createNewItem = require("../db/create-new-item")

router.get("/admin", (req, res) => {
  const user_id = req.session.user_id;
  itemFnc.getItemsByUser(user_id).then((items) => {
    const templateVars = {
      items,
      user_id,
    };
    res.render("my-items", templateVars);
  });
});

router.get("/new", (req, res) => {
  res.render("create-item");
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  viewItemFnc.getItemById(req.params.id).then((item) => {
    console.log(item);
    const templateVars = {
      item: item,
    };
    console.log(templateVars);
    res.render("items_show", templateVars);
  });
});

router.get("/", (req, res) => {
  res.render("my-items");
});

module.exports = router;
