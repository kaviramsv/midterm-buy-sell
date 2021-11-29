const express = require("express");
const router = express.Router();

const getItems = require("../db/get-featured-items");


router.get("/:id", (req, res) => {
  const user_id = req.params.id;
  //items for user except his own id
  getItems.getFeaturedItems(req.params.id)
  .then((items) => {
     console.log("in js",items);
    const templateVars = { items: items};
    res.render("featured",templateVars);

  })
  .catch(err => {
    res.status(500).json({ error: err.message })
 });
});
module.exports = router;
