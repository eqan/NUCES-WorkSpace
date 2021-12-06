// DB Config
const db = require('../config/db-config');
// Authentication config
const auth = require('../config/auth');

function runQuery(query, params, callback) {
  db.connect(err => { if (err) throw err });
  db.query(
    query, params, (error, results) => {
      if (error)
        throw error;
      callback(results[0]);
    });
  db.end();
}

module.exports = {
  addUser(username, name, password, priority) {
    auth.register([username, name, password, priority]);
  },
}
