//Require Express as Middleware
const express = require("express");
const router = express.Router();
const cookieSession = require('cookie-session');


//Call item-query to use as functions
const itemFnc = require("../db/item-query");
const viewItemFnc = require("../db/view_item-query");
const createNewItem = require("../db/create-new-item")

router.get("/admin/:id", (req, res) => {
  itemFnc.getItemsByUser(req.params.id).then((items) => {
    const templateVars = {
      items: items,
    };
    res.render("my-items", templateVars);
  });
});

router.get("/new", (req, res) => {

  res.render("create-item");
});

router.post("/new", (req, res) => {
  const owner_id = req.session.user_id //get id from session;
  const category_id = req.body.category_id; //req.body.category_id;
  const toy_name = req.body.toy_name;
  const description = req.body.description;
  const price_in_cents = req.body.price;
  const image_url = req.body.image_url;

  createNewItem.newItem(owner_id, category_id, toy_name, description, price_in_cents, image_url).then((res) => {
    const templateVars = {
      item: items,
    };
    console.log(templateVars);
    //res.render("items_show", templateVars);
  });
  //res.redirect("/admin/:id");
});


router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const user_id = req.session.user_id;
  viewItemFnc.getItemById(req.params.id).then((item) => {
    const templateVars = {
      item,
      user_id,
    };
    // console.log(templateVars);
    res.render("items_show", templateVars);
  });
});

router.get("/", (req, res) => {
  res.render("my-items");
});

module.exports = router;
