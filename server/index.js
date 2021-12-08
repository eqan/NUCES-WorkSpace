const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nucesworkplace"
})

db.connect(err=>{
    if(err) throw(err);
    else console.log("DataBase Server Connected!");
});

app.get("/",(req,res)=>{
    res.send("<h1>Welcome! Move to /createdb to create DB!</h1>");
})

app.get("/createdb",(req,res)=>{
    const CDBQuery="CREATE DATABASE NUCESWORKSPACEDB;";
    db.query(CDBQuery,(err)=>errthrow(err,"Query Executed!"));
    res.send("<h>DataBase Created!</h>");
})

app.listen(3001,()=>{console.log("Server is listening at localhost:3000")});

//REQUIRED FUNCTIONS
function errthrow(err, message){
    if(err) throw(err);
    else console.log(message);
}