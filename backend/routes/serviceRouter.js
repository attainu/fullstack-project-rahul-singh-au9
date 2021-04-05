// const express = require("express");
// const { createService, getServices, getService, sellerServices, deleteService, updateService, userServiceBookings, searchListings } = require("../controllers/serviceController");
// // const auth = require("../middleware/auth");
// const {requireSignin, serviceOwner} = require("../middleware/requireSignin");

import express from 'express'
import { createService, getService, getServices, sellerServices,deleteService, updateService, userServiceBookings, searchListings } from '../controllers/serviceController.js'
import { requireSignin,serviceOwner } from '../middleware/requireSignin.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const serviceRouter = express.Router();

serviceRouter.post("/create-service", protect, createService);
serviceRouter.get("/", getServices);
serviceRouter.get("/service/:serviceId", getService);
serviceRouter.get("/seller-services", protect, sellerServices);
serviceRouter.delete("/delete-service/:serviceId", protect, deleteService);
serviceRouter.patch("/update-service/:serviceId", protect, updateService);
serviceRouter.get("/user-service-bookings", protect, userServiceBookings);
serviceRouter.post("/search-listings", searchListings);
// serviceRouter.get("/service/image/:serviceId", Image);

// module.exports = serviceRouter;
export default serviceRouter

// npm express formidabble