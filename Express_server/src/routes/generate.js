const express = require('express');
const { MongoClient } = require("mongodb");
const config = require('../db/db')
const router = express.Router();



router.post('/create', async(req, res) => {
  const user = req.body;
  const client = new MongoClient(config.DB);
  await client.connect();
  await client.db('users_express').collection('users').insertOne({
    id: parseInt(user.id),
    fname: user.fname,
    lname: user.lname,
    username: user.username,
    email: user.email,
    tel: user.tel,
    password:user.password,
    confirm_password:user.confirm_password
  });
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "complete sign up",
   
  });
})

router.get('/users', async(req, res) => {
  const id = parseInt(req.params.id);
  const client = new MongoClient(config.DB);
  await client.connect();
  const users = await client.db('users_express').collection('users').find({}).toArray();
  await client.close();
  res.status(200).send(users);
})

router.delete('/users/delete', async(req, res) => {
  const id = parseInt(req.body.id);
  const client = new MongoClient(config.DB);
  await client.connect();
  await client.db('users_express').collection('users').deleteOne({'id': id});
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "User with ID = "+id+" is deleted"
  });
})

 module.exports =  router;