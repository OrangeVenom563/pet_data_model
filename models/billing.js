const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const petDetailSchema = new mongoose.Schema({

    pet_details:{type:ObjectId,ref:"Pet_Details"},
    pet_category:{type:ObjectId,ref:"Pet_Category"},
    buyer_details:{type:ObjectId,ref:"Customer"},

    bill_no:{
        type:Number,
        required:true
    },
    selling_date:{
        type:Date,
        ref:Customer
    }
})

mongoose.model("Pet_Details",petDetailSchema)