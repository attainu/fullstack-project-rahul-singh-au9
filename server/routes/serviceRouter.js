const express = require("express");
const { createService, getServices, getService, sellerServices, deleteService } = require("../controllers/serviceController");
// const auth = require("../middleware/auth");
const {requireSignin, serviceOwner} = require("../middleware/requireSignin");

const serviceRouter = express.Router();

serviceRouter.post("/create-service", requireSignin, createService);
serviceRouter.get("/services", getServices);
serviceRouter.get("/service/:serviceId", getService);
serviceRouter.get("/seller-services", requireSignin, sellerServices);
serviceRouter.delete("/delete-service/:serviceId", requireSignin, deleteService);
// serviceRouter.get("/service/image/:serviceId", Image);


module.exports = serviceRouter;

// npm express formidabble