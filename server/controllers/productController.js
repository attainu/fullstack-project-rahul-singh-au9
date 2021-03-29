const productModel = require("../models/productModel");
require("dotenv").config();
const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");
const productOrderModel = require("../models/productOrderModel");


// CREATE A NEW PRODUCT
const createProduct = async (req, res) => {

    const product = req.body;
    const createdProduct = new productModel({...product, createdBy: product.postedBy, createdAt: new Date().toISOString()})
    createdProduct.postedBy = product.postedBySeller

    try {
        insertedService = await createdProduct.save();
        res.status(201).json(insertedService);
    }
    catch (err) {
        res.status(409).json(err);
    }
}


// GET ALL SERVICES REQUESTS
const getProducts = async (req, res) => {
    try {
        const products = await productModel.find()
        .limit(24);

        res.status(200).json(products);
    }

    catch (err) {
        res.status(404).send(err);
    }
}


// GET SINGLE PRODUCT
const getProduct = async (req, res) => {
    try {
        const _id = req.params.productId

        const product = await productModel.findById(_id);

        res.status(200).json(product);
    }

    catch (err) {
        res.status(404).json(err);
    }
};


// GET USER'S SERVICES BOOKINGS
const userProductBookings = async (req, res) => {
    try {
        const userProducts = await productOrderModel.find({ orderedBy: req.user.id})
        .select('session')
        .populate('Product')
        .populate('orderedBy', '_id name')
        .exec();
        res.status(200).json(userProducts);
    }

    catch (err) {
        res.status(404).send(err);
    }
}


module.exports = { createProduct, getProducts, getProduct, userProductBookings };