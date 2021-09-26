const router = require('express').Router();
const mongoose = require('mongoose');
const Item = mongoose.model("Item");

router.post('/create',(req,res)=>{
    const {name,
        no_available,
        category,
        description,
        userForAnimals} = req.body;
    
    const item = new Item({name,no_available,category,description,userForAnimals})

    item.save()
    .then(_=>res.send({message:"Created new item successfully"}))
    .catch(err=>{
        console.log(err)
        res.send({message:"Unable to create item"})
    })
})

module.exports = router;