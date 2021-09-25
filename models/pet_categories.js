const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const petCategorySchema = new mongoose.Schema({
    animal_type:{
        type:String,
        required:true
    },
    breed_name:{
        type:String,
        required:true
    },
    life_expectancy:{
        type:Number,
        required:true
    },
    breeding_age:{
        type:Number,
        required:true
    },
    recommended_foods:{
        type:String,
        required:true
    },
    foods_to_avoid:{
        type:String,
        required:true
    },
    selling_price:{
        type:Number,
        required:true
    }
})

mongoose.model("Pet_Category",petCategorySchema)