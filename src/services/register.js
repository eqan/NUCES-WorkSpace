const db = require("../utils/dbHandler");
let data;

function getUserInfo(email) {
  db.runQuery("SELECT * FROM users WHERE email = ?", email, (result) => {
    data = result;
  });
  return data;
}

function insertUser(username, email, password, type) {
  db.runQuery(
    "INSERT INTO users(name, email, password, type) VALUES(?, ?, ?, ?)",
    [username, email, password, type],
    (result) => {
      data = result;
    }
  );
  return data;
}

function passwordValidator(name, email, password, password2)
{
  let errors = [];
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }
  return errors;
}

module.exports = { getUserInfo, insertUser, passwordValidator };
