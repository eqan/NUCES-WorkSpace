const express = require('express')
const mysql = require('mysql')

// Create Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nucesworkspace'
})

// Connect to MySQL
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("SQL Connected!");
})

const app = express();

// Create Database
app.get('/createdb', (req, res) => {
  let cmd = 'CREATE DATABASE WorkSpaceDB';
  db.query(cmd, err => {
    if (err)
      throw err;
    res.send("Database Created!");//OO ho ja bhai
  })
})


// Create Table
app.get('/createusertable', (req, res) => {
  let cmd = 'CREATE TABLE Users(id int AUTO_INCREMENT, username VARCHAR(255), name VARCHAR(255),'
    + 'password VARCHAR(25), authoritylevel int, PRIMARY KEY(id))';
  db.query(cmd, err => {
    if (err)
      throw err;
    res.send("Employee Table Created!");
  })
})


// Insert User
app.get('/insertuser', (req, res) => {
  let post = { username: 'eqan', name: 'Eqan Ahmad', password: 'eqan', authoritylevel: '0' }
  let cmd = 'INSERT INTO Users SET ?';
  let query = db.query(cmd, post, err => {
    if (err)
      throw err;
    res.send("User Inserted!");
  })
})

// Select Users
app.get('/getusers', (req, res) => {
  let cmd = 'SELECT * FROM Users';
  let query = db.query(cmd, (err, results) => {
    if (err)
      throw err;
    console.log(results);
    res.send("Users Displayed!");
  })
})

// Update User
app.get('/updateuser/:id', (req, res) => {
  let newName = "Ali Ahmad";
  let cmd = `UPDATE Users SET name = '${newName}' WHERE id = ${req.params.id}`;
  let query = db.query(cmd, err => {
    if (err)
      throw err;
    res.send("User Updated!");
  })
})

// Delete User
app.get('/deleteuser/:id', (req, res) => {
  let cmd = `DELETE FROM Users WHERE id = ${req.params.id}`;
  let query = db.query(cmd, err => {
    if (err)
      throw err;
    res.send("User Deleted!");
  })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
