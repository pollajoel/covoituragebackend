const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ImageSchema = Schema({
    url:{type:String,required:true},
    owner:{type: mongoose.Schema.Types.ObjectId,ref:"User"}
})

module.exports= mongoose.model('images',ImageSchema)