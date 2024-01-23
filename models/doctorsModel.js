// - Name
// - Image URL
// - Specialization (Select tag with **Cardiologist, Dermatologist, Pediatrician, Psychiatrist** as options)
// - Experience
// - Location
// - Date (Appointment creation date, populate from backend)
// - Slots (Number of slots available for the day)
// - Fee

const mongoose = require("mongoose");

const DoctorsSchema = mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    experience:{type:String,required:true},
    location:{type:String,required:true},
    date:{type:String,required:true},
    slots:{type:String,required:true},
    fee:{type:String,required:true},
    specialization:{type:String,enum:['Cardiologist','Dermatologist','Pediatrician','Psychiatrist']},
})

const DoctorModel = mongoose.model("doctor",DoctorsSchema)

module.exports = {DoctorModel}