const express = require('express');
const app = express();
const mongodb = require('mongodb');

const cal = require('./lib/cal');
const config = require('./db/db')

const PORT = 4000;
const client = mongodb.MongoClient;

client.connect(config.DB, function(err, db) {
    if(err) {
        console.log(err)
    }
    var dbo = db.db("thaiFoods");

    dbo.collection("thaiFoods").find({}).toArray(function(err, result) {
        if (err) throw err;
        let food = result
        let y 
        console.log(cal.getMenu(food,y));
       
      });
    });
app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});