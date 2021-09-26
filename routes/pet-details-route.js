const router = require('express').Router();
const mongoose = require('mongoose');
const Pet_Details = mongoose.model('Pet_Details');

router.post('/create',(req,res)=>{
    const {name,category,age,has_owner,owner_details} = req.body;
    const pet_d = new Pet_Details({name,category,age,has_owner,owner_details})
    pet_d.save()
    .then(_=>res.send({message:"created pet successfully"}))
    .catch(err=>{
        console.log(err)
        res.send({message:"Unable to create pet"})
    })
})

module.exports = router;
