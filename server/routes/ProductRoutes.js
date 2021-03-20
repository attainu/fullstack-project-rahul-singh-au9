const express = require('express')
const ProductRouter = express.Router();

const upload = require('../utils/multer')

const  { getProducts, createProducts, getProductDetail } = require('../controllers/Product.controller');
const Product = require('../models/productModel');


ProductRouter.get('/getProducts', getProducts)
ProductRouter.get('/getProducts/:id', getProductDetail)
ProductRouter.post('/createProducts', upload.single("fileName"), createProducts )


module.exports = ProductRouter;