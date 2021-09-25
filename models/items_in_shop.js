const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    no_available:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userForAnimals:[{type:ObjectId,ref:"Pet_Category"}],
})

mongoose.model("Item",itemSchema)