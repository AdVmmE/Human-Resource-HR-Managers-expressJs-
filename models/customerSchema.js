const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    mobileNumber:String,
    age:Number,
    country:String,
    gender:String,},
    {timestamps:true},
);
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer; 