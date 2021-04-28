const serviceModel = require("../models/serviceModel");
require("dotenv").config();
const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");


// CREATE A NEW SERVICE
const createService = async (req, res) => {

    const service = req.body;
    const createdService = new serviceModel({...service, createdBy: service.postedBy, createdAt: new Date().toISOString()})
    createdService.postedBy = service.postedBySeller

    try {
        insertedService = await createdService.save();
        res.status(201).json(insertedService);
    }
    catch (err) {
        res.status(409).json(err);
    }
}


// GET ALL SERVICES REQUESTS
const getServices = async (req, res) => {
    try {
        const services = await serviceModel.find({to: {$gte: new Date()}})
        .limit(34);

        res.status(200).json(services);
    }

    catch (err) {
        res.status(404).send(err);
    }
};


// GET SINGLE SERVICE
const getService = async (req, res) => {
    try {
        const _id = req.params.serviceId
        const service = await serviceModel.findById(_id);

        res.status(200).json(service);
    }

    catch (err) {
        res.status(404).json(err);
    }
};


// GET SELLER SERVICES REQUESTS
const sellerServices = async (req, res) => {
    try {
        const sellerAllservices = await serviceModel.find({createdBy: req.user.email});

        res.status(200).json(sellerAllservices);
    }
    catch (err) {
        res.status(404).send(err);
    }
}

// DELETE THE SERVICE
const deleteService = async (req, res) => {
    try {
        const deletedService = await serviceModel.findByIdAndDelete(req.params.serviceId).select("-image.data").exec();

        res.status(200).json(deletedService);
    }
    catch (err) {
        res.status(404).send(err);
    }
}


// UPDATE A SERVICE
const updateService = async (req, res) => {

    const service = req.body;

    try {
        const _id = req.params.serviceId

        const updatedService = await serviceModel.findByIdAndUpdate(_id,
            {...service }, {new: true});

        res.status(204).json(updatedService);
    }
    catch (err) {
        res.status(409).json(err);
    }
}


// GET USER'S SERVICES BOOKINGS
const userServiceBookings = async (req, res) => {
    try {
        const userBookings = await orderModel.find({ orderedBy: req.user.id})
        .select('session')
        .populate('Service')
        .populate('orderedBy', '_id name')
        .exec();
        res.status(200).json(userBookings);
    }

    catch (err) {
        res.status(404).send(err);
    }
}


// CREATE A NEW SERVICE
const searchListings = async (req, res) => {

    const { location } = req.body;
    // console.log({location, searchValue});

    try {
        const SearchResults = await serviceModel.find({ location })
        .exec();
        res.status(200).json(SearchResults);
    }
    catch (err) {
        res.status(404).send(err);
    }
};


// GET ALL SERVICES REQUESTS
const getServicesCategoryWomen = async (req, res) => {
    try {
        const services = await serviceModel.find({option: "Women" || "Salon For Women" || "Message for Women" })
        .limit(10);

        res.status(200).json(services);
    }

    catch (err) {
        res.status(404).send(err);
    }
};


// GET ALL SERVICES REQUESTS
const getServicesCategoryMen = async (req, res) => {
    try {
        const services = await serviceModel.find({option: "Men" || "Salon For Men" || "Message for Men" })
        .limit(10);

        res.status(200).json(services);
    }

    catch (err) {
        res.status(404).send(err);
    }
};


// GET ALL SERVICES REQUESTS
const getServicesCategoryCleaningAndPest = async (req, res) => {
    try {
        const services = await serviceModel.find({option: "Cleaning" || "Cleaning and disinfection" || "Pest Control" })
        .limit(10);

        res.status(200).json(services);
    }

    catch (err) {
        res.status(404).send(err);
    }
};


// GET ALL SERVICES REQUESTS
const getServicesCategoryElectriansAndAC = async (req, res) => {
    try {
        const services = await serviceModel.find({option: "Electricians" || "Ac Service and Repair"})
        .limit(10);

        res.status(200).json(services);
    }

    catch (err) {
        res.status(404).send(err);
    }
};


// GET ALL SERVICES REQUESTS
const getServicesCategoryPlumbCarpPaint = async (req, res) => {
    try {
        const services = await serviceModel.find({option: "Painters"})
        .limit(10);

        res.status(200).json(services);
    }

    catch (err) {
        res.status(404).send(err);
    }
};


// const Image = async (req, res) => {
//     try {
//         const Service = await serviceModel.findById(req.params.serviceId).exec();

//         if(Service && Service.image && Service.image.data!== null){
//             res.set("Content-Type", Service.image.contentType);
//             return res.send(Service.image.data);
//         }
//     }
//     catch (err) {
//         res.status(404).send(err);
//     }
// }

module.exports = { createService, getServices, getService, sellerServices, deleteService, updateService, userServiceBookings, searchListings, getServicesCategoryWomen, getServicesCategoryMen, getServicesCategoryCleaningAndPest, getServicesCategoryElectriansAndAC, getServicesCategoryPlumbCarpPaint };