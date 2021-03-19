const serviceModel = require("../models/serviceModel");
require("dotenv").config();


// CREATE A NEW SERVICE
const createService = async (req, res) => {

    const service = req.body;
    const createdService = new serviceModel({...service, createdBy: service.postedBy, createdAt: new Date().toISOString()})
    createdService.postedBy = req.user._id

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
        const services = await serviceModel.find()
        .limit(24).populate("postedBy", "_id name");

        res.status(200).json(services);
    }

    catch (error) {
        res.status(404).send(err);
    }
}


// GET REQUESTS
const sellerServices = async (req, res) => {
    try {
        const sellerAllservices = await serviceModel.find({createdBy: req.user.email});

        res.status(200).json(sellerAllservices);
    }
    catch (error) {
        res.status(404).send(err);
    }
}

// const Image = async (req, res) => {
//     try {
//         const Service = await serviceModel.findById(req.params.serviceId).exec();

//         if(Service && Service.image && Service.image.data!== null){
//             res.set("Content-Type", Service.image.contentType);
//             return res.send(Service.image.data);
//         }
//     }
//     catch (error) {
//         res.status(404).send(err);
//     }
// }

module.exports = { createService, getServices, sellerServices };