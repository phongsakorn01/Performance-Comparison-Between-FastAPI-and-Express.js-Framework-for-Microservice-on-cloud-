var mongoose=require('mongoose');
 
var UsersSchema = new mongoose.Schema({
    customId: String,
    fname: String,
    lname: String,
    age: String,
    address: String,
    tel: String
} ,{ versionKey: false });
 
module.exports = mongoose.model( 'users', UsersSchema, 'Users');
