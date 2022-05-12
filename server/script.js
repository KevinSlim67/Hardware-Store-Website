const mongoose = require('mongoose');
const Product = required('./Product')
require('dotenv').config();

 mongoose.connect(process.env.MONGO_URI, () => {
     console.log("Connected to Database");
 }, e => console.error(e));