const express = require('express');
const app = express();
const { MongoClient } = require("mongodb");
const cors = require('cors')
const cal = require('./lib/cal');
const config = require('./db/db')

app.use(cors())
const PORT = 4000;

app.get('/users', async(req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(config.DB);
    await client.connect();
    const users = await client.db('thaiFoods').collection('thaiFoods').find({}).toArray();
    const user = cal.getMenu(users)
    res.status(200).send(user);
    await client.close();
  })

app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});