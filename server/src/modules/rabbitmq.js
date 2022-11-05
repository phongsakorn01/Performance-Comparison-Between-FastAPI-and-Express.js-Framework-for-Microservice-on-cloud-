const amqp = require('amqplib/callback_api');

const AMQP_URL  = 'amqp://localhost:5672';

const ON_DEATH = require('death');


module.exports.publish = function(params){

}

module.exports.consume = function(ex,qname,msgKey,invkFN){
    amqp.connect(AMQP_URL, function(err, connection){
       connection.createChannel(function(err,ch){
         ch.assertExchange(ex,'direct',{durable:true});
         ch.assertQueue(qname,{exclusive: false},function(err,q){
             ch.bindQueue(q.queue,ex,msgKey);
              ch.consume(q.queue,function(msg){
                 invkFN(msg)
                  ON_DEATH( function(signal,err){
                      setTimeout(() => {conn.close(),process.exit(0)
                        
                    }, {noACK:true});
                  },);
               
              })
         })
        })
    })
}