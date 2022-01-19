const mysql = require('mysql')

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

module.exports = config;
