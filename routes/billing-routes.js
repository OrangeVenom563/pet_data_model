const router = require('express').Router();
const mongoose = require('mongoose');
const Billing = mongoose.model("Billing");

router.post('/create',(req,res)=>{
    const {pet_details, buyer_details, selling_date} = req.body;

    const billing = new Billing({pet_details, buyer_details, selling_date})
    billing.save()
    .then(_=>res.send({message:"Created bill"}))
    .catch(err=>{
        console.log(err)
        res.send({message:"error occured"})
    })
})

module.exports = router;