const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require('jsonwebtoken')

const app = express();
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "1234",
  database : "project",
})

app.post("/signup",(req,res)=>{
  const sql = "INSERT INTO users (username,email,password) VALUES (?)";
  const values = [
    req.body.username,
    req.body.email,
    req.body.password
  ]
  db.query(sql,[values],(err,data)=>{
    if(err){
      return res.json(err);
    }
    else {
      return res.json(data);
    }
  })
})

app.post("/login",(req,res)=>{
  const sql = "SELECT * FROM users WHERE username=? AND password=?";
  db.query(sql,[req.body.username,req.body.password],(err,data)=>{
    if(err){
      return res.json(err);
    }
    if(data.length>0){
       payload = {
        username: req.body.username,
      };
      const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
      return res.json(jwtToken);
    }
    else {
      return res.json("Failed")
    }
  })
})

app.listen(8081,()=>{
  console.log("listening")
})