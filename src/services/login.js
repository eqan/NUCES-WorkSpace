const db = require("../utils/dbHandler");
const bcrypt = require("bcryptjs");

let handleLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    //check email is exist or not
    let user = await getUserInfo("email", email);
    try {
      bcrypt.compare(password, user["password"], (err, isMatch) => {
        try {
          console.log(isMatch);
          if (err) throw err;
          if (isMatch) {
            resolve(user);
          }
        } catch (err) {
          reject("Password doesnt match!");
        }
      });
    } catch (err) {
      reject(`This user email "${email}" doesn't exist`);
    }
  });
};

let getUserInfo = (attribute, value) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(
        db.runQuery(
          `SELECT * FROM users WHERE ${attribute} = ?`,
          value,
          "User info not found!"
        )
      );
    } catch (err) {
      reject(err);
    }
  });
};


module.exports = {
  handleLogin: handleLogin,
  getUserInfo: getUserInfo
};
