const serviceModel = require("../models/serviceModel");
require("dotenv").config();


// CREATE A NEW SERVICE
const createService = async (req, res) => {

    const service = req.body;
    const createdService = new serviceModel({...service, postedBy: req.postedBy, createdAt: new Date().toISOString()})

    try {
        insertedService = await createdService.save();
        res.status(201).json(insertedService);
    }
    catch (err) {
        res.status(409).json(err);
    }
}


// GET REQUESTS
const getServices = async (req, res) => {
    try {
        const services = await serviceModel.find().limit(24);

        res.status(200).json(services);
    }

    catch (error) {
        res.status(404).send(err);
    }
}

module.exports = {createService, getServices};