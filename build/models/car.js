const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const CarSchema = Schema({
    name:{type: String,required: true,},
    mark:{type: string, required: true},
    owner:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    picture:{type: mongoose.Schema.Types.ObjectId, ref:"images"}
    
})

module.exports = mongoose.model('Car',CarSchema);