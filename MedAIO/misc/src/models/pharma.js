const mongoose = require("mongoose");

const pharmaSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    contactNumber:{
        type:Number,
        required:true,
        unique: true,
    }
    
})

//we are creating a new collection
const PharmaInfo = new mongoose.model("PharmaInfo", pharmaSchema)

module.exports = PharmaInfo;