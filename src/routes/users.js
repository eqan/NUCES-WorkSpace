const express = require("express");
const router = express.Router();
const db = require("../services/register");
const bcrypt = require("bcryptjs");
const hf = require("../utils/helperFunctions");
const passport = require("passport");
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

//Register handle
router.post("/register", (req, res) => {
  let { name, email, password, password2 } = req.body;
  let errors = db.passwordValidator(name, email, password, password2);

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  }
  // Validation Passed, Now checking through database
  else {
    const result = db.getUserInfo(email) || {};
    if (!hf.isEmpty(result)) {
      errors.push({ msg: "Email already exists" });
      res.render("register", {
        errors,
        name,
        email,
        password,
        password2,
      });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          hf.throwError(err);
          password = password2 = hash;
          db.insertUser(name, email, hash)
          req.flash("success_msg", "You are now registered and can log in");
          res.redirect("/users/login");
        });
      });
    }
    res.status('pass');
  }
});
// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
})

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;