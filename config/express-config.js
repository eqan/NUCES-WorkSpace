const express = require('express')
// A way to store user data between HTTP requests in encrypted form
const session = require("express-session");
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
const cookieParser = require('cookie-parser');
// Purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies.
//const passport = require("passport");
//  The flash is a special area of the session used for storing messages.
const flash = require("connect-flash");

// Creating an express app
const app = express();

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Connect flash
app.use(cookieParser());
app.use(flash());

// Passport Config
//require("./config/passport")(passport);

module.exports = app;
