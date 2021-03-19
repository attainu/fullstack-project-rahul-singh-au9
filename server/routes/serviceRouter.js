const express = require("express");
const { createService, getServices, sellerServices } = require("../controllers/serviceController");
// const auth = require("../middleware/auth");
const requireSignin = require("../middleware/requireSignin");

const serviceRouter = express.Router();

serviceRouter.post("/create-service", requireSignin, createService);
serviceRouter.get("/services", getServices);
serviceRouter.get("/seller-services", requireSignin, sellerServices);
// serviceRouter.get("/service/image/:serviceId", Image);


module.exports = serviceRouter;

// npm express formidabble