const express = require('express');
const app = express();
const cors = require('cors')
const generate = require('./routes/generate')


app.use(cors())
const PORT = 4000;
app.use(express.json());

app.use('/users', generate);

app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});