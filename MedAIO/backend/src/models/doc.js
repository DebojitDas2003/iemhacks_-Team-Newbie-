const mongoose = require("mongoose");

const doctorSchema = new  mongoose.Schema({
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
const DoctorInfo = new mongoose.model("DoctorInfo", doctorSchema)

module.exports = DoctorInfo;