const express = require("express");
const router = express();
const db = require("../services/register");
const bcrypt = require("bcryptjs");
const hf = require("../utils/helperFunctions");
const cors = require('cors')
const { forwardAuthenticated } = require('../config/auth');

router.use(express.json())
// Cors
router.use(cors())

// Register Page
router.get('/',forwardAuthenticated, (req, res) => res.render('register'));

//Register handle
router.post("/", (req, res) => {
  let { name, email, password, password2 } = req.body;
  console.log(name)
  let errors = db.passwordValidator(name, email, password, password2);

    const result = db.getUserInfo(email) || {};
    if (!hf.isEmpty(result)) {
      errors.push({ msg: "Email already exists" });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          hf.throwError(err);
          password = password2 = hash;
          db.insertUser(name, email, hash)
          //res.redirect("/login");
        });
      });
    }
    res.status('pass');
});
module.exports = router;