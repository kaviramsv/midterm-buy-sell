//Require express as middleware
const express = require("express");
const router = express.Router();
const messageQuery = require("../db/messages-query");
const itemQuery = require("../db/item-query");
const newMessage = require("../db/add_message-query");

router.get("/:itemID/:user2ID", (req, res) => {
  const itemID = req.params.itemID;
  const user_id = req.session.user_id;
  const user2ID = req.params.user2ID;

  messageQuery
    .getMessageHistory(itemID, user_id, user2ID)
    .then((conversation) => {
      itemQuery.getItemById(itemID).then((item) => {
        const templateVars = { conversation, user_id, item };
        console.log(templateVars);
        res.render("messages", templateVars);
      });
    });
});

router.post("/new", (req, res) => {
  const sender_id = 2; //req.session.sender_id //get id from session;
  const item_id = 3; //req.body.item_id; //req.body.item_id;
  const message = "hi"; //req.body.message;
  console.log("message");

  newMessage.addMessage(sender_id, item_id, message).then((res) => {
    //console.log(res);

    const templateVars = {
      message: message,
    };
    console.log(templateVars);
    // res.render("messages_show", templateVars);
  });
});

module.exports = router;
