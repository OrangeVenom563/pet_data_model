const router = require('express').Router();
const mongoose = require('mongoose');
const Customer = mongoose.model("Customer")

router.post('/create',(req,res)=>{
    const {name,ph_no,address,email,ownsPet,petDetails} = req.body;
    if(!name||!ph_no||!address||!email){
        return res.send({message:"Failed to enter name, ph_no, address or email"})
    }
    const customer = new Customer({name,ph_no,address,email,ownsPet,petDetails})
    customer
    .save()
    .then(resp=>res.send({message:"added customer Successfully"}))
    .catch(err=>res.send(err))
})


module.exports = router;