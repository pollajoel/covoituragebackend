const mongoose = require("mongoose")
const Schema = mongoose.Schema


const reviewSchema= Schema({

    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    trip:{type:mongoose.Schema.Types.ObjectId, ref:"Trips"},
    start:{type:Number}
},{ timestamps: true });

module.exports = mongoose.model('Reviews',reviewSchema);