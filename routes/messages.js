//Require express as middleware
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("messages");
});

module.exports = router;
