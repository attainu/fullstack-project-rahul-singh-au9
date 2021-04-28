const express = require("express");
const { createService, getServices, getService, sellerServices, deleteService, updateService, userServiceBookings, searchListings, getServicesCategoryWomen, getServicesCategoryMen, getServicesCategoryCleaningAndPest, getServicesCategoryElectriansAndAC, getServicesCategoryPlumbCarpPaint } = require("../controllers/serviceController");
// const auth = require("../middleware/auth");
const {requireSignin, serviceOwner} = require("../middleware/requireSignin");

const serviceRouter = express.Router();

serviceRouter.post("/create-service", requireSignin, createService);
serviceRouter.get("/services", getServices);
serviceRouter.get("/services/women", getServicesCategoryWomen);
serviceRouter.get("/services/men", getServicesCategoryMen);
serviceRouter.get("/services/CleaningAndPest", getServicesCategoryCleaningAndPest);
serviceRouter.get("/services/Electrians&AC", getServicesCategoryElectriansAndAC);
serviceRouter.get("/services/PlumbCarpPaint", getServicesCategoryPlumbCarpPaint);
serviceRouter.get("/service/:serviceId", getService);
serviceRouter.get("/seller-services", requireSignin, sellerServices);
serviceRouter.delete("/delete-service/:serviceId", requireSignin, deleteService);
serviceRouter.patch("/update-service/:serviceId", requireSignin, updateService);
serviceRouter.get("/user-service-bookings", requireSignin, userServiceBookings);
serviceRouter.post("/search-listings", searchListings);
// serviceRouter.get("/service/image/:serviceId", Image);

module.exports = serviceRouter;

// npm express formidabble