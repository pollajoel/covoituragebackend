const { any } = require("joi");
const mongoose = require("mongoose")
const Schema = mongoose.Schema


const tripSchema= Schema({

    departure:{type:String, required:true},
    destination:{type:String, required:true},
    price:{type:Number, required:true},
    datedepart:{type:String},
    datearrived:{type:String},
    distance:{type:Number},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    passengers:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}]

},{ timestamps: true });


module.exports = mongoose.model('Trips',tripSchema)