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

// const product = new Product({
//     description: 'Microsoft Surface 16 GB',
//     category: 'laptop',
//     brand: 'microsoft',
//     OS: 'windows',
//     price: 999,
//     releaseDate: new Date(),
//     color: 'black',
//     ram: '16gb',
//     cpu: 'Intel Core i7-11xxx',
//     disk: {storage: '256GB', category: 'ssd'},
//     numberSold: 814,
//     stock: 2100,
//     image: 'https://i.ibb.co/2kdVYWD/614b8-F64r-S-AC-SL1500-removebg-preview.png'

//  });
//  product.save().then(() => console.log('Product Added'));



