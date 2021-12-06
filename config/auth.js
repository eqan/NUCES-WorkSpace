// js - Hash and Verify Passwords with Bcrypt. js using the bcryptjs password hashing library
const bcrypt = require('bcryptjs');
const db = require('./db-config');

module.exports = {
  authenticate,
  register
};

async function register(params) {
  // create account object
  const account = new db.Account(params);

  // hash password
  account.passwordHash = bcrypt.hashSync(params.password, 10);

  // save account
  await account.save();
}

async function authenticate({ email, password }) {
  // get account from database
  const account = await db.Account.findOne({ email });

  // check account found and verify password
  if (!account || !bcrypt.compareSync(password, account.passwordHash)) {
    // authentication failed
    return false;
  } else {
    // authentication successful
    return true;
  }
}
