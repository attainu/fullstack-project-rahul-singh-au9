const express = require("express");
const { createService, getServices } = require("../controllers/serviceController");
// const auth = require("../middleware/auth");
const requireSignin = require("../middleware/requireSignin");

const serviceRouter = express.Router();

serviceRouter.post("/create-service", requireSignin, createService);
serviceRouter.get("/services", getServices);


module.exports = serviceRouter;

// npm express formidabble