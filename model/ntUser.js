const mongoose=require('mongoose')


const NtSchema=new mongoose.Schema({
    fullName:{type:String,required:true},
    gender:{type:String,required:true},
    mobileNo:{type:String,required:true}

})
module.exports=mongoose.model('nt',NtSchema)