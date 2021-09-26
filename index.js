require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected',()=>{
    console.log("Connected to mongoDB");
});

mongoose.connection.on('err',()=>{
    console.log("Could'nt connect to mongoDb");
});

require('./models/customer');

app.get('/',(req,res)=>res.send({message:"welcome to petshop"}))
app.use('/customer',require('./routes/customer-routes'))

app.listen(5000,()=>console.log('pet shop running at 5000'))
