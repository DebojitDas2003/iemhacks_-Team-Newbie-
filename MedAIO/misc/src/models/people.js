const mongoose = require("mongoose");

const peopleSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    dob:{
        type:Number,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        trim:true,
    },
    contactNumber:{
        type:Number,
        required:true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    usage:{
        type:String,
        required:true,
        trim: true,
    },
    purpose:{
        type:String,
        required:true,
        trim:true,
    },
    
    prevUsage:{
        type:String,
        required:true,
        trim:true,
    },
    efftectsObs:{
        type:String,
        required:true,
        trim:true,
    },
    upcomingExpiry:{
        type:String,
        required:true,
        trim:true,
    },
    alert:{
        type:String,
        required:true,
        trim:true
    },
    

})

//we are creating a new collection
const PeopleInfo = new mongoose.model("peopleInfo", peopleSchema)

module.exports = PeopleInfo;