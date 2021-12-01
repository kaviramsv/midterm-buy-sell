const express = require("express");
const router = express.Router();
const getAcctDetails = require("../db/get-user-from-userid");
const getItems = require("../db/get-featured-items");

router.get("/", (req, res) => {
  const user_id = req.session.user_id;
  getAcctDetails.getUserfromId(user_id)
  .then((user) => {
    console.log("acct",user);
  const templateVars = {
    user,
    user_id,
    };
    res.render("account-info.ejs",templateVars);
  })
  .catch((err) => {
  console.log(err.message);
 });
});


// router.post("/", (req, res) => {
//   const form_email = req.body.email;

//   userFnc.getUser(form_email).then((user) => {

//   req.session.user_id = user.id;
//   res.redirect(`/featured`);
//   }).catch(err => {
//     res
//       .status(500)
//       .json({ error: err.message });
//   });
// });
module.exports = router;
