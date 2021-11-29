const express = require("express");
const router = express.Router();

const newMessage = require("../db/add_message-query");

router.post("/new", (req, res) => {
  const sender_id = 2 //req.session.sender_id //get id from session;
  const item_id = 3;//req.body.item_id; //req.body.item_id;
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
