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
  try {
        users.save();
        res.status(200).json({message : "Insert complete"}) 
  } catch (error) {
        res.status(400).json({message: error.message})
  }
});

router.get('/', async(req, res) => {
    try {
        const data = await Users.find().limit(50).sort({customId:-1}).select('-_id')
        res.status(200).send(data)
     } catch (error) {
           res.status(400).json({message: error.message})
     }
 
});

router.delete('/', async(req, res) => {
    try {
        Users.collection.deleteMany()
        res.status(200).send({message : "delete complete"})
        
     } catch (error) {
           res.status(400).json({message: error.message})
     }
});

 module.exports =  router;