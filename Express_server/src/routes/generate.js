const express = require('express');
const Users = require("../models/users.model");
var mongoose=require('mongoose');
require('dotenv').config();

const router = express.Router();

const DB_URI =process.env.DB_URI
 
mongoose.connect(DB_URI)
    


router.post('/', async(req, res) => {
  var users = new Users();
  users.customId = req.body.customId ;
  users.fname = req.body.fname;
  users.lname = req.body.lname;
  users.age = req.body.age;
  users.address = req.body.address;
  users.tel = req.body.tel;
  users.save(function(err, data){
      if(err){
          console.log(error);
      }
      else{
          res.send("Insert complete");
      }
  });
});

router.get('/', async(req, res) => {
  Users.find().limit(50).exec(function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
    }
});  
});

router.delete('/', async(req, res) => {
  Users.deleteMany({}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send("delete success");
        }
    });  
});

 module.exports =  router;