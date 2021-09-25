const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ph_no:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    ownsPet:{
        type:Boolean,
        required:true
    },
    petDetails:[{type:ObjectId,ref:"Pet_Details"}],
})

mongoose.model("Customer",customerSchema)