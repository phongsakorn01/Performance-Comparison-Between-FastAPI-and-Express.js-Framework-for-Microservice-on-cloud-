const express = require('express');
const app = express();
const cors = require('cors')
const generate = require('./routes/generate')
require('dotenv').config();

app.use(cors())
const {
    PORT,
    DB_URI,
    SERVER_URI
} = process.env
 

app.use(express.json());

app.use('/main', generate);

app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

app.listen({ port: PORT }, function(){
    console.log(`Server is ready at ${SERVER_URI}`);
});