const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const billingSchema = new mongoose.Schema({

    pet_details:{type:ObjectId,ref:"Pet_Details"},
    buyer_details:{type:ObjectId,ref:"Customer"},
    selling_date:{type:Date}
})

mongoose.model("Billing",billingSchema)