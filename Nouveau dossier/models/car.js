const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const CarSchema = Schema({
    mark:{type: String, required: true},
    owner:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    picture:{type: mongoose.Schema.Types.ObjectId, ref:"images"},
    color: {type: String},
    
})

module.exports = mongoose.model('Car',CarSchema);