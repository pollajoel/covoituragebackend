const mongoose = require("mongoose")

const Schema = mongoose.Schema


const UserSchema = Schema({
	
	
	isAdmin:{type:Boolean,},
    age:{type:Number,},
    userName:{type:String,},
    name:{type:String,},
    firstName:{type:String,},
    lastName:{type:String,},
    description:{type:String},
    passWord:{type:String, required:true},
    email:{type:String, required:true, unique:true, dropDups: true},
    adresse:[{city:{type:String,}, country:{type:String}, ZipCode:{type:String}, adressei:{type:String}}],
    phoneNumber:{type:String},
    civility:{type:String},
    trips:[{type:mongoose.Schema.Types.ObjectId, ref:"Trips"}],
    image:{type:mongoose.Schema.Types.ObjectId, ref:"images"}

},{ timestamps: true })

module.exports = mongoose.model('User',UserSchema)