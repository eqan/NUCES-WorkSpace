const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const db = require("../services/login");

let initPassportLocal = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        let tempUser;
        try {
          await db.handleLogin(email, password).then(async (user) => {
          tempUser = user;
          });
          if(tempUser)
          {
            return done(null, tempUser, null);
          }
           return done(null, false, req.flash("error_msg", "login failed!"));
        }
         catch (err) {
           return done(err, false, req.flash("error_msg", "login failed!"));
        }
      }
    )
  );
};

passport.serializeUser((user, done) => {
  done(null, user["id"]);
});

passport.deserializeUser((id, done) => {
  db.getUserInfo("id", id)
    .then((user) => {
      return done(null, user);
    })
    .catch((error) => {
      return done(error, null);
    });
});
module.exports = initPassportLocal;
