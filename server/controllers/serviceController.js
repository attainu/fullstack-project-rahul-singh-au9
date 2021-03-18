const serviceModel = require("../models/serviceModel");
require("dotenv").config();


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

module.exports = {createService}