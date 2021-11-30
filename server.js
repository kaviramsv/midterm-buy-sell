// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require('cookie-session');
// PG database client/connection setup
// const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
// const db = new Pool(dbParams);
// db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
// Separated Routes for each Resource
const itemsRoutes = require("./routes/items");
const loginRoutes = require("./routes/login");
const featuredRoutes = require("./routes/featured");
const favouriteRoutes = require("./routes/favourties");
const messagesRoutes = require("./routes/messages");
const addtoFavouritesRoutes = require("./routes/fav");
const searchItemsRoutes = require("./routes/search");
// Mount all resource routes
app.use("/items", itemsRoutes);
app.use("/login", loginRoutes);
app.use("/featured", featuredRoutes);
app.use("/favourites", favouriteRoutes);
app.use("/messages", messagesRoutes);
app.use("/fav",addtoFavouritesRoutes);
app.use("/search",searchItemsRoutes);
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

app.listen(PORT, () => {
  console.log(`Toy Box listening on port ${PORT}`);
});
