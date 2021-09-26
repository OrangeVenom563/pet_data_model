const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const petDetailSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{type:ObjectId,ref:"Pet_Category"},
    age:{
        type:Number,
        required:true
    },
    has_owner:{
        type:Boolean,
        required:true
    },
    owner_details:{
        required:false,
        type:ObjectId,
        ref:"Customer"
    }
})

mongoose.model("Pet_Details",petDetailSchema)