const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>res.send({message:"welcome to petshop"}))

app.listen(5000,()=>console.log('pet shop running at 5000'))
