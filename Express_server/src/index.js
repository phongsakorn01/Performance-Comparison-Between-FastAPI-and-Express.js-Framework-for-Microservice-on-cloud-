const express = require('express');
const app = express();
const cors = require('cors')
const generate = require('./routes/generate')
require('dotenv').config();

app.use(express.json());

app.use(cors())

const {
    PORT,
    SERVER_URI
} = process.env
 

app.use(express.json());

app.use('/express', generate);

app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

app.listen({ port: PORT }, function(){
    console.log(`Server is ready at ${SERVER_URI} ${PORT}`);
});