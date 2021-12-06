const mysql = require('mysql')

module.exports = config;

const config = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'WorkSpaceDB',
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: 'SQLEXPRESS'
  },
})
