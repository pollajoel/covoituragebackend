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
    image:{type:mongoose.Schema.Types.ObjectId, ref:"images"},
    car:{type: mongoose.Schema.Types.ObjectId, ref:"Car"},
    preferences:{
        
        automaticAccept:{type:Boolean,default:true},
        behindmaxplace:{type:Number,default:2},
        
        animalsAllow:{
            Iloveanimals:{type:Boolean},
            havepreferences:{ type:Boolean},
            notAllow:{ type: Boolean}   
        },
        smokeAllow:{
            smokenotallow:{type: Boolean},
            smokebrealallow:{type: Boolean},
            smookeallow:{type: Boolean}
        },
        discussion:{
            speakalot:{type: Boolean},
            speaksmall:{type: Boolean},
            notspek:{type: Boolean}
        },

        musicAllow:{ 
                musiclisten:{type: Boolean,},
                thatdepends:{type: Boolean},
                slience:{type: Boolean}
        },


    },
    reviews:{type:mongoose.Schema.Types.ObjectId,ref:"Reviews"}
},{ timestamps: true })

module.exports = mongoose.model('User',UserSchema)