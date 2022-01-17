// DB Config
const db = require('../config/db-config');


function runQuery(query, params, callback) {
  db.connect(err => { if (err) throw err });
  db.query(
    query, params, (error, results) => {
      if (error)
        throw error;
      return callback(results[0]);
    });
  db.end();
}

module.exports = {
  getUserInfo(username) {
    runQuery("SELECT * FROM Users WHERE username = ?", username, result => console.log(result));
  },
  addNewUser(firstname,lastname,mobileno,email,password){
    runQuery("Insert into RegUser(firstname,lastname,mobileno,email,password) values (?,?,?,?,?)",firstname,lastname,mobileno,email,password,result =>console.log(result));
  }
}