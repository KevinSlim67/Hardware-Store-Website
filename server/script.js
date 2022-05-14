const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

//connect to database
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to database"));

//allows communication between server and frontend
app.use(cors());

//allow express server to use json
app.use(express.json());

//creating the route to the subscriber model
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);


//start the sever
app.listen(5000, () => console.log("Server Started"));

//create product
// const product = new Product({
//     description: 'iPhone 12 White 64GB',
//     category: 'smartphone',
//     brand: 'apple',
//     OS: 'ios',
//     price: 799,
//     releaseDate: new Date(),
//     color: 'white',
//     ram: '4gb',
//     cpu: 'ARMv8.5-A',
//     disk: {storage: '64GB'},
//     numberSold: 953

// });
//product.save().then(() => console.log('Product Added'));



