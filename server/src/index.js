const express = require('express');
const app = express();
const cors = require('cors')
const generate = require('./routes/generate')
const mq = require('./modules/rabbitmq')

app.use(cors())
const PORT = 4000;
app.use(express.json());

app.use('/main', generate);
mq.consume('generate','phongsakorn','yaemwong',(msg)=>{
    console.log(msg);
})
app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});