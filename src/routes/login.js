const express = require("express");
const router = express.Router();
const passport = require("passport");
const cors = require('cors')
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.use(express.json())
// Cors
router.use(cors())

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/faculty/academic',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
})

// Academics
router.get('/faculty/academic', ensureAuthenticated, (req, res) =>
  res.render('faculty/academic', {
    user: req.user
  })
);


// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
});

module.exports = router;