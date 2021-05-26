const mongoose = require("mongoose")
const Schema = mongoose.Schema


const TripsSchema= Schema({

    departure:{type:String, required:true},
    price:{type:Number, required:true},
    distance:{type:Number},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    reviews:{type:mongoose.Schema.Types.ObjectId,ref:"Reviews"},
    preferences:{
        animalsAllow:{type:Boolean,default:true},
        musicAllow:{ type:Boolean,default:true},
        smokeAllow:{type:Boolean, default:true},
        automaticAccept:{type:Boolean,default:true},
        behindmaxplace:{type:Number,default:2}
    }


},{ timestamps: true });


module.exports = mongoose.model('Trips',TripsSchema);