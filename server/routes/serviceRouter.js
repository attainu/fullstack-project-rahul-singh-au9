const express = require("express");
const { createService, getServices, getService, sellerServices, deleteService, updateService, userServiceBookings, searchListings } = require("../controllers/serviceController");
// const auth = require("../middleware/auth");
const {requireSignin, serviceOwner} = require("../middleware/requireSignin");

const serviceRouter = express.Router();

serviceRouter.post("/create-service", requireSignin, createService);
serviceRouter.get("/services", getServices);
serviceRouter.get("/service/:serviceId", getService);
serviceRouter.get("/seller-services", requireSignin, sellerServices);
serviceRouter.delete("/delete-service/:serviceId", requireSignin, deleteService);
serviceRouter.patch("/update-service/:serviceId", requireSignin, updateService);
serviceRouter.get("/user-service-bookings", requireSignin, userServiceBookings);
serviceRouter.post("/search-listings", searchListings);
// serviceRouter.get("/service/image/:serviceId", Image);

module.exports = serviceRouter;

// npm express formidabble