const router = require('express').Router();
const moongose = require('mongoose');
const Pet_Category = moongose.model('Pet_Category');

router.post('/create',(req,res)=>{
    const {animal_type,
        breed_name,
        life_expectancy,
        breeding_age,
        recommended_foods,
        foods_to_avoid,
        selling_price} = req.body;


    const petCategory = new Pet_Category({animal_type,
        breed_name,
        life_expectancy,
        breeding_age,
        recommended_foods,
        foods_to_avoid,
        selling_price})

        petCategory.save()
        .then(_=>res.send({message:"Created new pet category"}))
        .catch(err=>{
            // console.log(err)
            res.send({message:"Unable to create category"})
        })
})

module.exports = router;