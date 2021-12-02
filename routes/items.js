//Require Express as Middleware
const express = require("express");
const router = express.Router();
const cookieSession = require('cookie-session');


//Call item-query to use as functions
const itemFnc = require("../db/item-query");
const viewItemFnc = require("../db/view_item-query");
const createNewItem = require("../db/create-new-item")

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
  const user_id = req.session.user_id;
  const templateVars = {
    user_id,
  };
  res.render("create-item", templateVars);
});

router.post("/new", (req, res) => {
  const owner_id = req.session.user_id //get id from session;
  const category_id = req.body.category_id; //req.body.category_id;
  const toy_name = req.body.toy_name;
  const description = req.body.description;
  const price_in_cents = req.body.price;
  const image_url = req.body.image_url;

  createNewItem.newItem(owner_id, category_id, toy_name, description, price_in_cents, image_url).then((items) => {
    const templateVars = {
      item: items,
    };
    console.log("KB--------------BEGIN", templateVars);
    //res.render("items_show", templateVars);
  });
  res.redirect("/items/admin");
});

router.get("/edit/:id", (req, res) => {
  const user_id = req.session.user_id;
  const id = req.params.id;

  createNewItem.editItem(id).then((items) => {
    const templateVars = {
      item: items[0],
      user_id,
    };
      console.log(" tatto begin", templateVars, "tatto-end");
    res.render("create-item", templateVars);
  });


  //res.render("create-item", templateVars);
});

router.post("/update", (req, res) => {
  const id = req.body.id;
  const owner_id = req.session.user_id //get id from session;
  const category_id = req.body.category_id; //req.body.category_id;
  const toy_name = req.body.toy_name;
  const description = req.body.description;
  const price_in_cents = req.body.price;
  const image_url = req.body.image_url;
console.log("update values", owner_id, category_id, toy_name, description, price_in_cents, image_url, id);
  createNewItem.updateItem(owner_id, category_id, toy_name, description, price_in_cents, image_url, id).then((items) => {
    const templateVars = {
      item: items,
    };
    console.log(templateVars);
    //res.render("items_show", templateVars);
  });
  res.redirect("/items/admin");
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
