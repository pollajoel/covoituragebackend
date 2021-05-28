const mongoose = require("mongoose")
const Schema = mongoose.Schema


const tripSchema= Schema({

    departure:{type:String, required:true},
    destination:{type:String, required:true},
    price:{type:Number, required:true},
    distance:{type:Number},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"User"}

},{ timestamps: true });


module.exports = mongoose.model('Trips',tripSchema)