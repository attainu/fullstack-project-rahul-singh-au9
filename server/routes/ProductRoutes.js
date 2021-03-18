const express = require('express')
const ProductRouter = express.Router();

const upload = require('../utils/multer')

const  { getProducts, createProducts } = require('../controllers/Product.controller');
const Product = require('../models/productModel');


ProductRouter.get('/getProducts', getProducts)
ProductRouter.post('/createProducts', upload.single("fileName"), createProducts )


module.exports = ProductRouter;