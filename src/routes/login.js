const express = require("express");
const router = express.Router();
const passport = require("passport");
const cors = require('cors')
const { forwardAuthenticated } = require('../config/auth');

router.use(express.json())
// Cors
router.use(cors())

// Login Page
router.get('/', forwardAuthenticated, (req, res) => res.render('login'));

// Login Handle
router.post('/', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/login',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
})

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
});

module.exports = router;