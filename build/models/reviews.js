const mongoose = require("mongoose")
const Schema = mongoose.Schema


const reviewSchema= Schema({

    descriptions: { type:String},
    votes:{type: Number,default:0},
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    trip:{type:mongoose.Schema.Types.ObjectId, ref:"Trips"},
},{ timestamps: true });

module.exports = mongoose.model('Reviews',reviewSchema);