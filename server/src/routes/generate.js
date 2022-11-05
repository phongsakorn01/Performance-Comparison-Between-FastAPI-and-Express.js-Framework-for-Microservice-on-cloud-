const express = require('express');
const { MongoClient } = require("mongodb");
const cal = require('../lib/cal');
const config = require('../db/db')
const router = express.Router();



router.get("/users", async(req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(config.DB);
    await client.connect();
    const users = await client.db('thaiFoods').collection('thaiFoods').find({}).toArray();
    const user = cal.getMenu(users)
    res.status(200).send(user);
    await client.close();
    
  })
  
 module.exports =  router;