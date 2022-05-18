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
//     description: 'iPad Pro 3rd Generation',
//     category: 'tablet',
//     brand: 'apple',
//     OS: 'ios',
//     price: 999,
//     releaseDate: new Date(),
//     color: 'silver',
//     ram: '8gb',
//     cpu: '8 core',
//     disk: {storage: '512GB'},
//     numberSold: 824,
//     stock: 200,
//     image: 'https://lmt.mstatic.lv/devices/images/450x450/Apple_iPad_Pro_11_3rd_Gen_Wi-Fi_1TB_MHQY3HCA75774.png'

//  });
//  product.save().then(() => console.log('Product Added'));



