const express = require("express");
const router = express();
const db = require("../services/register");
const bcrypt = require("bcryptjs");
const hf = require("../utils/helperFunctions");
const cors = require('cors')
const { forwardAuthenticated } = require('../config/auth');

function checkUserType(type){
  if(type === '')
    return false;
  return type === "Admin" ? 1 : type === "Faculty" ? 2 : 3;
}

router.use(express.json())
// Cors
router.use(cors())

// Register Page
router.get('/',forwardAuthenticated, (req, res) => res.render('register'));

//Register handle
router.post("/", (req, res) => {
  let {type, name, email, password, password2 } = req.body;
  let errors = db.passwordValidator(type, name, email, password, password2);
    const result = db.getUserInfo(email) || {};
    if (!hf.isEmpty(result)) {
      errors.push({ msg: "Email already exists" });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          hf.throwError(err);
          password = password2 = hash;
          userType = checkUserType(type);
          if(userType)
            db.insertUser(name, email, password, userType);
          else
            errors.push("No type detected");
          res.redirect("/login");
        });
      });
    }
    res.status('pass');
});
module.exports = router;