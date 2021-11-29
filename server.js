// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const morgan = require("morgan");

// 'dev' = red - server error codes, yellow - client error codes, cyan for redirection codes, uncolored - other
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Separated Routes for each Resource
const itemsRoutes = require("./routes/items");
const viewItemRoute = require("./routes/view_item");

// Mount all resource routes
app.use("/items", itemsRoutes);
app.use("/view", viewItemRoute);

//get and post for login
// route: /login

//get and post
// route: /register

//GET
//route: /items/
//              :id   VIEW PAGE
//POST
//route: /items/    SEARCH/FILTER
//

//GET and POST
// route: /messages

//GET and POST
// route: /favourites

//GET
// route: /:user_id   my listings

//Post
//route: /:user_id/edit/:item_id
//route: /:user_id/delete/:item_id

//GET
//route: /:user_id/create/  CREATE NEW LISTING PAGE
//POST
//route: /:user_id/create/

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/view", (req, res) => {
  res.render("view_item");
});



app.listen(PORT, () => {
  console.log(`Toy Box listening on port ${PORT}`);
});
