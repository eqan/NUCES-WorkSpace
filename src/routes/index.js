const express = require('express');
const router = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/faculty/academic', ensureAuthenticated, (req, res) =>
  res.render('faculty/academic', {
    user: req.user
  })
);

module.exports = router;