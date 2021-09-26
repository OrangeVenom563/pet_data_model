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
require('./models/pet_categories');
require('./models/pet_details');
require('./models/items_in_shop');
require('./models/billing');
require('./models/shop');

app.get('/',(req,res)=>res.send({message:"welcome to petshop"}))
app.use('/customer',require('./routes/customer-routes'))
app.use('/category',require('./routes/category-routes'))
app.use('/pet',require('./routes/pet-details-route'))
app.use('/item',require('./routes/item-routes'))
app.use('/bill',require('./routes/billing-routes'))

app.listen(5000,()=>console.log('pet shop running at 5000'))
